import React, {useEffect, useState} from 'react';
import Category from '../Category/Category';
import {UseStateType} from '../../types/use-state-type';
import {ConfigService} from '../../helpers/config/config-service';
import {ExperiencesHttpService} from '../../helpers/http/experiences-http.service';
import {ExperienceDto} from '../../model/dtos/experience-dto';
import ItemContainer from '../ItemContainer/ItemContainer';
import DatePrefix from '../DatePrefix/DatePrefix';
import Title from '../Title/Title';
import {JobTypeEnum} from '../../model/enums/job-type.enum';

const configService: ConfigService = new ConfigService(process.env);

type ExperiencesMessages = {
    categoryTitle: string;
    jobTypeText: (jobType: JobTypeEnum) => string | null;
}

const jobTypeRecord: Record<JobTypeEnum, string> = {
    STAGE: 'Stage',
    ALTERNANCE: 'Alternance',
    CDD: 'CDD',
    CDI: 'CDI'
};

const messages: ExperiencesMessages = {
    categoryTitle: 'Expériences',
    jobTypeText: (jobType: JobTypeEnum): string | null => jobType !== JobTypeEnum.CDI ? jobTypeRecord[jobType] : null
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

    function experienceElement(experience: ExperienceDto): React.JSX.Element {
        return (
            <div>
                <DatePrefix dateRange={experience.dateRange}/>
                <Title title={experience.project} detail={messages.jobTypeText(experience.jobType)}/>
            </div>
        );
    }

    function experiencesElements(): React.JSX.Element {
        return (
            <>
                {
                    experiences.map((experience: ExperienceDto) => {
                        return (
                            <ItemContainer contentElement={experienceElement(experience)}/>
                        );
                    })
                }
            </>
        );

    }

    return (
        <>
            <Category categoryTitle={messages.categoryTitle} loading={loading} contentElement={experiencesElements()}/>
        </>
    );
}

export default Experiences;