'use client';
import { useState, useEffect } from 'react';
import { Dancing_Script } from 'next/font/google';
import Navbar from '@/app/components/Navbar';
import Link from 'next/link';

const dancing = Dancing_Script({ subsets: ['latin'] });

// Quiz data
const quizCategories = [
    {
        id: 'history',
        name: 'Iraqi History',
        description: 'Test your knowledge about the rich history of Iraq from ancient Mesopotamia to modern times',
        image: '/images/Iraq.jpg',
        levels: [
            {
                id: 'history-beginner',
                name: 'Beginner',
                questions: [
                    {
                        question: 'Which ancient civilization was located in present-day Iraq?',
                        options: ['Ancient Egypt', 'Mesopotamia', 'Indus Valley', 'Ancient Greece'],
                        correctAnswer: 'Mesopotamia'
                    },
                    {
                        question: 'What was the capital of the Abbasid Caliphate?',
                        options: ['Damascus', 'Cairo', 'Baghdad', 'Mecca'],
                        correctAnswer: 'Baghdad'
                    },
                    {
                        question: 'Which river is NOT one of the major rivers in Iraq?',
                        options: ['Tigris', 'Euphrates', 'Nile', 'Shatt al-Arab'],
                        correctAnswer: 'Nile'
                    },
                    {
                        question: 'When did Iraq gain independence from Britain?',
                        options: ['1922', '1932', '1945', '1958'],
                        correctAnswer: '1932'
                    },
                    {
                        question: 'Which city is considered the spiritual capital of Iraq for Shia Muslims?',
                        options: ['Baghdad', 'Mosul', 'Najaf', 'Basra'],
                        correctAnswer: 'Najaf'
                    },
                    {
                        question: 'What does the name "Mesopotamia" mean?',
                        options: ['Land of the sun', 'Land between two rivers', 'Fertile land', 'Ancient kingdom'],
                        correctAnswer: 'Land between two rivers'
                    },
                    {
                        question: 'Which empire built the famous Ishtar Gate?',
                        options: ['Sumerian', 'Assyrian', 'Babylonian', 'Persian'],
                        correctAnswer: 'Babylonian'
                    },
                    {
                        question: 'Which language was spoken by the Sumerians?',
                        options: ['Akkadian', 'Aramaic', 'Sumerian', 'Old Persian'],
                        correctAnswer: 'Sumerian'
                    },
                    {
                        question: 'What was the first form of writing developed in ancient Mesopotamia?',
                        options: ['Hieroglyphs', 'Cuneiform', 'Alphabet', 'Pictographs'],
                        correctAnswer: 'Cuneiform'
                    },
                    {
                        question: 'Which of these is NOT an ancient Iraqi city?',
                        options: ['Ur', 'Babylon', 'Nineveh', 'Alexandria'],
                        correctAnswer: 'Alexandria'
                    }
                ]
            },
            {
                id: 'history-intermediate',
                name: 'Intermediate',
                questions: [
                    {
                        question: 'The Code of Hammurabi is from which ancient Mesopotamian city-state?',
                        options: ['Ur', 'Babylon', 'Nineveh', 'Uruk'],
                        correctAnswer: 'Babylon'
                    },
                    {
                        question: 'Which empire made Nineveh its capital?',
                        options: ['Babylonian', 'Persian', 'Assyrian', 'Akkadian'],
                        correctAnswer: 'Assyrian'
                    },
                    {
                        question: 'Baghdad was founded in which century?',
                        options: ['6th century', '8th century', '10th century', '12th century'],
                        correctAnswer: '8th century'
                    },
                    {
                        question: 'Who founded the city of Baghdad?',
                        options: ['Saladin', 'Abu Bakr', 'Al-Mansur', 'Harun al-Rashid'],
                        correctAnswer: 'Al-Mansur'
                    },
                    {
                        question: 'The ancient city of Hatra was built by which civilization?',
                        options: ['Parthian', 'Sassanid', 'Sumerian', 'Phoenician'],
                        correctAnswer: 'Parthian'
                    },
                    {
                        question: 'Which Babylonian king constructed the Hanging Gardens?',
                        options: ['Hammurabi', 'Nebuchadnezzar II', 'Sargon', 'Nabonidus'],
                        correctAnswer: 'Nebuchadnezzar II'
                    },
                    {
                        question: 'The kingdom of Sumer existed in which millennium BCE?',
                        options: ['1st millennium BCE', '2nd millennium BCE', '3rd millennium BCE', '4th millennium BCE'],
                        correctAnswer: '3rd millennium BCE'
                    },
                    {
                        question: 'What was the House of Wisdom (Bayt al-Hikma)?',
                        options: ['A temple complex', 'A library and translation institute', 'A royal palace', 'A medical school'],
                        correctAnswer: 'A library and translation institute'
                    },
                    {
                        question: 'Which Iraqi ancient culture invented the wheel?',
                        options: ['Sumerians', 'Assyrians', 'Akkadians', 'Babylonians'],
                        correctAnswer: 'Sumerians'
                    },
                    {
                        question: 'What year was the Mongol invasion of Baghdad?',
                        options: ['1058', '1258', '1458', '1658'],
                        correctAnswer: '1258'
                    }
                ]
            },
            {
                id: 'history-hard',
                name: 'Hard',
                questions: [
                    {
                        question: 'Which Mesopotamian king is credited with the first known written law code, predating Hammurabi?',
                        options: ['Ur-Nammu', 'Sargon of Akkad', 'Gilgamesh', 'Enheduanna'],
                        correctAnswer: 'Ur-Nammu'
                    },
                    {
                        question: 'The Battle of Qadisiyah in 636 CE marked the defeat of which empire by Arab Muslim forces?',
                        options: ['Byzantine Empire', 'Sassanid Empire', 'Roman Empire', 'Parthian Empire'],
                        correctAnswer: 'Sassanid Empire'
                    },
                    {
                        question: 'Who was the last king of Babylon before the Persian conquest?',
                        options: ['Nabonidus', 'Belshazzar', 'Nebuchadnezzar II', 'Neriglissar'],
                        correctAnswer: 'Nabonidus'
                    },
                    {
                        question: 'What was the name of the artificial language developed in Baghdad for scientific discourse during the Islamic Golden Age?',
                        options: ['Aramaic', 'Classical Arabic', 'Middle Persian', 'Neo-Syriac'],
                        correctAnswer: 'Classical Arabic'
                    },
                    {
                        question: 'Which Sumerian city is considered to contain the earliest known ziggurats?',
                        options: ['Ur', 'Eridu', 'Uruk', 'Nippur'],
                        correctAnswer: 'Eridu'
                    },
                    {
                        question: 'The Ubaid culture in southern Mesopotamia dates to approximately which period?',
                        options: ['12000-8000 BCE', '8000-6000 BCE', '6000-4000 BCE', '4000-2000 BCE'],
                        correctAnswer: '6000-4000 BCE'
                    },
                    {
                        question: 'Who translated the Epic of Gilgamesh into English, leading to its rediscovery in the modern era?',
                        options: ['George Smith', 'Leonard Woolley', 'Max Mallowan', 'Austen Henry Layard'],
                        correctAnswer: 'George Smith'
                    },
                    {
                        question: 'The Mespotamian scribal schools were known as:',
                        options: ['Madrasa', 'E-dubba', 'Bet Sefer', 'Akademeia'],
                        correctAnswer: 'E-dubba'
                    },
                    {
                        question: 'The Neo-Assyrian Empire reached its peak under which ruler?',
                        options: ['Tiglath-Pileser III', 'Ashurbanipal', 'Sennacherib', 'Esarhaddon'],
                        correctAnswer: 'Ashurbanipal'
                    },
                    {
                        question: 'What significant mathematical innovation came from ancient Mesopotamia?',
                        options: ['Decimal system', 'Sexagesimal system (base 60)', 'Roman numerals', 'Binary system'],
                        correctAnswer: 'Sexagesimal system (base 60)'
                    }
                ]
            }
        ]
    },
    {
        id: 'culture',
        name: 'Iraqi Culture',
        description: 'Explore your understanding of Iraqi traditions, arts, and cultural practices',
        image: '/images/culture.jpg',
        levels: [
            {
                id: 'culture-beginner',
                name: 'Beginner',
                questions: [
                    {
                        question: 'What is the national dish of Iraq?',
                        options: ['Kebab', 'Masgouf', 'Falafel', 'Dolma'],
                        correctAnswer: 'Masgouf'
                    },
                    {
                        question: 'Which of these is a traditional Iraqi musical instrument?',
                        options: ['Sitar', 'Bouzouki', 'Oud', 'Tabla'],
                        correctAnswer: 'Oud'
                    },
                    {
                        question: "What is the traditional men's garment in Iraq called?",
                        options: ['Thawb', 'Dishdasha', 'Keffiyeh', 'Agal'],
                        correctAnswer: 'Dishdasha'
                    },
                    {
                        question: 'Which of these is a popular Iraqi bread?',
                        options: ['Naan', 'Samoon', 'Pita', 'Paratha'],
                        correctAnswer: 'Samoon'
                    },
                    {
                        question: 'What is the main religion in Iraq?',
                        options: ['Christianity', 'Judaism', 'Islam', 'Zoroastrianism'],
                        correctAnswer: 'Islam'
                    },
                    {
                        question: 'What are the colors of the Iraqi flag?',
                        options: ['Red, white, black, and green', 'Red, white, and blue', 'Green, white, and red', 'Black, gold, and red'],
                        correctAnswer: 'Red, white, black, and green'
                    },
                    {
                        question: 'Which river is mentioned in the Iraqi national anthem?',
                        options: ['Tigris', 'Euphrates', 'Both Tigris and Euphrates', 'Neither'],
                        correctAnswer: 'Both Tigris and Euphrates'
                    },
                    {
                        question: 'Which of these spices is commonly used in Iraqi cuisine?',
                        options: ['Wasabi', 'Paprika', 'Cardamom', 'Lemongrass'],
                        correctAnswer: 'Cardamom'
                    },
                    {
                        question: 'Which language is most widely spoken in Iraq?',
                        options: ['Turkish', 'Arabic', 'Persian', 'Kurdish'],
                        correctAnswer: 'Arabic'
                    },
                    {
                        question: 'What is the traditional headdress worn by Kurdish men in Iraq?',
                        options: ['Fez', 'Turban', 'Jamadani', 'Taqiyah'],
                        correctAnswer: 'Jamadani'
                    }
                ]
            },
            {
                id: 'culture-intermediate',
                name: 'Intermediate',
                questions: [
                    {
                        question: 'Which art form is characterized by stylized forms of Arabic script?',
                        options: ['Miniature painting', 'Calligraphy', 'Mosaic', 'Relief carving'],
                        correctAnswer: 'Calligraphy'
                    },
                    {
                        question: 'What is "Chobi"?',
                        options: ['A traditional food', 'A folk dance', 'A religious ceremony', 'A type of pottery'],
                        correctAnswer: 'A folk dance'
                    },
                    {
                        question: 'Which of these is NOT typically found in Iraqi cuisine?',
                        options: ['Rice', 'Sushi', 'Lamb', 'Dates'],
                        correctAnswer: 'Sushi'
                    },
                    {
                        question: 'What is the name of the traditional Iraqi coffee pot?',
                        options: ['Dallah', 'Cezve', 'Kanaka', 'Ibrik'],
                        correctAnswer: 'Dallah'
                    },
                    {
                        question: 'Which traditional Iraqi musical style is recognized by UNESCO as an Intangible Cultural Heritage?',
                        options: ['Chobi', 'Maqam', 'Dabke', 'Qasida'],
                        correctAnswer: 'Maqam'
                    },
                    {
                        question: 'What is a traditional Iraqi breakfast food?',
                        options: ['Makdous', 'Geymar', 'Shakshuka', 'Manakish'],
                        correctAnswer: 'Geymar'
                    },
                    {
                        question: 'What is the significance of henna in Iraqi culture?',
                        options: ['Religious ritual only', 'Medicinal purposes', 'Celebrating special occasions', 'Daily cosmetic use'],
                        correctAnswer: 'Celebrating special occasions'
                    },
                    {
                        question: 'Which famous Iraqi poet wrote "Rain Song"?',
                        options: ['Badr Shakir al-Sayyab', 'Nazik Al-Malaika', 'Muhammad Mahdi Al-Jawahiri', 'Jamil Sidqi al-Zahawi'],
                        correctAnswer: 'Badr Shakir al-Sayyab'
                    },
                    {
                        question: 'What is "Kleicha"?',
                        options: ['A musical instrument', 'A traditional cookie', 'A wedding ritual', 'A type of carpet'],
                        correctAnswer: 'A traditional cookie'
                    },
                    {
                        question: 'Which of these is a traditional wedding custom in Iraq?',
                        options: ['Mehndi ceremony', 'Henna night', 'Jumping the broom', 'Tea ceremony'],
                        correctAnswer: 'Henna night'
                    }
                ]
            },
            {
                id: 'culture-hard',
                name: 'Hard',
                questions: [
                    {
                        question: 'What is the difference between Iraqi and Levantine dabke?',
                        options: ['Rhythm patterns', 'Number of dancers', 'Foot movements and tempo', 'Use of instruments'],
                        correctAnswer: 'Foot movements and tempo'
                    },
                    {
                        question: 'Which traditional Iraqi instrument is similar to a spike fiddle?',
                        options: ['Santur', 'Joza', 'Ney', 'Riq'],
                        correctAnswer: 'Joza'
                    },
                    {
                        question: 'What is "Shanashil" in traditional Iraqi architecture?',
                        options: ['Dome structures', 'Carved wooden balconies', 'Central courtyards', 'Wind-catching towers'],
                        correctAnswer: 'Carved wooden balconies'
                    },
                    {
                        question: 'The Iraqi proverb "الباب الي يجيك منه الريح، سده واستريح" roughly translates to:',
                        options: ['A bird in the hand is worth two in the bush', 'Close the door that brings wind, and rest', 'The apple doesn\'t fall far from the tree', 'Don\'t cry over spilt milk'],
                        correctAnswer: 'Close the door that brings wind, and rest'
                    },
                    {
                        question: 'What is "Simaat" in Iraqi culture?',
                        options: ['A wedding ritual', 'A communal meal for religious occasions', 'A form of poetry recitation', 'A pottery technique'],
                        correctAnswer: 'A communal meal for religious occasions'
                    },
                    {
                        question: 'What are the seven spices typically used in Iraqi Baharat spice mix?',
                        options: ['Cumin, coriander, paprika, cinnamon, cardamom, cloves, and nutmeg', 'Salt, pepper, turmeric, ginger, garlic, oregano, and basil', 'Sumac, za\'atar, thyme, rosemary, mint, sage, and bay leaf', 'Fenugreek, mustard, curry, allspice, anise, saffron, and chili'],
                        correctAnswer: 'Cumin, coriander, paprika, cinnamon, cardamom, cloves, and nutmeg'
                    },
                    {
                        question: 'In which century was the distinctive Iraqi maqam style formalized?',
                        options: ['14th century', '16th century', '19th century', '20th century'],
                        correctAnswer: '19th century'
                    },
                    {
                        question: 'What is "Mahajja" in Iraqi folk traditions?',
                        options: ['A form of riddle-telling competition', 'A harvest festival', 'A children\'s game', 'A type of folk poem'],
                        correctAnswer: 'A form of riddle-telling competition'
                    },
                    {
                        question: 'Which of these is a traditional method for cooling water in Iraq?',
                        options: ['Thallaja', 'Habbaba', 'Zeer', 'Mibkhar'],
                        correctAnswer: 'Zeer'
                    },
                    {
                        question: 'What distinguishes the Iraqi school of Arabic calligraphy?',
                        options: ['Use of gold leaf', 'Angular letter forms', 'Connection between letters', 'Vertical orientation'],
                        correctAnswer: 'Angular letter forms'
                    }
                ]
            }
        ]
    }
];

