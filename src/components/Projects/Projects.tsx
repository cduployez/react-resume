import React, {useEffect, useState} from 'react';
import Category from '../Category/Category';
import {UseStateType} from '../../types/use-state-type';
import {ConfigService} from '../../helpers/config/config-service';
import Descriptions from '../Descriptions/Descriptions';
import Badges from '../Badges/Badges';
import {ProjectsHttpService} from '../../helpers/http/projects-http.service';
import {ProjectDto} from '../../model/dtos/project-dto';
import styles from './Projects.module.scss';
import ItemContainer from '../ItemContainer/ItemContainer';

const configService: ConfigService = new ConfigService(process.env);

type ProjectsMessages = {
    categoryTitle: string;
    teamSizeFormat: (teamSize: number) => string;
}

const messages: ProjectsMessages = {
    categoryTitle: 'Projets informatiques',
    teamSizeFormat: (teamSize: number) => `${teamSize} personnes`
};


function Projects(): React.JSX.Element {
    const [loading, setLoading]: UseStateType<boolean> = useState<boolean>(false);
    const [projects, setProjects]: UseStateType<ProjectDto[]> = useState<ProjectDto[]>([]);

    useEffect(() => {
        const projectsHttpService: ProjectsHttpService = new ProjectsHttpService(configService);

        setLoading(true);
        projectsHttpService.findAll().then((projects: ProjectDto[]) => {
            setProjects(projects);
            setLoading(false);
        });
    }, []);

    function projectElement(project: ProjectDto): React.JSX.Element {
        return (
            <>
                <div>
                    <span className={styles.title}>{project.project}</span>
                    <span className={styles.teamSize}>{messages.teamSizeFormat(project.teamSize)}</span>
                </div>
                <div>
                    <Descriptions descriptions={project.descriptions}/>
                    <Badges badges={project.skills}/>
                </div>
            </>
        );
    }

    function projectsElements(): React.JSX.Element {
        return (
            <>
                {
                    projects.map((project: ProjectDto) => {
                        return (
                            <ItemContainer contentElement={projectElement(project)}/>
                        );
                    })
                }
            </>
        )
            ;

    }

    return (
        <>
            <Category categoryTitle={messages.categoryTitle} loading={loading} contentElement={projectsElements()}/>
        </>
    );
}

export default Projects;