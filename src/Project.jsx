import Card from "./Card";
import NextJsPortfolio from "./assets/NextJsPortfolio.png";
import SmartWasteManagementSystemFE from "./assets/smartwastemanagementFE.png";
import SmartWasteManagementSystemBE from "./assets/smartwastemanagementBE.png";
import { title } from "framer-motion/client";
import AiFocusEnhancer from "./assets/AIFocusEnhancer.png";
import introvertPrediction from "./assets/IntervertPrediction.png";


function Projects(){
    const projects = [

      {
      title: 'Smart Waste Management System for Sri Lanka (Backend)',
      description:
        'Backend system for a Smart Waste Management platform using IoT signals. Built with Java Spring Boot, featuring JWT-based authentication, role-based access control, RESTful APIs, and secure data handling.',
      repoLink: 'https://github.com/sudeshkar/wastemanagement.git',
      imageUrl: SmartWasteManagementSystemBE,
      isHosted: true,
      liveDemoLink: 'https://drive.google.com/file/d/1xXFNHoZwdJX8WxDO9_RX4-dQYge1m-yF/view?usp=sharing', 
      driveLink: 'https://drive.google.com/drive/folders/1GvQqhf_piXNAuOdHSwWiMqHxYf9iXg2W?usp=sharing',  
    },
    {
      title: 'Personal Portfolio Using NextJs',
      description: 'A modern and responsive personal portfolio website built using Next.js and Tailwind CSS. Showcases projects, skills, and experience with optimized performance and clean UI design.',
      repoLink: 'https://github.com/sudeshkar/MyPortfolio',
      imageUrl: NextJsPortfolio,
      isHosted: true,
      liveDemoLink: 'https://my-portfolio-sudeshkar.vercel.app/',
      driveLink: '',
    },
    {
      title: 'Smart Waste Management System for Sri Lanka (Frontend)',
      description:'Frontend application for the Smart Waste Management system developed using React.js. Includes JWT-based authentication, role-based dashboards, real-time data visualization, and an intuitive user interface.',
      repoLink: 'https://github.com/sudeshkar/SMW_frontend.git',
      imageUrl: SmartWasteManagementSystemFE,
      isHosted: true,
      liveDemoLink: 'https://drive.google.com/file/d/1xXFNHoZwdJX8WxDO9_RX4-dQYge1m-yF/view?usp=sharing', 
      driveLink: 'https://drive.google.com/drive/folders/1GvQqhf_piXNAuOdHSwWiMqHxYf9iXg2W?usp=sharing',  
    },
    {
      title: 'AI focuse enhancement project',
      description: 'An AI-focused enhancement project aimed at improving focus and productivity through reinforcement learning model.',
      repoLink: 'https://github.com/sudeshkar/AI-Powered-Focus-Assistant.git',
      imageUrl: AiFocusEnhancer,
      isHosted: false,
      liveDemoLink: '',
      driveLink: '',
    },
    {
      title: 'introvert-extrovert-prediction using-ml',
      description: 'Machine learning model to predict introversion/extroversion traits based on behavioral data.',
      repoLink: 'https://github.com/sudeshkar/introvert-extrovert-prediction.git',
      imageUrl: introvertPrediction,
      isHosted: false,
      liveDemoLink: '',
      driveLink: '',
    },
  ];
    return(
        <section className="px-5 py-32 bg-primary" id="project">
            <div className="flex justify-center">
            <h1 className="text-6xl font-bold mb-4 font-Bebas text-white  border-b-4 border-[#2b2D77] w-[185px]">
                Projects
            </h1>

            </div>
            <div className="flex gap-20 mt-10 md:flex-row flex-col items-center justify-center flex-wrap">
                {projects.map((project, index) => (
                    <Card
                    key={index}
                    title={project.title}
                    description={project.description}
                    repoLink={project.repoLink}
                    imageUrl={project.imageUrl}
                    isHosted={project.isHosted}
                    liveDemoLink={project.liveDemoLink}
                    driveLink={project.driveLink}
                    />
                ))}
            </div>
        </section>
    );
}
export default Projects;