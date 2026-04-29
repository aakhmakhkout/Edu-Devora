 import notesimg from "../assets/abnotes.png"
 import aiimg from "../assets/devora.png"
 import abui from "../assets/abui.png"
 import aboutcoursesimg from "../assets/aboutcardcourses.png"
 import aboutdevoraimg from "../assets/devora.png"
 import aboutupdatesimg from "../assets/aboutcardupdates.png"
 import aboutcontactimg from "../assets/aboutcardcontact.png"
import { Heading } from "lucide-react"
 
 
 export const aboutData = [
    {
      id:1,
      Heading: "Structured Notes",
      icon: notesimg,
      Description:"Well-organized and easy-to-understand notes that focus on clarity, helping students quickly grasp concepts without wasting time."
    },

      {
      id:2,
      Heading: "Devora AI",
      icon: aiimg,
      Description:"Smart AI support to help explain topics, solve doubts, and make learning faster and more interactive."
    },

     {
      id:3,
      Heading: "Clean & Simple UI",
      icon: abui,
      Description:"A distraction-free interface designed for smooth navigation, so students can focus purely on learning."
    }
  ]

  export const aboutCardData = [
    {
        id: 1,
        icon: aboutcoursesimg,
        alt: "courses icon",
        title: "20+ Courses",
        heading: "Courses Offered",
        description: "Edu-Devora provides courses across multiple domains like BCA, B.Tech, Nursing, and 20+ others, helping students choose the path that fits their goals."
    },
    {
        id: 2,
        icon: aboutdevoraimg,
        alt: "Devora icon",
        title: "Devora AI",
        heading: "AI Chat Assitance",
        description: "Get instant help with concepts, doubts, and explanations using built-in AI support for faster and smarter learning."
    },
    {
        id: 3,
        icon: aboutupdatesimg,
        alt: "Future Features icon",
        title: "Future Updates",
        heading: "Future Features (V2)",
        description: "Planned updates include login-based chat history, practice and test modules, more courses and a more polished UI for a smoother experience."
    },
    {
        id: 4,
        icon: aboutcontactimg,
        title: "Ask Anything",
        heading: "Get help",
        description: "Have questions or need help? Reach out anytime and get clear guidance to keep your learning on track."
    }
  ]
