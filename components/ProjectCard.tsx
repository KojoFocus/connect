import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '../types/Project';

interface ProjectCardProps {
    project: Project;
    small?: boolean;
    large?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, small, large }) => {
    const cardClass = `projects-thumb ${
        small ? 'projects-thumb-small' : large ? 'projects-thumb-large' : ''
    }`;

    return (
        <div className={cardClass}>
            <Link href={project.link}>
                <div>
                    <Image
                        src={project.imageUrl}
                        className="img-fluid projects-image"
                        alt={project.title}
                        width={500} // Adjust these dimensions
                        height={300} // Adjust these dimensions
                    />
                    <div className="projects-info">
                        <div className="projects-title-wrap">
                            <small className="projects-small-title">{project.smallTitle}</small>
                            <h2 className="projects-title">{project.title}</h2>
                        </div>
                        <div className="projects-btn-wrap mt-4">
                            <span className="custom-btn btn bg-[#dc3546] hover:bg-[#ffc206] text-white py-2 px-4 rounded-3 cursor-pointer">
                                <i className="bi-arrow-right"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProjectCard;
