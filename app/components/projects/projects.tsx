import './projects.css';

const projectsData = [
  {
    title: "Project Alpha",
    description: "A web application built to manage tasks efficiently.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    image: "/general/project-alpha-thumbnail.jpg", // You'll need to add this image
    liveLink: "https://project-alpha-demo.com", // Replace with your live demo link
    githubLink: "https://github.com/yourusername/project-alpha" // Replace with your GitHub link
  },
  {
    title: "Project Beta",
    description: "An e-commerce platform with secure payment integration.",
    technologies: ["React", "JavaScript", "Express.js", "MongoDB"],
    image: "/general/project-beta-thumbnail.jpg", // You'll need to add this image
    liveLink: "https://project-beta-demo.com", // Replace with your live demo link
    githubLink: "https://github.com/yourusername/project-beta" // Replace with your GitHub link
  },
  // Add more projects here
  {
    title: "Your Next Project",
    description: "Describe your awesome project here. What problem does it solve? What did you learn?",
    technologies: ["Technology 1", "Technology 2"],
    image: "/general/placeholder.jpg", // Add a placeholder image
    liveLink: "#",
    githubLink: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Meus Projetos</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            {project.image && <img src={project.image} alt={project.title} className="project-thumbnail" />}
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              {project.liveLink !== "#" && <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>}
              {project.githubLink !== "#" && <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;