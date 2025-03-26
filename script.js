// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    // Language selector
    const languageSelect = document.getElementById('languageSelect');
    const translateBtn = document.getElementById('translateBtn');
    const textToTranslate = document.getElementById('textToTranslate');
    const translationResult = document.getElementById('translationResult');
    const savePhrase = document.getElementById('savePhrase');
    const phrasesList = document.getElementById('phrasesList');

    // Daily Phrases - We'll start with some common campus phrases
    const dailyPhrases = [
        {
            en: "Where is the library?",
            rw: "Isomero riba haganahe?",
            sw: "Maktaba iko wapi?",
            fr: "Où est la bibliothèque?"
        },
        {
            en: "When does class start?",
            rw: "Isomo ritangira ryari?",
            sw: "Darasa linaanza saa ngapi?",
            fr: "Quand commence le cours?"
        },
        {
            en: "Can you help me with this assignment?",
            rw: "Wambwira uko nakora uyu mukoro?",
            sw: "Unaweza kunisaidia na kazi hii?",
            fr: "Pouvez-vous m'aider avec ce devoir?"
        },
        {
            en: "Nice to meet you",
            rw: "Nashimye guhura nawe",
            sw: "Nimefurahi kukutana nawe",
            fr: "Enchanté(e)"
        },
        {
            en: "What time is lunch?",
            rw: "Turya saa ngahe ibya saa sita?",
            sw: "Chakula cha mchana ni saa ngapi?",
            fr: "C'est quand l'heure du déjeuner?"
        },
        {
            en: "Could you repeat that please?",
            rw: "Wongera kubivuga nyabuneka?",
            sw: "Unaweza kurudia tafadhali?",
            fr: "Pourriez-vous répéter s'il vous plaît?"
        }
    ];

    // Keep track of current phrase index
    let currentPhraseIndex = Math.floor(Math.random() * dailyPhrases.length);

    // Cultural Tips Database
    const culturalTips = {
        rwanda: [
            {
                category: "etiquette",
                tips: [
                    "In Rwanda, it's respectful to greet elders with both hands",
                    "When visiting someone's home, it's customary to sit and chat before discussing business",
                    "It's polite to say 'Mumbabarire' (excuse me) when passing in front of someone",
                    "Elders are highly respected. Always stand when an elder enters the room and greet them first.",
                    "A firm handshake is common, often accompanied by a smile."
                ]
            },
            {
                category: "customs",
                tips: [
                    "Umuganda (community work) happens on the last Saturday of every month",
                    "Amaraba is a traditional dance performed during celebrations",
                    "Drinking milk (Ikivuguto) is a significant cultural practice",
                    "Umuganura is the traditional harvest festival celebrating the year's achievements",
                    "Ikivuguto is fermented milk that holds cultural significance in Rwanda",
                    "Participate in traditional ceremonies like Umuganura (Harvest Festival) if invited",
                    "Dress modestly, especially in rural areas. Traditional attire is often worn during cultural events"
                ]
            },
            {
                category: "taboos",
                tips: [
                    "It's considered rude to eat or hand things over with your left hand",
                    "Pointing directly at people is considered impolite",
                    "Avoid eating while walking in public",
                    "Avoid discussing the 1994 genocide unless prompted by the locals. It is a sensitive topic.",
                    "Public displays of affection, such as kissing or hugging, are generally frowned upon, especially between unmarried couples."
                ]
            }
        ],
        kenya: [
            {
                category: "etiquette",
                tips: [
                    "Greet people with 'Jambo' (Hello) - it's always appreciated",
                    "Elders should be addressed with respect, using 'Mzee' (elder)",
                    "When eating with others, it's polite to say 'Karibu' (welcome)"
                ]
            },
            {
                category: "customs",
                tips: [
                    "Harambee (pulling together) is a tradition of community self-help events",
                    "Tea (chai) is an important part of social gatherings, often served with snacks",
                    "Traditional clothing like 'Kitenge' is worn during celebrations",
                    "Eating with hands (right hand only) is common in traditional settings",
                    "Extended family gatherings are very important, especially during holidays",
                    "Bride price (dowry) is still an important cultural practice",
                    "Sunday is often reserved for church and family gatherings",
                    "Traditional music and dance are integral parts of celebrations"
                ]
            },
            {
                category: "taboos",
                tips: [
                    "Don't use your left hand for eating or passing items",
                    "Avoid showing public displays of affection",
                    "Don't discuss politics or tribal issues with strangers",
                    "Never point at someone with your finger",
                    "Don't eat while walking in public",
                    "Avoid direct criticism in public settings",
                    "Don't refuse food when visiting someone's home",
                    "Avoid stepping over someone who is seated on the floor"
                ]
            }
        ],
        tanzania: [
            {
                category: "etiquette",
                tips: [
                    "Always greet people with 'Shikamoo' when addressing elders",
                    "It's customary to remove shoes before entering someone's home",
                    "Use your right hand for eating and passing items",
                    "'Shikamoo' is a respectful greeting used specifically for elders, showing deep respect",
                    "When someone says 'Shikamoo', the response is 'Marahaba'"
                ]
            },
            {
                category: "customs",
                tips: [
                    "Drinking coffee/tea together is an important social activity",
                    "'Tinga Tinga' is a vibrant painting style created by Edward Saidi Tingatinga in Tanzania",
                    "Tinga Tinga art often features bright colors and African wildlife",
                    "The Kitenge is a traditional fabric worn in various styles, especially during celebrations",
                    "Harambee means 'pulling together' and represents community cooperation"
                ]
            },
            {
                category: "taboos",
                tips: [
                    "Avoid eating while walking in public",
                    "Don't point at people with your finger",
                    "Avoid discussing sensitive political topics"
                ]
            }
        ],
        uk: [
            {
                category: "etiquette",
                tips: [
                    "Queuing (standing in line) is taken very seriously",
                    "Say 'please' and 'thank you' frequently",
                    "Apologizing is common, even when not at fault",
                    "Hold doors open for people behind you",
                    "Make eye contact when saying 'cheers' during a toast",
                    "Always ask 'How are you?' after saying hello, but expect a brief response"
                ]
            },
            {
                category: "customs",
                tips: [
                    "Tea time (around 4 PM) is a traditional break with tea and snacks",
                    "Small talk about weather is very common and expected",
                    "Punctuality is highly valued - being 'on time' means arriving 5 minutes early",
                    "Sunday roast is a traditional family meal",
                    "Bank holidays are public holidays with special traditions",
                    "Boxing Day (26th December) is as important as Christmas Day",
                    "Pubs are social hubs where people meet friends and colleagues",
                    "Fish and chips on Friday is a cultural tradition"
                ]
            },
            {
                category: "taboos",
                tips: [
                    "Never jump queues (lines) - it's considered very rude",
                    "Avoid speaking loudly in public, especially on public transport",
                    "Don't ask about someone's salary or how much things cost",
                    "Avoid prolonged eye contact on public transport",
                    "Don't complain about the weather unless others do first",
                    "Never push into a lift (elevator) before others exit",
                    "Avoid discussing Brexit or royal family controversies with strangers",
                    "Don't sit next to someone on public transport if there are empty rows"
                ]
            }
        ],
        france: [
            {
                category: "etiquette",
                tips: [
                    "Always say 'Bonjour' before starting any interaction",
                    "Use 'Monsieur' or 'Madame' when addressing people",
                    "La Bise (cheek kiss) is a traditional greeting between friends and family",
                    "'Tu' is informal 'you' used with friends and family, while 'Vous' is formal",
                    "Using the wrong form (tu/vous) can be considered impolite"
                ]
            },
            {
                category: "customs",
                tips: [
                    "Lunch and dinner are important social events, often lasting hours",
                    "Wine is an integral part of meals and social gatherings",
                    "Fashion and appearance are highly valued in daily life",
                    "Bread is bought fresh daily from local bakeries",
                    "August is the traditional holiday month when many businesses close",
                    "Markets are an important part of daily shopping",
                    "Coffee is typically served in small cups and enjoyed slowly",
                    "Children are expected to greet adults with 'Bonjour Madame/Monsieur'"
                ]
            },
            {
                category: "taboos",
                tips: [
                    "Don't start eating until everyone is served and someone says 'Bon appétit'",
                    "Avoid being too loud in public places, especially restaurants",
                    "Don't discuss money, age, or religion in social settings",
                    "Never show up exactly on time for a dinner party (5-15 minutes late is perfect)",
                    "Don't put your bread upside down on the table (old superstition)",
                    "Avoid using 'tu' with someone unless invited to do so",
                    "Don't ask personal questions when first meeting someone",
                    "Never snap your fingers to get someone's attention"
                ]
            }
        ]
    };

    // Mock translations database
    const mockTranslations = {
        greetings: {
            en: "Hello, how are you?",
            fr: "Bonjour, comment allez-vous?",
            rw: "Muraho, amakuru?",
            sw: "Hujambo, habari gani?"
        },
        basic: {
            en: "My name is",
            fr: "Je m'appelle",
            rw: "Nitwa",
            sw: "Jina langu ni"
        },
        classroom: {
            en: "The classroom is on the second floor",
            fr: "La salle de classe est au deuxième étage",
            rw: "Ishuri riri ku muryango wa kabiri",
            sw: "Darasa liko ghorofa ya pili"
        },
        common: {
            en: ["thank you", "please", "excuse me", "sorry", "good morning", "good afternoon", "good evening", "good night", "goodbye", "yes", "no", "thank you very much", "thank you so much"],
            fr: ["merci", "s'il vous plaît", "excusez-moi", "désolé", "bonjour", "bonsoir", "bonne nuit", "au revoir", "oui", "non", "merci beaucoup", "merci beaucoup", "merci beaucoup"],
            rw: ["murakoze", "nyabuneka", "mumbabarire", "mbabarira", "mwaramutse", "mwiriwe", "mwiriwe", "ijoro ryiza", "murabeho", "yego", "oya", "murakoze cyane", "murakoze cyane"],
            sw: ["asante", "tafadhali", "samahani", "pole", "habari za asubuhi", "habari za mchana", "habari za jioni", "usiku mwema", "kwaheri", "ndiyo", "hapana", "asante sana", "asante sana"]
        },
        questions: {
            en: ["hello", "where is", "what time", "how much", "can you help"],
            fr: ["bonjour", "où est", "quelle heure", "combien", "pouvez-vous aider"],
            rw: ["muraho", "iri he", "saa ngahe", "angahe", "wambwira"],
            sw: ["hujambo", "iko wapi", "saa ngapi", "bei gani", "unaweza kunisaidia"]
        }
    };

    // After existing constants
    const DICTIONARY_API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
    const COUNTRIES_API_URL = 'https://restcountries.com/v3.1/alpha/';

    // Get additional DOM elements
    const wordInput = document.getElementById('wordInput');
    const lookupBtn = document.getElementById('lookupBtn');
    const dictionaryResult = document.getElementById('dictionaryResult');
    const countrySelect = document.getElementById('countrySelect');
    const getCountryInfo = document.getElementById('getCountryInfo');
    const countryResult = document.getElementById('countryResult');

    // Multilingual Dictionary Database
    const dictionaryDatabase = {
        hello: {
            en: { word: "hello", type: "Type: exclamation", definition: "Definition:Used as a greeting" },
            fr: { word: "Mot: bonjour", type: "Type: exclamation", definition: "Définition: Salutation de la journée" },
            rw: { word: "Ijambo: muraho", type: "Ubwoko: indamukanyo", definition: "Ubusobanuro: Ijambo rikoreshwa mugusuhuza" },
            sw: { word: "Neno: hujambo", type: "Aina: msamiati", definition: "Ufafanuzi: Neno la kusalimia" }
        },
        book: {
            en: { word: "book", type: "Type: noun", definition: "Definition:A written or printed work consisting of pages" },
            fr: { word: "Mot: livre", type: "Type: nom", definition: "Définition:Assemblage de feuilles imprimées" },
            rw: { word: "Ijambo: igitabo", type: "Ubwoko: izina", definition: "Ubusobanuro: Impapuro zanditse cyangwa zicapye zikoranye" },
            sw: { word: "Neno: kitabu", type: "Aina: nomino", definition: "Ufafanuzi: Kurasa zilizochapishwa na kuwekwa pamoja" }
        },
        student: {
            en: { word: "student", type: "Type: noun", definition: "Definition: A person who is studying at a school or college" },
            fr: { word: "Mot: étudiant", type: "Type: nom", definition: "Définition: Personne qui suit des études" },
            rw: { word: "Ijambo: umunyeshuri", type: "Ubwoko: izina", definition: "Ubusobanuro:Umuntu wiga mu ishuri" },
            sw: { word: "Neno: mwanafunzi", type: "Aina: nomino", definition: "Ufafanuzi: Mtu anayesoma shuleni au chuo" }
        },
        teacher: {
            en: { word: "teacher", type: "Type: noun", definition: "Definition:A person who teaches at a school or college" },
            fr: { word: "Mot: enseignant", type: "Type: nom", definition: "Définition:Personne qui enseigne à une école ou un collège" },
            rw: { word: "Ijambo: umwarimu", type: "Ubwoko: izina", definition: "Umuntu wigisha abanyeshuri" },
            sw: { word: "Neno: mteja", type: "Aina: nomino", definition: "Ufafanuzi: Mtu anayotea shuleni au chuo" }
        },
        class: {
            en: { word: "Word: class", type: "Type: noun", definition: "Definition:A group of students studying together" },
            fr: { word: "Mot: classe", type: "Type: nom", definition: "Définition:Groupe d'étudiants qui étudient ensemble" },
            rw: { word: "Ijambo: ishuri", type: "Ubwoko: izina", definition: "Ubusobanuro: Itsinda ry'abanyeshuri biga hamwe" },
            sw: { word: "Neno: darasa", type: "Aina: nomino", definition: "Ufafanuzi: Kikundi cha wanafunzi wanaosoma pamoja" }
        }
    };

    // Practice Data
    const practiceData = {
        greetings: {
            'en-rw': [
                { front: "Hello", back: "Muraho" },
                { front: "Good morning", back: "Mwaramutse" },
                { front: "Good afternoon", back: "Mwiriwe" },
                { front: "How are you?", back: "Amakuru?" },
                { front: "I'm fine", back: "Ni meza" }
            ],
            'en-sw': [
                { front: "Hello", back: "Hujambo" },
                { front: "Good morning", back: "Habari za asubuhi" },
                { front: "Good afternoon", back: "Habari za mchana" },
                { front: "How are you?", back: "Habari gani?" },
                { front: "I'm fine", back: "Nzuri" }
            ],
            'en-fr': [
                { front: "Hello", back: "Bonjour" },
                { front: "Good morning", back: "Bonjour" },
                { front: "Good afternoon", back: "Bon après-midi" },
                { front: "How are you?", back: "Comment allez-vous?" },
                { front: "I'm fine", back: "Je vais bien" }
            ]
        },
        classroom: {
            'en-rw': [
                { front: "Teacher", back: "Umwarimu" },
                { front: "Student", back: "Umunyeshuri" },
                { front: "Book", back: "Igitabo" },
                { front: "Classroom", back: "Ishuri" },
                { front: "Homework", back: "Umukoro" }
            ],
            'en-sw': [
                { front: "Teacher", back: "Mwalimu" },
                { front: "Student", back: "Mwanafunzi" },
                { front: "Book", back: "Kitabu" },
                { front: "Classroom", back: "Darasa" },
                { front: "Homework", back: "Kazi ya nyumbani" }
            ],
            'en-fr': [
                { front: "Teacher", back: "Professeur" },
                { front: "Student", back: "Étudiant" },
                { front: "Book", back: "Livre" },
                { front: "Classroom", back: "Salle de classe" },
                { front: "Homework", back: "Devoir" }
            ]
        },
        numbers: {
            'en-rw': [
                { front: "One", back: "Rimwe" },
                { front: "Two", back: "Kabiri" },
                { front: "Three", back: "Gatatu" },
                { front: "What time is it?", back: "Ni saa ngahe?" },
                { front: "It's 2 o'clock", back: "Ni saa mbiri" }
            ],
            'en-sw': [
                { front: "One", back: "Moja" },
                { front: "Two", back: "Mbili" },
                { front: "Three", back: "Tatu" },
                { front: "What time is it?", back: "Saa ngapi?" },
                { front: "It's 2 o'clock", back: "Saa mbili" }
            ],
            'en-fr': [
                { front: "One", back: "Un" },
                { front: "Two", back: "Deux" },
                { front: "Three", back: "Trois" },
                { front: "What time is it?", back: "Quelle heure est-il?" },
                { front: "It's 2 o'clock", back: "Il est deux heures" }
            ]
        },
        culture: {
            'en-rw': [
                { front: "What is the monthly community work day called?", back: "Umuganda (Last Saturday of every month)" },
                { front: "What is the traditional harvest festival?", back: "Umuganura (Celebrates year's achievements)" },
                { front: "What is the traditional fermented milk drink?", back: "Ikivuguto" },
                { front: "How should you greet elders in Rwanda?", back: "With both hands and a respectful greeting" },
                { front: "What word is used for 'excuse me' when passing?", back: "Mumbabarire" }
            ],
            'en-sw': [
                { front: "What is the respectful greeting for elders?", back: "Shikamoo (Response: Marahaba)" },
                { front: "What does 'Harambee' mean?", back: "Pulling together (community cooperation)" },
                { front: "What is the traditional colorful fabric called?", back: "Kitenge (worn during celebrations)" },
                { front: "Who created the Tinga Tinga art style?", back: "Edward Saidi Tingatinga from Tanzania" },
                { front: "What is unique about Tinga Tinga art?", back: "Vibrant colors and African wildlife themes" }
            ],
            'en-fr': [
                { front: "What is the traditional cheek kiss greeting called?", back: "La Bise (used between friends and family)" },
                { front: "When should you use 'Vous' instead of 'Tu'?", back: "Use 'Vous' in formal situations with strangers or superiors" },
                { front: "What time is traditional tea time in France?", back: "Around 4 PM (with tea and snacks)" },
                { front: "What should you say before starting to eat?", back: "Wait for everyone and say 'Bon appétit'" },
                { front: "Which month do many French businesses close?", back: "August (traditional holiday month)" }
            ]
        }
    };

    // Practice Mode Variables
    let currentCardIndex = 0;
    let currentCards = [];

    // Get Practice Elements
    const practiceCategory = document.getElementById('practiceCategory');
    const practiceLang = document.getElementById('practiceLang');
    const flashcard = document.querySelector('.flashcard');
    const flashcardFront = document.querySelector('.flashcard-front');
    const flashcardBack = document.querySelector('.flashcard-back');

    // Practice Functions
    function loadPracticeCards() {
        const category = practiceCategory.value;
        const language = practiceLang.value;
        
        if (practiceData[category] && practiceData[category][language]) {
            currentCards = practiceData[category][language];
            currentCardIndex = 0;
            updateCard();
            flashcard.classList.remove('is-flipped');
        }
    }

    function updateCard() {
        if (currentCards.length > 0) {
            const card = currentCards[currentCardIndex];
            flashcardFront.innerHTML = `
                <div class="card-content">
                    <p class="card-label">English:</p>
                    <p class="card-text">${card.front}</p>
                    <p class="card-hint">(Click 'Flip' button to see translation)</p>
                </div>
            `;
            flashcardBack.innerHTML = `
                <div class="card-content">
                    <p class="card-label">Translation:</p>
                    <p class="card-text">${card.back}</p>
                    <p class="card-progress">${currentCardIndex + 1}/${currentCards.length}</p>
                </div>
            `;
        }
    }

    // Practice Event Listeners
    document.getElementById('flipCard').addEventListener('click', () => {
        flashcard.classList.toggle('is-flipped');
    });

    document.getElementById('nextCard').addEventListener('click', () => {
        currentCardIndex = (currentCardIndex + 1) % currentCards.length;
        updateCard();
        flashcard.classList.remove('is-flipped');
    });

    document.getElementById('prevCard').addEventListener('click', () => {
        currentCardIndex = (currentCardIndex - 1 + currentCards.length) % currentCards.length;
        updateCard();
        flashcard.classList.remove('is-flipped');
    });

    // Load cards when category or language changes
    practiceCategory.addEventListener('change', loadPracticeCards);
    practiceLang.addEventListener('change', loadPracticeCards);

    // Initialize practice cards
    loadPracticeCards();

    // Set random daily phrase
    function setDailyPhrase() {
        const phrase = dailyPhrases[currentPhraseIndex];
        const currentLang = languageSelect.value;
        
        document.getElementById('dailyPhrase').textContent = phrase[currentLang];
        document.getElementById('phraseTranslation').textContent = 
            currentLang === 'en' ? '' : phrase.en;
    }

    // Translation function
    async function translateText() {
        const text = textToTranslate.value.toLowerCase().trim();
        const targetLang = languageSelect.value;
        
        // Show loading state
        translationResult.innerHTML = '<p>Translating...</p>';
        
        setTimeout(() => {
            try {
                let translatedText = text;
                let found = false;
                
                for (const category in mockTranslations) {
                    const translations = mockTranslations[category];
                    
                    // Check exact matches first (for greetings, basic, classroom)
                    if (translations.en && !Array.isArray(translations.en) && 
                        translations.en.toLowerCase() === text) {
                        translatedText = translations[targetLang];
                        found = true;
                        break;
                    }
                    // Check array-based translations (for common and questions)
                    else if (Array.isArray(translations.en)) {
                        // Convert all phrases to lowercase for comparison
                        const index = translations.en.findIndex(phrase => 
                            text === phrase.toLowerCase().trim());
                        if (index !== -1 && translations[targetLang]) {
                            translatedText = translations[targetLang][index];
                            found = true;
                            break;
                        }
                    }
                }

                translationResult.innerHTML = `
                    <p class="translation-result">${translatedText}</p>
                    ${!found ? '<p class="translation-note">Translation not found in database</p>' : ''}
                `;
            } catch (error) {
                translationResult.innerHTML = `
                    <p class="translation-error">Translation failed. Please try again.</p>
                `;
                console.error('Translation error:', error);
            }
        }, 1000);
    }

    // Save phrase to local storage
    function savePhraseToList() {
        const phrase = document.getElementById('dailyPhrase').textContent;
        const translation = document.getElementById('phraseTranslation').textContent;
        
        // Get existing phrases
        const savedPhrases = JSON.parse(localStorage.getItem('savedPhrases') || '[]');
        
        // Check if phrase already exists
        const isDuplicate = savedPhrases.some(item => 
            item.phrase === phrase && item.translation === translation
        );
        
        if (isDuplicate) {
            alert('This phrase is already saved!');
            return;
        }
        
        savedPhrases.push({ 
            id: Date.now(), // Unique ID for each phrase
            phrase, 
            translation,
            dateAdded: new Date().toLocaleDateString()
        });
        
        localStorage.setItem('savedPhrases', JSON.stringify(savedPhrases));
        displaySavedPhrases();
    }

    // Display saved phrases
    function displaySavedPhrases() {
        const savedPhrases = JSON.parse(localStorage.getItem('savedPhrases') || '[]');
        const noPhrasesMessage = document.getElementById('noPhrasesMessage');
        
        if (savedPhrases.length === 0) {
            phrasesList.innerHTML = '';
            noPhrasesMessage.style.display = 'block';
            return;
        }
        
        noPhrasesMessage.style.display = 'none';
        phrasesList.innerHTML = savedPhrases.map(item => `
            <div class="saved-phrase">
                <div class="phrase-content">
                    <p>${item.phrase}</p>
                    <p>${item.translation}</p>
                    <small>Added: ${item.dateAdded}</small>
                </div>
                <div class="phrase-actions">
                    <button class="edit-btn" onclick="editPhrase(${item.id})">
                        Edit
                    </button>
                    <button class="delete-btn" onclick="deletePhrase(${item.id})">
                        Delete
                    </button>
                </div>
            </div>
        `).join('');
    }

    // Move these functions outside DOMContentLoaded
    // Make them global
    window.deletePhrase = function(id) {
        if (confirm('Are you sure you want to delete this phrase?')) {
            const savedPhrases = JSON.parse(localStorage.getItem('savedPhrases') || '[]');
            const updatedPhrases = savedPhrases.filter(item => item.id !== id);
            localStorage.setItem('savedPhrases', JSON.stringify(updatedPhrases));
            document.getElementById('phrasesList').innerHTML = displaySavedPhrasesHTML(updatedPhrases);
            checkEmptyPhrases(updatedPhrases);
        }
    };
    
    window.editPhrase = function(id) {
        const savedPhrases = JSON.parse(localStorage.getItem('savedPhrases') || '[]');
        const phrase = savedPhrases.find(item => item.id === id);
        
        if (phrase) {
            const newPhrase = prompt('Edit phrase:', phrase.phrase);
            const newTranslation = prompt('Edit translation:', phrase.translation);
            
            if (newPhrase && newTranslation) {
                const updatedPhrases = savedPhrases.map(item => 
                    item.id === id 
                        ? {...item, phrase: newPhrase, translation: newTranslation}
                        : item
                );
                localStorage.setItem('savedPhrases', JSON.stringify(updatedPhrases));
                document.getElementById('phrasesList').innerHTML = displaySavedPhrasesHTML(updatedPhrases);
                checkEmptyPhrases(updatedPhrases);
            }
        }
    };
    
    // Helper function to check for empty phrases
    function checkEmptyPhrases(phrases) {
        const noPhrasesMessage = document.getElementById('noPhrasesMessage');
        noPhrasesMessage.style.display = phrases.length === 0 ? 'block' : 'none';
    }
    
    // Helper function to generate HTML for saved phrases
    function displaySavedPhrasesHTML(phrases) {
        return phrases.map(item => `
            <div class="saved-phrase">
                <div class="phrase-content">
                    <p>${item.phrase}</p>
                    <p>${item.translation}</p>
                    <small>Added: ${item.dateAdded}</small>
                </div>
                <div class="phrase-actions">
                    <button class="edit-btn" onclick="editPhrase(${item.id})">
                        Edit
                    </button>
                    <button class="delete-btn" onclick="deletePhrase(${item.id})">
                        Delete
                    </button>
                </div>
            </div>
        `).join('');
    }

    // Clear all phrases
    document.getElementById('clearAllPhrases').addEventListener('click', () => {
        if (confirm('Are you sure you want to delete all saved phrases?')) {
            localStorage.removeItem('savedPhrases');
            displaySavedPhrases();
        }
    });

    // Event Listeners
    languageSelect.addEventListener('change', setDailyPhrase);
    translateBtn.addEventListener('click', translateText);
    savePhrase.addEventListener('click', savePhraseToList);

    // Cultural tips buttons
    const cultureSelect = document.getElementById('cultureSelect');
    const culturalTip = document.getElementById('culturalTip');

    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            const selectedCountry = cultureSelect.value;
            
            const countryTips = culturalTips[selectedCountry];
            if (countryTips) {
                const categoryTips = countryTips.find(t => t.category === category);
                if (categoryTips) {
                    const randomTip = categoryTips.tips[Math.floor(Math.random() * categoryTips.tips.length)];
                    culturalTip.innerHTML = `<p class="cultural-tip">${randomTip}</p>`;
                }
            }
        });
    });

    // Add event listener for culture selection change
    cultureSelect.addEventListener('change', () => {
        culturalTip.innerHTML = '<p class="tip-prompt">Select a category below to learn more!</p>';
    });

    // Dictionary lookup function
    async function lookupWord() {
        const word = wordInput.value.trim().toLowerCase();
        const selectedLang = document.getElementById('dictionaryLang').value;
        
        // Simple check if word is empty
        if (!word) {
            dictionaryResult.innerHTML = '<p class="translation-error">Please enter a word to look up.</p>';
            return;
        }

        dictionaryResult.innerHTML = '<p>Looking up word...</p>';

        // First try our multilingual database
        if (dictionaryDatabase[word]) {
            const wordData = dictionaryDatabase[word][selectedLang];
            dictionaryResult.innerHTML = `
                <div class="word-card">
                    <h3>${wordData.word}</h3>
                    <p><strong>${wordData.type}</strong></p>
                    <p>${wordData.definition}</p>
                </div>
            `;
            return;
        }

        // If not in our database and language is English, try the API
        if (selectedLang === 'en') {
            try {
                const response = await fetch(`${DICTIONARY_API_URL}${word}`);
                const data = await response.json();

                if (!response.ok) throw new Error('Word not found');

                const meanings = data[0].meanings;
                dictionaryResult.innerHTML = `
                    <div class="word-card">
                        <h3>${word}</h3>
                        <p><em>Pronunciation: ${data[0].phonetic || 'N/A'}</em></p>
                        ${meanings.map(meaning => `
                            <div class="meaning">
                                <p><strong>${meaning.partOfSpeech}</strong></p>
                                <ul>
                                    ${meaning.definitions.slice(0, 2).map(def => 
                                        `<li>${def.definition}</li>`
                                    ).join('')}
                                </ul>
                            </div>
                        `).join('')}
                    </div>
                `;
            } catch (error) {
                // Simple error message
                dictionaryResult.innerHTML = '<p class="translation-error">Sorry, couldn\'t find that word. Please check your internet connection and try again.</p>';
                console.error('Dictionary lookup failed:', error);
            }
        }
    }

    // Country information function
    async function getCountryInformation() {
        const countryCode = countrySelect.value;
        
        // Simple check if country is selected
        if (!countryCode) {
            countryResult.innerHTML = '<p class="translation-error">Please select a country.</p>';
            return;
        }
        
        countryResult.innerHTML = '<p>Loading country information...</p>';

        try {
            const response = await fetch(`${COUNTRIES_API_URL}${countryCode}`);
            const [data] = await response.json();

            countryResult.innerHTML = `
                <div class="country-card">
                    <img src="${data.flags.png}" alt="${data.flags.alt}" class="country-flag">
                    <h3>${data.name.common}</h3>
                    <p><strong>Capital:</strong> ${data.capital}</p>
                    <p><strong>Region:</strong> ${data.region}</p>
                    <p><strong>Population:</strong> ${data.population.toLocaleString()}</p>
                    <p><strong>Languages:</strong> ${Object.values(data.languages).join(', ')}</p>
                    <p><strong>Currency:</strong> ${Object.values(data.currencies)[0].name}</p>
                    ${data.flags.alt ? `<p><em>About the flag:</em> ${data.flags.alt}</p>` : ''}
                    <p><strong>Timezone:</strong> ${data.timezones[0]}</p>
                </div>
            `;
        } catch (error) {
            // Simple error message
            countryResult.innerHTML = '<p class="translation-error">Sorry, couldn\'t load country information. Please check your internet connection and try again.</p>';
            console.error('Country information lookup failed:', error);
        }
    }

    // Add new event listeners
    lookupBtn.addEventListener('click', lookupWord);
    getCountryInfo.addEventListener('click', getCountryInformation);

    // Initialize
    setDailyPhrase();
    displaySavedPhrases();
});