import React, {useEffect, useState} from 'react';
import {UseStateType} from '../../types/use-state-type';
import {ConfigService} from '../../helpers/config/config-service';
import Category from '../Category/Category';
import ItemContainer from '../ItemContainer/ItemContainer';
import {HobbiesHttpService} from '../../helpers/http/hobbies-http.service';
import {HobbyDto} from '../../model/dtos/hobby-dto';
import styles from './Hobbies.module.scss';

const configService: ConfigService = new ConfigService(process.env);

type HobbiesMessages = {
    categoryTitle: string;
}

const messages: HobbiesMessages = {
    categoryTitle: 'Loisirs'
};


function Hobbies(): React.JSX.Element {
    const [loading, setLoading]: UseStateType<boolean> = useState<boolean>(false);
    const [hobbies, setHobbies]: UseStateType<HobbyDto[]> = useState<HobbyDto[]>([]);

    useEffect(() => {
        const hobbiesHttpService: HobbiesHttpService = new HobbiesHttpService(configService);

        setLoading(true);
        hobbiesHttpService.findAll().then((hobbies: HobbyDto[]) => {
            setHobbies(hobbies);
            setLoading(false);
        });
    }, []);

    function hobbyElement(hobby: HobbyDto): React.JSX.Element {
        return (
            <>
                <span className={styles.title}>{hobby.title}</span>
                <span className={styles.values}>{hobby.valuesFormat}{hobby.ellipsis ? '...' : null}</span>
            </>
        );
    }

    function hobbiesElements(): React.JSX.Element {
        return (
            <>
                {
                    hobbies.map((hobby: HobbyDto) => {
                        return (
                            <ItemContainer contentElement={hobbyElement(hobby)}/>
                        );
                    })
                }
            </>
        );

    }

    return (
        <Category categoryTitle={messages.categoryTitle} loading={loading} contentElement={hobbiesElements()}/>
    );
}

export default Hobbies;