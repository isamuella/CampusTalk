# CampusTalk - Your Campus Language Companion

CampusTalk is a web application designed to help international students adapt to new environments by breaking language barriers. Whether you're navigating a market, making friends, or simply trying to understand day-to-day conversations, CampusTalk provides the tools you need to communicate the basics effectively.

## Purpose

CampusTalk was created with international students in mind, such as an Ethiopian student studying at the African Leadership University in Rwanda. The app helps users learn basic words and phrases, translate unfamiliar words, and explore cultural contexts to make communication easier and more meaningful.

## Features

- **Phrase of the Day**: Learn a new phrase every day to improve your vocabulary.
- **Quick Translate**: Translate words or phrases into English or other supported languages.
- **Campus Dictionary**: Look up common words and phrases for better understanding.
- **Cultural Context**: Explore cultural tips and country-specific information to connect better with locals.
- **Practice Mode**: Use flashcards to practice and memorize useful phrases.
- **Saved Phrases**: Save your favorite phrases for quick access and review.

## How It Works

- **Daily Phrase**: Start your day with a new phrase to learn and use in conversations.
- **Translation Tool**: Enter text in a language you don't understand and translate it to English or another language.
- **Dictionary**: Search for specific words or phrases to understand their meaning and usage.
- **Cultural Corner**: Learn about cultural norms and tips to help you navigate social situations.
- **Practice Mode**: Use flashcards to test your knowledge and reinforce what you've learned.
- **Saved Phrases**: Save important phrases and manage them in the "Saved Phrases" section.

## Technologies Used

- **HTML**: For structuring the content of the web page.
- **CSS**: For styling and creating a visually appealing interface.
- **JavaScript**: For adding interactivity and functionality to the app.
- **RESTful APIs**:
  - [Dictionary API](https://dictionaryapi.dev/) - For English word definitions
  - [RestCountries API](https://restcountries.com/) - For country information

## How to Use and Contribute

Clone or download the repository to your local machine.
```bash
git clone https://github.com/isamuella/CampusTalk.git
git checkout -b feature-new-feature
git commit -m "Added a new feature"
git push origin feature-new-feature
```

## Deployment

This application is deployed across multiple servers for reliability and performance:

1. **Web Servers**:
   - **Web01**: Primary web server hosting the application
   - **Web02**: Secondary web server for redundancy

2. **Load Balancer**:
   - **Lb01**: Distributes traffic between Web01 and Web02 for optimal performance

### Deployment Steps:

1. **Setting up Web Servers**:
   ```bash
   # On Web01 and Web02
   mkdir -p /var/www/html/campustalk
   cp -r * /var/www/html/campustalk/
   ```
2. **Configure Web Server**:
   - Ensured Nginx is installed and configured to serve the application
   - Set proper permissions for files

3. **Load Balancer Configuration**:
   - Configure Lb01 to distribute traffic between Web01 and Web02
   - Set up health checks to ensure servers are responding

## Future Improvements
- Add more languages and phrases to support a wider audience
- Include audio pronunciation for phrases to improve learning
- Enhance the design for better user experience
- Add user accounts to save progress and personalize the experience
- Implement a more robust translation API for better accuracy
- Create a mobile app version for on-the-go learning

## Challenges and Solutions
During development, several challenges were encountered:

1. **Limited API Usage**: Made sure not to overuse external services by saving common translations
2. **Browser Differences**: Tested the website on different browsers to ensure it works everywhere
3. **Mobile Friendly Design**: Made sure the website looks good on phones and tablets
4. **Working Offline**: Added basic functionality that works even without internet connection

## Acknowledgments
CampusTalk was inspired by the challenges faced by international students in adapting to new environments. Special thanks to the African Leadership University community for inspiring this project and providing valuable feedback.

## Contact
For questions, suggestions, or feedback, please contact:

- Email: s.ineza@alustudent.com
- LinkedIn: www.linkedin.com/in/samuella-ineza