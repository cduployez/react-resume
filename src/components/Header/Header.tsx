import React, {useEffect, useState} from 'react';
import './Header.scss';
import Loader from '../Loader/Loader';
import axios, {AxiosResponse} from 'axios';
import {Simulate} from 'react-dom/test-utils';
import load = Simulate.load;
import {ProfileHttpService} from '../../helpers/http/profile-http.service';
import {ProfileDtoMapper} from '../../mappers/dtos/profile-dto-mapper';
import {ProfileDto} from '../../model/dtos/profile-dto';

const staticObj = {i: 0};

function Header() {
    const profileHttpService: ProfileHttpService = new ProfileHttpService();

    const [loading, setLoading]: [boolean, any] = useState(false);
    const [profile, setProfile]: [ProfileDto | null, any] = useState<ProfileDto | null>(null);
    const [leftInfoList, setLeftInfoList]: [string[], any] = useState([]);
    const [rightInfoList, setRightInfoList]: [string[], any] = useState([]);

    useEffect(() => {
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
    }, []);

    function loader() {
        return <Loader/>;
    }

    if (loading) {
        return loader();
    }

    if (profile) {
        return (
            <section className="container">
                <div className="main">
                    <h1>{profile.fullName}</h1>
                </div>
            </section>
        );
    }

    return (
        <section className="container"></section>
    );
}

export default Header;
