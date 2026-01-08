import { useEffect, useState } from "react";
import Card from "./Card";
import { getProjects } from "../src/api/projectsApi";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    getProjects()
      .then((res) => setProjects(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="px-5 py-32 bg-primary" id="project">
      <div className="flex justify-center">
        <h1 className="text-6xl font-bold mb-4 font-Bebas text-white border-b-4 border-[#2b2D77] w-[185px]">
          Projects
        </h1>
      </div>

      <div className="flex gap-20 mt-10 md:flex-row flex-col items-center justify-center flex-wrap">
        {loading ? (
        <div className="flex justify-center items-center w-full">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
        </div>
      ) : projects.length === 0 ? (
          <p className="text-white text-xl">No projects found.</p>
        ) : (
          projects.map((project, index) => (
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
          ))
        )}
      </div>

    </section>
  );
}

export default Projects;
