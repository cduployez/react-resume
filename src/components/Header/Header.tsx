import styles from './Header.module.scss';
import React, {useEffect, useState} from 'react';
import Loader from '../Loader/Loader';
import {ProfileHttpService} from '../../helpers/http/profile-http.service';
import {ProfileDto} from '../../model/dtos/profile-dto';
import {UseStateType} from '../../types/use-state-type';
import {ConfigService} from '../../helpers/config/config-service';
import Banner from '../Banner/Banner';

const configService: ConfigService = new ConfigService(process.env);

function Header(): React.JSX.Element {

    let keyIndex: number = 0;
    const goalTitle: string = 'Projet professionnel';

    const [loading, setLoading]: UseStateType<boolean> = useState<boolean>(false);
    const [profile, setProfile]: UseStateType<ProfileDto | null> = useState<ProfileDto | null>(null);
    const [leftInfoList, setLeftInfoList]: UseStateType<string[]> = useState<string[]>([]);
    const [rightInfoList, setRightInfoList]: UseStateType<string[]> = useState<string[]>([]);

    useEffect(() => {
        const profileHttpService: ProfileHttpService = new ProfileHttpService(configService);

        setLoading(true);
        profileHttpService.get().then((profile: ProfileDto) => {
            setProfile(profile);
            if (profile) {
                setLeftInfoList([
                    `${profile.age} ans`,
                    profile.city || ''
                ]);

                setRightInfoList(profile.meansOfTransport);
            } else {
                setLeftInfoList([]);
                setRightInfoList([]);
            }
            setLoading(false);
        });
    }, [configService]);

    function toLi(infoList: string[]): React.JSX.Element[] {
        return infoList.map((info: string) => <li key={keyIndex++}>{info}</li>);
    }

    function toGoalElements(goals: string[]): React.JSX.Element[] {
        return goals.map((goal: string) => <p key={keyIndex++}>{goal}</p>);
    }

    function loader() {
        return <Loader/>;
    }

    if (loading) {
        return loader();
    }

    if (profile) {
        return (
            <>
                <section className={`${styles.Header} ${styles.container}`}>
                    <div className={`${styles.side} ${styles.sideLeft}`}>
                        <img className={'light-theme'} src={configService.avatarUrl} alt="avatar"/>
                    </div>

                    <div className={`${styles.main}`}>
                        <h1>{profile.fullName}</h1>
                        <div className={`${styles.mainGrid} info`}>
                            <div className={`${styles.mainGridCol} ${styles.mainGridColLeft}`}>
                                <ul>{toLi(leftInfoList)}</ul>
                            </div>
                            <div className={`${styles.mainGridCol} ${styles.mainGridColRight}`}>
                                <ul>{toLi(rightInfoList)}</ul>
                            </div>
                        </div>
                        <div className={`${styles.mainGrid} ${styles.contact}`}>
                            <div className={`${styles.mainGridCol} ${styles.flexMergeRow}`}>
                                <ul>
                                    <li>
                                        <a href={`mailto:${profile.email}`}>{profile.email}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.side} ${styles.sideRight}`}>
                        <h2>{goalTitle}</h2>
                        {toGoalElements(profile.goals)}
                    </div>
                </section>
                <Banner position={profile.position}/>
            </>
        );
    }

    return (
        <section className={`${styles.Header} ${styles.container}`}></section>
    );
}

export default Header;
