import { useState, useEffect } from 'react';
import ProjectCard from '../../components/ProjectCard';
import projectsJSON from '../../data/projects.json';
import FilterProjects from '../../components/FilterProjects';
import { Grid } from "@chakra-ui/react"

const Index = () => {
    const [projectsList, setProjectsList] = useState(projectsJSON);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredList, setFilteredList] = useState(projectsJSON);
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        let result = projectsList;

        if (searchTerm) {
            result = result.filter((project) => 
                project.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedCategory !== "All") {
            result = result.filter((project) => 
                project.categories.includes(selectedCategory)
            );
        }

        setFilteredList(result);
    }, [searchTerm, selectedCategory, projectsList]);

    const projectCards = filteredList.map((project, index) => {
        return <ProjectCard key={index} project={project} />;
    });

    return (
        <>
            <h1>Projects</h1>
            <FilterProjects setSearchTerm={setSearchTerm} setSelectedCategory={setSelectedCategory} />
            <Grid templateColumns="repeat(2, 1fr)" gap="6">
                {projectCards}
            </Grid>
        </>
    );
};

export default Index;