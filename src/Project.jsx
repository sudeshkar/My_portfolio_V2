import Card from "./Card";
import NextJsPortfolio from "./assets/NextJsPortfolio.png";
import SmartWasteManagementSystem from "./assets/smartwastemanagement.png";

function Projects(){
    const projects = [
    {
      title: 'Personal Portfolio Using NextJs',
      description: 'A personal website built with NextJs and TailwindCSS.',
      repoLink: 'https://github.com/sudeshkar/MyPortfolio',
      imageUrl: NextJsPortfolio,
      isHosted: true,
      liveDemoLink: 'https://my-portfolio-sudeshkar.vercel.app/',
    },
    {
      title: 'Smart waste management system For Sri Lanka using IOT Signals',
      description: 'Smart waste management system backend with JWT Token validation using Java SpringBoot.',
      repoLink: 'https://github.com/sudeshkar?tab=repositories',
      imageUrl: SmartWasteManagementSystem,
      isHosted: false,
      liveDemoLink: '',   
    },
    // More projects...
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
                    />
                 ))}
            </div>
        </section>
    );
}
export default Projects;