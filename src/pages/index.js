import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Inter } from "next/font/google";
import {AiFillLinkedin, AiFillGithub,AiFillThunderbolt} from "react-icons/ai";
import ash from '../../public/asutosh.jpg'
import adm from '../../public/adminDash.png'
import { useSpring, animated } from "react-spring";
import { IoMdDocument } from "react-icons/io";
import { FiShield } from "react-icons/fi";

const inter = Inter({ subsets: ["latin"] });

const projects = [
  {
    id: 1,
    title: "Admin Dashboard App",
    image: "/adminDash.png",
    description: "This web application is multi functional react web application which can be used by the administrator to manage the users and the products. The admin can add, delete and update the products and the users. It features a kanban project manager, color picker, calendar, text editor and a variety of graphs",
  },
  {
    id: 2,
    title: "Food Blog App",
    image: "/foodApp.png",
    description: "This web application built using the Django framework is a fully operational food blog where registered users can post pictures of food, add a description, comments and authentication is handled by django ",
  },
  {
    id: 3,
    title: "2D Car Game",
    image: "/car.png",
    description: "This game was designed using OpenGL and C++ and features a 2D car game where the player has to avoid obstacles and collect coins to increase the score. The game has a leaderboard and the scores are stored until game is restarted",
  },
  {
    id: 4,
    title: "Fitness App",
    image: "/fitness.jpg",
    description: "This mobile application was built using Java and Android Studio. It is a fitness app where the user can see their daily workouts along with a timer and track their progress. User data is stored in firebase which also provides authentication.",
  },
];


const ProjectCard = ({ project, onClick }) => (
  <div className="mb-4">
    <img
      src={project.image}
      // style={{ height: '50%', width: '50%' }}
      alt={project.title}
      className="cursor-pointer"
      onClick={() => onClick(project)}
    />
    <h3 className="text-lg font-semibold">{project.title}</h3>
  </div>
);

const ProjectModal = ({ project, onClose }) => (
  <div className="fixed top-0 left-0 h-full w-full flex justify-center items-center bg-black bg-opacity-50">
    <div className="bg-white p-4 rounded-lg w-1/2 max-w-screen-md relative"> {/* Updated max width and added relative positioning */}
      <button className="absolute top-2 right-2 bg-teal-500 text-white px-2 py-1 rounded" onClick={onClose}>
        Close
      </button>
      <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
      <img src={project.image} alt={project.title} className="mb-2" style={{ maxWidth: '100%', height: 'auto' }} />
      <p className="text-sm">{project.description}</p>
    </div>
  </div>
);


const skills = [
  { skill: "C", level: 80 },
  { skill: "C++", level: 80 },
  { skill: "Java", level: 80 },
  { skill: "Python", level: 70 },
  { skill: "SQL", level: 80 },
  { skill: "Git", level: 70 },
  { skill: "LINUX", level: 85 },
  { skill: "BASH", level: 70 },
  { skill: "HTML/CSS/JS", level: 70 },
  { skill: "Ethical Hacking", level: 75 },
];

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const sidebarAnimation = useSpring({
    transform: isSidebarOpen ? "translateX(0)" : "translateX(-100%)",
  });

  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  
  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };


  return (
    <div>
      <Head>
        <title>Asutosh Chamappaji Urs</title>
        <meta name="description" content="Asutosh Chamappaji Urs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 text-black ">
        <section className=" min-h-screen">
        <nav className="py-10 mb-12 flex justify-between3">
          <h1 className="text-xl font-burtons"><a href="#">Asutosh Chamappaji Urs</a></h1>
          <ul className="flex items-center ml-auto">
            
            <li className="font-burtons text-2xl">
            <a href="https://www.dropbox.com/scl/fi/8yoq88z73lq81b7exr190/AsutoshUrs_RESUME.pdf?rlkey=taaf0wd3w7keblcb12kp11i17&dl=0" target="_blank">Resume</a>
              <a href="https://www.dropbox.com/scl/fi/8yoq88z73lq81b7exr190/AsutoshUrs_RESUME.pdf?rlkey=taaf0wd3w7keblcb12kp11i17&dl=0" target="_blank"><IoMdDocument /></a></li>
          </ul>
        </nav>
        <animated.div
        className="fixed top-0 left-0 h-full w-56 bg-gray-200 p-4 overflow-y-auto"
        style={sidebarAnimation}
      >
        <button className="text-2xl font-bold mb-4" onClick={closeSidebar}>
          &times; 
        </button>
        <h3 className="text-2xl font-bold mb-4">My Skills</h3>
        {skills.map((skill, index) => (
          <div key={index} className="mb-2">
            <p className="text-lg font-semibold">{skill.skill}</p>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                    {skill.level}%
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="w-full bg-gray-200 rounded-full">
                  <div
                    className="bg-teal-500 text-xs leading-none py-1 text-center text-white rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </animated.div>
      
        <div className="text-center p-10  ">
            <h2 className="text-5xl py-2 font-medium">Asutosh Chamappaji Urs</h2>
            <h3 className="text-2xl py-2">Developer and Cybsersecurity Engineer</h3>
            <p className="text-medium py-5 leading-8 ">
              Computer science engineer, cybersecurity enthusiast with a passion for building and breaking things (destroying). I love to learn new things and solve problems. I am a quick learner and a team player. I interned as a Vulnerability Assessment and Penetration Testing Security Engineer at <a href="https://www.ltts.com/">L&T Technology Services</a>.
              Scroll down to take a glimpse of my projects. Click on the shield below to get an idea of my skillset.
            </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <a href="https://www.linkedin.com/in/asutoshurs/" target="_blank"><AiFillLinkedin   /></a>
          
          <a href="https://github.com/asvt0sh" target="_blank"><AiFillGithub  /></a>

          <a className="font-burtons text-2xl"><FiShield
              className="cursor-pointer text-5xl"
              onClick={() => setSidebarOpen(!isSidebarOpen)}
            /></a>
        </div>
        <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden" >
          <Image src={ash} layout="fill" objectFit="cover" />
        </div>
        </section>
        <section>
          <div className="text-center mt-15">
          <h1 className="text-5xl py-2 font-medium">Projects</h1>
         
          </div>
          <div>
          <div className="flex flex-wrap gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onClick={openProjectModal} />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeProjectModal} />
      )}
          </div>
</section>
      </main>
    </div>
  );

  
}
const SkillProgressBar = ({ skill, level }) => {
  return (
    <div className="py-2">
      <p className="text-lg font-medium">{skill}</p>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
              {level}%
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-full bg-gray-200 rounded-full">
            <div
              className="bg-teal-500 text-xs leading-none py-1 text-center text-white rounded-full"
              style={{ width: `${level}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}