import React, {useEffect, useState} from 'react';
import Category from '../Category/Category';
import {UseStateType} from '../../types/use-state-type';
import {ConfigService} from '../../helpers/config/config-service';
import {ExperiencesHttpService} from '../../helpers/http/experiences-http.service';
import {ExperienceDto} from '../../model/dtos/experience-dto';

const configService: ConfigService = new ConfigService(process.env);

type ExperiencesMessages = {
    categoryTitle: string;
}

const messages: ExperiencesMessages = {
    categoryTitle: 'Expériences'
};


function Experiences(): React.JSX.Element {
    const [loading, setLoading]: UseStateType<boolean> = useState<boolean>(false);
    const [experiences, setExperiences]: UseStateType<ExperienceDto[]> = useState<ExperienceDto[]>([]);

    useEffect(() => {
        const experiencesHttpService: ExperiencesHttpService = new ExperiencesHttpService(configService);

        setLoading(true);
        experiencesHttpService.findAll().then((experiences: ExperienceDto[]) => {
            setExperiences(experiences);
            setLoading(false);
        });
    }, []);

    function contentElement() {
        return <span>{experiences.length} éléments</span>
    }

    return (
        <>
            <Category categoryTitle={messages.categoryTitle} loading={loading} contentElement={contentElement()}/>
        </>
    );
}

export default Experiences;