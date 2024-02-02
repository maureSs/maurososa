// technologies
import ts from '../../public/assets/images/ts.svg'
import js from '../../public/assets/images/js.svg'
import next from '../../public/assets/images/next.png'
import react from '../../public/assets/images/react.png'
import redux from '../../public/assets/images/redux.png'
import mongodb from '../../public/assets/images/mongodb.png'
import node from '../../public/assets/images/node.png'
import tailwind from '../../public/assets/images/tailwind.png'
import express from '../../public/assets/images/express.png'
// projects
import kingpudding from '../../public/assets/images/kingpudding.jpg'
import mustWatch from '../../public/assets/images/mustWatch.jpg'
import gamingStore from '../../public/assets/images/gamingStore.jpg'
import quizAboutEverything from '../../public/assets/images/quizAboutEverything.jpg'

export const aboutMe = '25 y/o web developer from Buenos Aires, Argentina. I mainly work with TypeScript, React and Next.js, and but I love learning new technologies and tools.'
 
export const myTechnologies = [
    {
       name: "TypeScript",
       url: "https://www.typescriptlang.org/",
       image: ts
    },
    {
        name: "JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        image: js
     },
     {
        name: "Next.js",
        url: "https://nextjs.org/",
        image: next
     },
     {
        name: "React.js",
        url: "https://react.dev/",
        image: react
     },
     {
        name: "Redux.js",
        url: "https://redux.js.org/",
        image: redux
     },
     {
        name: "Node.js",
        url: "https://nodejs.org/en/",
        image: node
     },
     {
      name: "Express.js",
      url: "https://expressjs.com/", 
      image: express
     },
     {
      name: "MongoDB",
      url: "https://www.mongodb.com/",
      image: mongodb
   },
     {
        name: "Tailwind CSS",
        url: "https://tailwindcss.com/resources",
        image: tailwind
     }
  ]

  export const myProjects = [
   {
      name: "kingpudding",
      image: kingpudding,
      description: "Pastry Shop local entrepreneurship",
      technologies: ['JavaScript', 'React.js'],
      url: "https://kingpudding.netlify.app/"
   },
   {
      name: "must-watch",
      image: mustWatch,
      description: "Use must-watch to take note of pending-to-watch movies and tv shows",
      technologies: ['JavaScript','React.js', 'Firebase'],
      url: "https://must-watch-81fcf.web.app/login"
    },
    {
      name: "gaming-store",
      image: gamingStore,
      description: "An ecommerce simulator for purchasing gaming products",
      technologies: ['TypeScript','React.js'],
      url: "https://gaming-store.netlify.app/"
    },
    {
      name: "quiz about everything",
      image: quizAboutEverything,
      description: "A fun Trivia-Quiz game!",
      technologies: ['TypeScript','React.js'],
      url: "https://quiz-about-everything.netlify.app/"
    }
  ]