export default function QuizPage() {
    // Existing state variables
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedLevel, setSelectedLevel] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);

    // New state variables for database functionality
    const [username, setUsername] = useState('');
    const [highScores, setHighScores] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [scoreSaved, setScoreSaved] = useState(false);

    // Load high scores when results are shown
    useEffect(() => {
        if (showResults) {
            fetchHighScores();
        }
    }, [showResults]);

    // Function to fetch high scores
    const fetchHighScores = async () => {
        try {
            const res = await fetch('/api/scores');
            if (!res.ok) {
                throw new Error('Failed to fetch scores');
            }
            const data = await res.json();

            if (data.success) {
                setHighScores(data.data);
            } else {
                console.error('Error in scores response:', data.error);
            }
        } catch (error) {
            console.error('Error fetching scores:', error);
        }
    };
    // Function to save score
    const saveScore = async () => {
        if (!username.trim() || scoreSaved) return;

        setIsLoading(true);

        try {
            const res = await fetch('/api/scores', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    category: getCurrentCategory().name,
                    level: getCurrentLevel().name,
                    score,
                    maxScore: getCurrentLevel().questions.length
                }),
            });

            const data = await res.json();

            if (data.success) {
                setScoreSaved(true);
                // Refresh high scores
                fetchHighScores();
            }
        } catch (error) {
            console.error('Error saving score:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // Select a category
    const selectCategory = (categoryId) => {
        setSelectedCategory(categoryId);
        setSelectedLevel(null);
        setCurrentQuestion(0);
        setScore(0);
        setShowResults(false);
        setSelectedOption(null);
        setIsCorrect(null);
        setUsername('');
        setScoreSaved(false);
    };

    // Select a level
    const selectLevel = (levelId) => {
        setSelectedLevel(levelId);
        setCurrentQuestion(0);
        setScore(0);
        setShowResults(false);
        setSelectedOption(null);
        setIsCorrect(null);
        setUsername('');
        setScoreSaved(false);
    };

    // Get current category object
    const getCurrentCategory = () => {
        return quizCategories.find(cat => cat.id === selectedCategory);
    };

    // Get current level object
    const getCurrentLevel = () => {
        const category = getCurrentCategory();
        if (!category) return null;
        return category.levels.find(level => level.id === selectedLevel);
    };

    // Get current question
    const getCurrentQuestion = () => {
        const level = getCurrentLevel();
        if (!level) return null;
        return level.questions[currentQuestion];
    };

    // Handle answer selection
    const handleAnswerSelect = (answer) => {
        setSelectedOption(answer);
        const question = getCurrentQuestion();
        const correct = answer === question.correctAnswer;
        setIsCorrect(correct);

        if (correct) {
            setScore(score + 1);
        }
    };

    // Go to next question
    const handleNextQuestion = () => {
        const level = getCurrentLevel();
        if (currentQuestion < level.questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(null);
            setIsCorrect(null);
        } else {
            setShowResults(true);
        }
    };

    // Restart quiz
    const handleRestartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResults(false);
        setSelectedOption(null);
        setIsCorrect(null);
        setUsername('');
        setScoreSaved(false);
    };

    // Back to categories
    const handleBackToCategories = () => {
        setSelectedCategory(null);
        setSelectedLevel(null);
        setCurrentQuestion(0);
        setScore(0);
        setShowResults(false);
        setSelectedOption(null);
        setIsCorrect(null);
        setUsername('');
        setScoreSaved(false);
    };

    // Back to levels
    const handleBackToLevels = () => {
        setSelectedLevel(null);
        setCurrentQuestion(0);
        setScore(0);
        setShowResults(false);
        setSelectedOption(null);
        setIsCorrect(null);
        setUsername('');
        setScoreSaved(false);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-red-700 to-red-900 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className={`text-5xl font-bold mb-4 ${dancing.className}`}>Interactive Quizzes</h1>
                    <p className="text-xl">Test your knowledge of Iraqi history, culture, and traditions</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                {/* Category Selection */}
                {!selectedCategory && (
                    <div>
                        <h2 className={`text-3xl font-bold mb-8 text-center text-red-700 ${dancing.className}`}>Select a Quiz Category</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {quizCategories.map((category) => (
                                <div
                                    key={category.id}
                                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                                    onClick={() => selectCategory(category.id)}
                                >
                                    <div className="h-48 relative">
                                        <img
                                            src={category.image}
                                            alt={category.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className={`text-2xl font-bold mb-2 text-red-700 ${dancing.className}`}>{category.name}</h3>
                                        <p className="text-gray-600">{category.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Level Selection */}
                {selectedCategory && !selectedLevel && (
                    <div>
                        <div className="mb-8 flex items-center">
                            <button
                                onClick={handleBackToCategories}
                                className="text-red-700 hover:text-red-900 mr-4"
                            >
                                ← Back to Categories
                            </button>
                            <h2 className={`text-3xl font-bold text-red-700 ${dancing.className}`}>Select Difficulty Level</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {getCurrentCategory().levels.map((level) => (
                                <div
                                    key={level.id}
                                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
                                    onClick={() => selectLevel(level.id)}
                                >
                                    <h3 className={`text-xl font-bold mb-2 text-red-700 ${dancing.className}`}>{level.name}</h3>
                                    <p className="text-gray-600">{level.questions.length} questions</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Quiz Questions */}
                {selectedCategory && selectedLevel && !showResults && (
                    <div className="max-w-3xl mx-auto">
                        <div className="mb-8 flex items-center">
                            <button
                                onClick={handleBackToLevels}
                                className="text-red-700 hover:text-red-900 mr-4"
                            >
                                ← Back to Levels
                            </button>
                            <h2 className={`text-3xl font-bold text-red-700 ${dancing.className}`}>
                                {getCurrentCategory().name} - {getCurrentLevel().name}
                            </h2>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <div className="mb-4 flex justify-between items-center">
                                <span className="text-gray-600">
                                    Question {currentQuestion + 1} of {getCurrentLevel().questions.length}
                                </span>
                                <span className="text-gray-600">
                                    Score: {score}
                                </span>
                            </div>

                            <h3 className="text-xl font-semibold mb-6 text-gray-800">{getCurrentQuestion().question}</h3>

                            <div className="space-y-3">
                                {getCurrentQuestion().options.map((option, index) => (
                                    <div
                                        key={index}
                                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${selectedOption === option
                                            ? option === getCurrentQuestion().correctAnswer
                                                ? 'bg-green-100 border-green-500 text-green-800'
                                                : 'bg-red-100 border-red-500 text-red-800'
                                            : 'hover:bg-gray-50 text-gray-800'
                                            }`}
                                        onClick={() => !selectedOption && handleAnswerSelect(option)}
                                    >
                                        {option}
                                    </div>
                                ))}
                            </div>

                            {selectedOption && (
                                <div className="mt-6">
                                    <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                        {isCorrect
                                            ? 'Correct! Well done.'
                                            : `Incorrect. The correct answer is: ${getCurrentQuestion().correctAnswer}`
                                        }
                                    </div>
                                    <button
                                        onClick={handleNextQuestion}
                                        className="mt-4 bg-red-700 text-white py-2 px-6 rounded-lg hover:bg-red-800 transition-colors"
                                    >
                                        {currentQuestion < getCurrentLevel().questions.length - 1 ? 'Next Question' : 'See Results'}
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Results */}
                {showResults && (
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                            <h2 className={`text-3xl font-bold mb-6 text-red-700 ${dancing.className}`}>Quiz Results</h2>

                            <div className="text-5xl font-bold mb-4 text-red-700">
                                {score} / {getCurrentLevel().questions.length}
                            </div>

                            <p className="text-xl mb-8 text-gray-700">
                                {score === getCurrentLevel().questions.length
                                    ? 'Perfect! You\'re an expert on Iraqi culture!'
                                    : score >= getCurrentLevel().questions.length * 0.7
                                        ? 'Great job! You know a lot about Iraqi culture.'
                                        : 'Good effort! Keep learning about Iraq\'s rich heritage.'}
                            </p>

                            {/* Score saving section */}
                            <div className="my-8 p-6 bg-gray-50 rounded-lg">
                                <h3 className={`text-xl font-bold mb-4 text-red-700 ${dancing.className}`}>
                                    Save Your Score
                                </h3>

                                {scoreSaved ? (
                                    <p className="text-green-600">Your score has been saved successfully!</p>
                                ) : (
                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            className="border p-2 rounded-lg text-gray-800" /* Added text-gray-800 here */
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            disabled={isLoading}
                                        />
                                        <button
                                            onClick={saveScore}
                                            disabled={isLoading || !username.trim()}
                                            className={`bg-red-700 text-white py-2 px-4 rounded-lg hover:bg-red-800 disabled:bg-gray-400 ${isLoading ? 'opacity-70' : ''}`}
                                        >
                                            {isLoading ? 'Saving...' : 'Save Score'}
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* High scores table */}
                            <div className="mt-8">
                                <h3 className={`text-xl font-bold mb-4 text-red-700 ${dancing.className}`}>Top Scores</h3>

                                {highScores.length > 0 ? (
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white">
                                            <thead className="bg-gray-100">
                                                <tr>
                                                    <th className="py-2 px-4 text-left text-gray-700">Rank</th>
                                                    <th className="py-2 px-4 text-left text-gray-700">Name</th>
                                                    <th className="py-2 px-4 text-left text-gray-700">Category</th>
                                                    <th className="py-2 px-4 text-left text-gray-700">Level</th>
                                                    <th className="py-2 px-4 text-left text-gray-700">Score</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {highScores.map((score, index) => (
                                                    <tr key={score._id} className="border-b">
                                                        <td className="py-2 px-4 text-gray-800">{index + 1}</td>
                                                        <td className="py-2 px-4 text-gray-800">{score.username}</td>
                                                        <td className="py-2 px-4 text-gray-800">{score.category}</td>
                                                        <td className="py-2 px-4 text-gray-800">{score.level}</td>
                                                        <td className="py-2 px-4 text-gray-800">{score.score}/{score.maxScore}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : (
                                    <p className="text-gray-600">No scores recorded yet. Be the first to save your score!</p>
                                )}
                            </div>

                            <div className="flex justify-center space-x-4 mt-8">
                                <button
                                    onClick={handleRestartQuiz}
                                    className="bg-red-700 text-white py-2 px-6 rounded-lg hover:bg-red-800 transition-colors"
                                >
                                    Try Again
                                </button>
                                <button
                                    onClick={handleBackToLevels}
                                    className="bg-white text-red-700 border border-red-700 py-2 px-6 rounded-lg hover:bg-red-50 transition-colors"
                                >
                                    Choose Another Level
                                </button>
                                <button
                                    onClick={handleBackToCategories}
                                    className="bg-white text-red-700 border border-red-700 py-2 px-6 rounded-lg hover:bg-red-50 transition-colors"
                                >
                                    Choose Another Category
                                </button>
                                <Link
                                    href="/leaderboard"
                                    className="bg-white text-red-700 border border-red-700 py-2 px-6 rounded-lg hover:bg-red-50 transition-colors"
                                >
                                    View Leaderboard
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}