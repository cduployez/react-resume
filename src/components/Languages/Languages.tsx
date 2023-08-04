import React, {useEffect, useState} from 'react';
import {UseStateType} from '../../types/use-state-type';
import {ConfigService} from '../../helpers/config/config-service';
import {LanguageDto} from '../../model/dtos/language-dto';
import Category from '../Category/Category';
import ItemContainer from '../ItemContainer/ItemContainer';
import DatePrefix from '../DatePrefix/DatePrefix';
import Title from '../Title/Title';
import Descriptions from '../Descriptions/Descriptions';
import {LanguagesHttpService} from '../../helpers/http/languages-http.service';

const configService: ConfigService = new ConfigService(process.env);

type LanguagesMessages = {
    categoryTitle: string;
}

const messages: LanguagesMessages = {
    categoryTitle: 'Langues'
};


function Languages(): React.JSX.Element {
    const [loading, setLoading]: UseStateType<boolean> = useState<boolean>(false);
    const [languages, setLanguages]: UseStateType<LanguageDto[]> = useState<LanguageDto[]>([]);

    useEffect(() => {
        const languagesHttpService: LanguagesHttpService = new LanguagesHttpService(configService);

        setLoading(true);
        languagesHttpService.findAll().then((languages: LanguageDto[]) => {
            setLanguages(languages);
            setLoading(false);
        });
    }, []);

    function languageElement(language: LanguageDto): React.JSX.Element {
        return (
            <>
                <div>
                    <DatePrefix dateRange={language.dateRange}/>
                    <Title title={language.title}/>
                </div>
                <Descriptions descriptions={language.descriptions}/>
            </>
        );
    }

    function languagesElements(): React.JSX.Element {
        return (
            <>
                {
                    languages.map((language: LanguageDto) => {
                        return (
                            <ItemContainer contentElement={languageElement(language)}/>
                        );
                    })
                }
            </>
        );

    }

    return (
        <Category categoryTitle={messages.categoryTitle} loading={loading} contentElement={languagesElements()}/>
    );
}

export default Languages;