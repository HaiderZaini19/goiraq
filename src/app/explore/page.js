'use client';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Dancing_Script } from 'next/font/google';
import Navbar from '@/app/components/Navbar';

const dancing = Dancing_Script({ subsets: ['latin'] });

// Map boundaries and settings
const IRAQ_BOUNDS = [
  [29.0000, 38.7936], // Southwest coordinates
  [37.5000, 49.0000]  // Northeast coordinates 
];
const IRAQ_CENTER = [33.2232, 43.6793];
const MIN_ZOOM = 6;
const MAX_ZOOM = 12;

// Dynamically import map components
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

// Historical sites data (removed sites that are too close to each other)
const historicalSites = [
  {
    id: 1,
    name: "Great Ziggurat of Ur",
    coordinates: [30.9613, 46.1031],
    description: `The Great Ziggurat of Ur was built as a temple complex in the ancient city of Ur, dedicated to the moon god Nanna. Built around 2100 BCE during the Third Dynasty of Ur, it:
    • Rises 30 meters above the desert plain
    • Features three levels of terraces
    • Was partially reconstructed in the 1980s
    • Represents one of the best-preserved ziggurats in Iraq`,
    period: "Ancient Sumerian",
    image: "/images/sites/ur.jpg",
    markerIcon: "/images/sites/ur.jpg",
    shortDescription: "Ancient Sumerian temple complex dedicated to the moon god"
  },
  {
    id: 2,
    name: "Babylon's Ishtar Gate",
    coordinates: [32.5422, 44.4207],
    description: `The Ishtar Gate was the eighth gate to the inner city of Babylon, constructed around 575 BCE by King Nebuchadnezzar II. Notable features include:
    • Stunning blue glazed bricks
    • Rows of decorated animals including dragons and bulls
    • Original height of 14 meters
    • Dedicated to the Babylonian goddess Ishtar`,
    period: "Neo-Babylonian",
    image: "/images/sites/ishtar.jpeg",
    markerIcon: "/images/sites/ishtar.jpeg",
    shortDescription: "Magnificent blue-tiled entrance to ancient Babylon"
  },
  {
    id: 3,
    name: "Spiral Minaret of Samarra",
    coordinates: [34.1961, 43.8761],
    description: `The Spiral Minaret (Malwiya Minaret) is part of the Great Mosque of Samarra, built in 851 CE. This unique structure:
    • Stands 52 meters high
    • Features a spiral ramp that wraps around the tower
    • Represents innovative Islamic architecture
    • Was the largest mosque in the world at its time`,
    period: "Medieval Islamic",
    image: "/images/sites/Malwiya_Minaret_(30553349415).jpg",
    markerIcon: "/images/sites/Malwiya_Minaret_(30553349415).jpg",
    shortDescription: "Iconic spiral tower of the Great Mosque of Samarra"
  },
  {
    id: 4,
    name: "Erbil Citadel",
    coordinates: [36.1911, 44.0094],
    description: `The Erbil Citadel is one of the oldest continuously inhabited sites in the world, dating back at least 6,000 years. This UNESCO World Heritage site features:
    • A raised fortified settlement mound
    • Ottoman-era architecture
    • Complex layers of civilization
    • Traditional Kurdish architecture and urban planning`,
    period: "Multiple Periods",
    image: "/images/sites/erbil citadel.jpg",
    markerIcon: "/images/sites/erbil citadel.jpg",
    shortDescription: "One of the oldest continuously inhabited cities in the world"
  },
  {
    id: 5,
    name: "Ctesiphon Arch",
    coordinates: [33.0958, 44.5847],
    description: `The Arch of Ctesiphon (Taq Kasra) is the largest single-span vault of unreinforced brickwork in the world. Built in the 6th century CE:
    • Spans 25 meters wide and reaches 30 meters high
    • Last remaining structure of the ancient city of Ctesiphon
    • Masterpiece of Persian architecture
    • Former palace of the Sasanian Empire`,
    period: "Sasanian",
    image: "/images/sites/ctesiphon.jpg",
    markerIcon: "/images/sites/ctesiphon.jpg",
    shortDescription: "Largest brick-built arch in the world"
  },
  {
    id: 6,
    name: "Hatra",
    coordinates: [35.5877, 42.7193],
    description: `Hatra was a large fortified city of the Parthian Empire. This UNESCO World Heritage site includes:
    • Massive circular walls with towers
    • Temple complex combining Greek and Oriental architecture
    • Well-preserved sculptures and artifacts
    • Evidence of cultural exchange between East and West`,
    period: "Parthian",
    image: "/images/sites/hatra.jpg",
    markerIcon: "/images/sites/hatra.jpg",
    shortDescription: "Ancient fortified city and religious center"
  },
  {
    id: 7,
    name: "Nimrud",
    coordinates: [36.0972, 43.3254],
    description: `Nimrud was an ancient Assyrian city, featuring:
    • Massive palace complexes
    • Famous reliefs and sculptures
    • Advanced irrigation systems
    • Important archaeological discoveries`,
    period: "Assyrian",
    image: "/images/sites/nimrud.jpg",
    markerIcon: "/images/sites/nimrud.jpg",
    shortDescription: "Ancient Assyrian capital with remarkable palaces"
  },
  {
    id: 9,
    name: "Assur",
    coordinates: [35.4557, 43.2667],
    description: `Assur was the first capital of the Assyrian Empire:
    • Religious center for the Assyrian Empire
    • Temple of the god Ashur
    • Ancient fortifications and palaces
    • UNESCO World Heritage site`,
    period: "Assyrian",
    image: "/images/sites/assur.jpg",
    markerIcon: "/images/sites/assur.jpg",
    shortDescription: "First capital and religious center of Assyria"
  },
  {
    id: 10,
    name: "Abbasid Palace Baghdad",
    coordinates: [33.3406, 44.4009],
    description: `The Abbasid Palace represents the golden age of Baghdad:
    • Center of learning and culture
    • House of Wisdom location
    • Islamic architectural features
    • Symbol of the Islamic Golden Age`,
    period: "Medieval Islamic",
    image: "/images/sites/abbasid.jpg",
    markerIcon: "/images/sites/abbasid.jpg",
    shortDescription: "Symbol of Baghdad's Golden Age"
  },
  {
    id: 11,
    name: "Khorsabad",
    coordinates: [36.5095, 43.2282],
    description: `Khorsabad was built as the capital of Assyria under Sargon II:
    • Massive city walls and gates
    • Palace complex with unique reliefs
    • Advanced urban planning
    • Important archaeological discoveries`,
    period: "Assyrian",
    image: "/images/sites/khor.webp",
    markerIcon: "/images/sites/khor.webp",
    shortDescription: "Purpose-built Assyrian capital city"
  },
  {
    id: 12,
    name: "Great Mosque of Kufa",
    coordinates: [32.0333, 44.4000],
    description: `One of the earliest and holiest Islamic sites:
    • Original mosque dating to 7th century
    • Important center of Islamic learning
    • Significant architectural modifications over time
    • Major pilgrimage destination`,
    period: "Early Islamic",
    image: "/images/sites/kufa.jpg",
    markerIcon: "/images/sites/kufa.jpg",
    shortDescription: "One of the earliest mosques in Islamic history"
  },
  {
    id: 13,
    name: "Basra Old City",
    coordinates: [30.5085, 47.7804],
    description: `Historical port city with rich heritage:
    • Traditional Iraqi architecture
    • Famous cultural center
    • Historical trading port
    • Center of literature and poetry`,
    period: "Multiple Periods",
    image: "/images/sites/basra.jpg",
    markerIcon: "/images/sites/basra.jpg",
    shortDescription: "Historic port city and cultural center"
  },
  {
    id: 15,
    name: "Tell Ubaid",
    coordinates: [30.9656, 46.0931],
    description: `Ancient settlement of the Ubaid period:
    • Early evidence of civilization
    • Important archaeological discoveries
    • Prehistoric temple remains
    • Early agricultural settlement`,
    period: "Prehistoric",
    image: "/images/sites/tell ubaid.jpg",
    markerIcon: "/images/sites/tell ubaid.jpg",
    shortDescription: "Ancient settlement from the Ubaid period"
  },
  {
    id: 17,
    name: "Citadel of Kirkuk",
    coordinates: [35.4693, 44.3923],
    description: `The ancient Citadel of Kirkuk sits atop a tell:
    • Continuously inhabited for more than 5,000 years
    • Contains Ottoman-era buildings
    • Features multiple historical mosques and shrines
    • Traditional architecture reflecting the city's diverse heritage`,
    period: "Multiple Periods",
    image: "/images/sites/citadel.jpg",
    markerIcon: "/images/sites/citadel.jpg",
    shortDescription: "Ancient fortified settlement with millennia of history"
  },
  {
    id: 18,
    name: "Lalish Temple",
    coordinates: [36.7702, 43.3030],
    description: `Lalish is the holiest temple of the Yazidi faith:
    • Sacred pilgrimage site for Yazidis worldwide
    • Contains the tomb of Sheikh Adi ibn Musafir
    • Features conical roofs symbolizing rays of light
    • Center of Yazidi religious practices and ceremonies`,
    period: "Medieval",
    image: "/images/sites/lalish.jpg",
    markerIcon: "/images/sites/lalish.jpg",
    shortDescription: "Sacred Yazidi temple and pilgrimage site"
  },
  {
    id: 20,
    name: "Marshes of Mesopotamia",
    coordinates: [31.0900, 47.0000],
    description: `The Mesopotamian Marshes are a unique wetland ecosystem:
    • Home to the Marsh Arabs (Ma'dan) for thousands of years
    • UNESCO World Heritage site
    • Traditional reed houses and watercraft
    • Ancient way of life mostly unchanged since Sumerian times`,
    period: "Ancient to Present",
    image: "/images/sites/Marshes+1.jpg",
    markerIcon: "/images/sites/Marshes+1.jpg",
    shortDescription: "Historic wetlands with unique cultural landscape"
  },
  {
    id: 21,
    name: "Al-Kadhimiya Mosque",
    coordinates: [33.3683, 44.3460],
    description: `The Al-Kadhimiya Mosque is a significant Shia shrine:
    • Contains the tombs of the 7th and 9th Imams
    • Golden domes and ornate minarets
    • Intricate mirror work decoration in interior
    • Important pilgrimage site for Shia Muslims`,
    period: "Islamic",
    image: "/images/sites/Al-Kadhimiya_Mosque,_Kadhmain_Shrine.jpg",
    markerIcon: "/images/sites/Al-Kadhimiya_Mosque,_Kadhmain_Shrine.jpg",
    shortDescription: "Important Shia shrine with golden domes"
  },
  {
    id: 22,
    name: "Amedi (Amadiya)",
    coordinates: [37.0934, 43.4882],
    description: `Amedi is an ancient town built on a plateau:
    • History dating back over 3,000 years
    • Former Assyrian capital
    • Stunning mountainous setting
    • Blend of Kurdish, Assyrian, and Islamic heritage`,
    period: "Ancient to Ottoman",
    image: "/images/sites/amadiya-1.jpg",
    markerIcon: "/images/sites/amadiya-1.jpg",
    shortDescription: "Historic mountain town on a natural plateau"
  },
  {
    id: 24,
    name: "Al-Najaf Old City",
    coordinates: [31.9961, 44.3149],
    description: `The Old City of Najaf surrounds the Imam Ali Shrine:
    • One of the holiest cities for Shia Muslims
    • Traditional market (souk) with intricate architecture
    • Center of religious learning
    • Historic cemetery (Wadi-us-Salaam), one of world's largest`,
    period: "Islamic",
    image: "/images/sites/Shrine_of_Imam_Ali_Najaf_August_2023.jpg",
    markerIcon: "/images/sites/Shrine_of_Imam_Ali_Najaf_August_2023.jpg",
    shortDescription: "Sacred city and important religious center"
  }
];

