GoIraq Web Application
GoIraq is a full-stack web application for digitally preserving and sharing Iraqi cultural heritage. It aims to bridge the cultural disconnect between younger generations and Iraqi heritage through interactive geographical exploration, cultural traditions presentation, gamified learning, and user engagement systems. Developed as part of a BSc Computer Science dissertation at Brunel University London.

Features:

Interactive map interface showcasing 20 significant historical and cultural sites across Iraq

Six structured categories of cultural traditions with responsive design

Three-tiered quiz system with database integration for scoring and leaderboard functionality

Comprehensive support infrastructure for user engagement and feedback collection

Requirements
This project requires the following:

Node.js

npm

Next.js

MongoDB

Leaflet API

Tailwind CSS


Setup + Installation
Environment
Set the following environment variables. Adjust them as needed for your use case.
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/goiraq
NEXT_PUBLIC_MAP_API_KEY=your_leaflet_api_key
Main

In the project directory, run npm install to install all the required packages.
Run npm run dev to start the development server. The application should be accessible at http://localhost:3000/
For production build, run npm run build followed by npm start.

Project Structure

/pages - Next.js page components and API routes
/components - Reusable UI components
/public - Static assets including images of historical sites
/data - JSON files containing cultural content and site information
/styles - Global styles and Tailwind configuration

Features Implementation
Map Interface
The interactive map utilizes Leaflet API for geographical exploration of historical sites. Custom markers with thumbnail previews provide an engaging user experience.
Cultural Traditions
Six thematic categories (Traditional Customs, Food & Cuisine, Music & Dance, Art & Crafts, Festivals & Celebrations, and Traditional Clothing) offer structured exploration of Iraqi cultural heritage.
Quiz System
Multi-level quiz system (Beginner, Intermediate, Advanced) across two categories (Iraqi History and Iraqi Culture) with MongoDB integration for score tracking and leaderboard functionality.
Support Infrastructure
Comprehensive contact form with request categorization and tracking capabilities to enhance user engagement and feedback collection.
Development Methodology
This project was developed using an Agile methodology with two-week sprints:

Sprints 1-2: Core Infrastructure and Map Interface
Sprints 3-4: Cultural Content and Traditions Sections
Sprints 5-6: Quiz System and Leaderboard
Sprints 7-8: Support Infrastructure and Refinement

Testing
To run tests:

Go to the project directory.
Run npm test to execute all tests.
For component-specific tests, run npm test -- -t "ComponentName".

Deployment
The application can be deployed to Vercel or any hosting platform that supports Next.js applications:

Configure environment variables on your hosting platform.
Connect your repository to the hosting platform.
Deploy following the platform-specific instructions.


