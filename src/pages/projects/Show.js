import React, { useEffect, useState, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import projectsList from '../../data/projects.json';

const Show = () => {
    const { slug } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        const found = projectsList.find((project) => project.slug === slug);
        setProject(found);
    }, [slug]);

    if (!project) {
        return <div>Loading...</div>;
    }

    const Demo = project.demo ? lazy(() => import(`./demos/${project.demo}/App`)) : null;

    return (
        <div>
            {Demo && (
                <Suspense fallback={<div>Loading demo...</div>}>
                    <Demo />
                </Suspense>
            )}
            <h2 className="text-2xl font-bold mb-4">Title: {project.title}</h2>
            <p className="mb-2">{project.description}</p>
            <p className="mb-4">{project.technologies.join(', ')}</p>
            {project.links.map((link, index) => (
                <p key={index} className="mb-2">
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-500 font-bold underline hover:text-blue-700">
                        {link.title}
                    </a>
                </p>
            ))}
        </div>
    );
};

export default Show;