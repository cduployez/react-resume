import React, {useEffect, useState} from 'react';
import {UseStateType} from '../../types/use-state-type';
import {ConfigService} from '../../helpers/config/config-service';
import {FormationsHttpService} from '../../helpers/http/formations-http.service';
import {FormationDto} from '../../model/dtos/formation-dto';
import Category from '../Category/Category';
import ItemContainer from '../ItemContainer/ItemContainer';
import DatePrefix from '../DatePrefix/DatePrefix';
import Title from '../Title/Title';
import Descriptions from '../Descriptions/Descriptions';

const configService: ConfigService = new ConfigService(process.env);

type FormationsMessages = {
    categoryTitle: string;
}

const messages: FormationsMessages = {
    categoryTitle: 'Formation'
};


function Formations(): React.JSX.Element {
    const [loading, setLoading]: UseStateType<boolean> = useState<boolean>(false);
    const [formations, setFormations]: UseStateType<FormationDto[]> = useState<FormationDto[]>([]);

    useEffect(() => {
        const formationsHttpService: FormationsHttpService = new FormationsHttpService(configService);

        setLoading(true);
        formationsHttpService.findAll().then((formations: FormationDto[]) => {
            setFormations(formations);
            setLoading(false);
        });
    }, []);

    function formationElement(formation: FormationDto): React.JSX.Element {
        return (
            <>
                <div>
                    <DatePrefix dateRange={formation.dateRange}/>
                    <Title title={formation.title}/>
                </div>
                <Descriptions descriptions={formation.descriptions}/>
            </>
        );
    }

    function formationsElements(): React.JSX.Element {
        return (
            <>
                {
                    formations.map((formation: FormationDto) => {
                        return (
                            <ItemContainer contentElement={formationElement(formation)}/>
                        );
                    })
                }
            </>
        );

    }

    return (
        <Category categoryTitle={messages.categoryTitle} loading={loading} contentElement={formationsElements()}/>
    );
}

export default Formations;