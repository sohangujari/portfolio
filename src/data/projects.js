import Test from "../assets/images/stremble-web.png";

const projects = [
  {
    image: Test,
    name: "Nero - AI Assistant",
    description: "Nero is a local virtual assistant using LLMs like OpenAI and Gemini. It features voice commands via SpeechRecognition and text-to-speech with PyWin32. Nero can open websites, play songs, tell the time, search YouTube, and provide weather updates, enabling conversational interactions and printing responses.",
    tags: ["Python","SpeechRecognition","PyWin32","OpenAI","Gemini","Requests"]
  },
  {
    image: Test,
    name: "Web Scraping Tool",
    description: "Developed a user-friendly web scraping tool with a Tkinter GUI for easy data extraction. Used requests and BeautifulSoup to scrape web pages, and pandas to organize data into dataframes and save as CSV files. Customizable for different websites by adjusting tags, classes, selectors, and more.",
    tags: ["Python", "Tkinter", "Requests", "BeautifulSoup", "Pandas"]
  },
  {
    image: Test,
    name: "Stremble",
    description: "Developed Stremble, a video streaming platform, using React for the frontend and TMDb API for content details. Created a user-friendly interface with search, genre filtering, and authentication. Ensured responsiveness across devices and conducted thorough testing for reliability.",
    tags: ["React", "TMDb API"]
  },
];

export default projects;
