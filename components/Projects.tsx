import React from 'react';
import ProjectCard from './ProjectCard';
import {Project} from '../types/Project'

const Projects: React.FC = () => {
    const projects: Project[] = [
        {
            smallTitle: "Business",
            title: "MCL Group",
            imageUrl: "/images/projects/pj-gal-szabo-CIXXIWxxec4-unsplash.jpg",
            link: "/project-detail"
        },
        {
            smallTitle: "Strategy Planning",
            title: "Fredi",
            imageUrl: "/images/projects/team-fredi-FN3vmVee2sI-unsplash.jpg",
            link: "/project-detail"
        },
        {
            smallTitle: "Video Content",
            title: "Banana",
            imageUrl: "/images/projects/vmsign-x9yGe7wnvKQ-unsplash.jpg",
            link: "/project-detail"
        },
        {
            smallTitle: "Video Content",
            title: "Conference",
            imageUrl: "/images/projects/evangeline-shaw-nwLTVwb7DbU-unsplash.jpg",
            link: "/project-detail"
        },
                {
            smallTitle: "Business",
            title: "Maldon",
            imageUrl: "/images/projects/tangerine-newt-AKH4OVEmILc-unsplash.jpg",
            link: "/project-detail"
        },
    ]
  return (
    <section className="projects section-padding pb-0" id="section_4">
        <div className="container">
            <div className="row">
                <div className="col-lg-10 col-12 text-center mx-auto mb-5">
                    <small className="small-title">Projects <strong className="text-warning">04/05</strong></small>
                    <h2>Brands we&apos;ve crafted so far</h2>
                </div>
                {projects.slice(0, 3).map((project, index) => (
                    <div className="col-lg-4 col-12" key={index}>
                        <ProjectCard project={project} small={true} />
                    </div>
                ))}
                <div className="col-lg-8 col-12">
                    <ProjectCard project={projects[3]} large={true} />
                </div>
                <div className="col-lg-4 col-12">
                     <ProjectCard project={projects[4]} small={true} />
                </div>
            </div>
        </div>
    </section>
  );
};

export default Projects;