// Custom marker component
function CustomMarker({ site, onSelect }) {
  const customIcon = L.divIcon({
    className: 'custom-marker',
    html: `
      <div class="marker-container">
        <img src="${site.markerIcon}" class="marker-thumbnail" alt="${site.name}" />
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40]
  });

  return (
    <Marker
      position={site.coordinates}
      icon={customIcon}
      eventHandlers={{
        click: () => onSelect(site)
      }}
    >
      <Popup>
        <div className="popup-content">
          <img
            src={site.image}
            alt={site.name}
            className="w-32 h-24 object-cover rounded mb-2"
          />
          <h3 className="font-bold text-sm">{site.name}</h3>
          <p className="text-xs text-gray-600">{site.shortDescription}</p>
        </div>
      </Popup>
    </Marker>
  );
}

export default function ExplorePage() {
  const [selectedSite, setSelectedSite] = useState(null);

  useEffect(() => {
    import('leaflet/dist/leaflet.css');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-r from-red-700 to-red-900 text-white py-10">
        <div className="container mx-auto px-4">
          <h1 className={`text-4xl font-bold mb-2 ${dancing.className}`}>Explore Historical Iraq</h1>
          <p className="text-lg">Discover ancient sites and cultural landmarks</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 mb-8">
        {/* Map Section */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="h-[700px] rounded-lg overflow-hidden">
            {typeof window !== 'undefined' && (
              <MapContainer
                center={IRAQ_CENTER}
                zoom={7}
                style={{ height: '100%', width: '100%' }}
                maxBounds={IRAQ_BOUNDS}
                minZoom={MIN_ZOOM}
                maxZoom={MAX_ZOOM}
                bounds={IRAQ_BOUNDS}
                boundsOptions={{ padding: [50, 50] }}
                scrollWheelZoom={true}
                dragging={true}
                zoomControl={true}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  bounds={IRAQ_BOUNDS}
                  noWrap={true}
                />
                {historicalSites.map(site => (
                  <CustomMarker
                    key={site.id}
                    site={site}
                    onSelect={setSelectedSite}
                  />
                ))}
              </MapContainer>
            )}
          </div>
        </div>

        {/* Selected Site Details */}
        {selectedSite && (
          <div className="mt-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-[500px]">
                  <img
                    src={selectedSite.image}
                    alt={selectedSite.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 p-6">
                    <h2 className={`text-3xl font-bold text-white mb-2 ${dancing.className}`}>
                      {selectedSite.name}
                    </h2>
                    <p className="text-white/80">{selectedSite.period}</p>
                  </div>
                </div>

                {/* Description Section */}
                <div className="p-6 space-y-6">
                  <div>
                    <h3 className={`text-2xl font-semibold mb-4 text-red-700 ${dancing.className}`}>
                      About this Site
                    </h3>
                    <div className="prose max-w-none text-gray-800">
                      {selectedSite.description.split('• ').map((point, index) => (
                        index === 0 ?
                          <p key={index} className="mb-4">{point}</p> :
                          <li key={index} className="ml-4">{point}</li>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="text-lg font-semibold mb-3 text-red-700">Location Details</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-800">
                        Coordinates: {selectedSite.coordinates.join(', ')}
                      </p>
                      <p className="text-gray-800 mt-2">
                        Historical Period: {selectedSite.period}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}