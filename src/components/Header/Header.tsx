import styles from './Header.module.scss';
import React, { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import { ProfileHttpService } from '../../helpers/http/profile-http.service';
import { ProfileDto } from '../../model/dtos/profile-dto';
import { UseStateType } from '../../types/use-state-type';
import { ConfigService } from '../../helpers/config/config-service';
import Banner from '../Banner/Banner';

const configService: ConfigService = new ConfigService(process.env);

const messages: { goalTitle: string } = {
  goalTitle: 'Projet professionnel'
};

function Header(): React.JSX.Element {
  let keyIndex: number = 0;

  const [loading, setLoading]: UseStateType<boolean> = useState<boolean>(false);
  const [profile, setProfile]: UseStateType<ProfileDto | null> =
    useState<ProfileDto | null>(null);
  const [leftInfoList, setLeftInfoList]: UseStateType<string[]> = useState<
    string[]
  >([]);
  const [rightInfoList, setRightInfoList]: UseStateType<string[]> = useState<
    string[]
  >([]);

  function onError(): void {
    setProfile(null);
    setLeftInfoList([]);
    setRightInfoList([]);
  }

  useEffect(() => {
    const profileHttpService: ProfileHttpService = new ProfileHttpService(
      configService
    );

    setLoading(true);
    profileHttpService
      .get()
      .then((profile: ProfileDto) => {
        setProfile(profile);
        if (profile) {
          setLeftInfoList([`${profile.age} ans`, profile.city || '']);

          setRightInfoList(profile.meansOfTransport);
        } else {
          onError();
        }
        setLoading(false);
      })
      .catch(onError)
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function toLiElements(infoList: string[]): React.JSX.Element[] {
    return infoList.map((info: string) => <li key={keyIndex++}>{info}</li>);
  }

  function toGoalElements(goals: string[]): React.JSX.Element[] {
    return goals.map((goal: string) => <p key={keyIndex++}>{goal}</p>);
  }

  if (loading) {
    return <Loader />;
  }

  if (!profile) {
    return (
      <section className={`${styles.Header} ${styles.container}`}></section>
    );
  }

  return (
    <>
      <section className={`${styles.Header} ${styles.container}`}>
        <div className={`${styles.side} ${styles.sideLeft}`}>
          <img src={configService.avatarUrl} alt="avatar" />
        </div>

        <div className={`${styles.main}`}>
          <h1>{profile.fullName}</h1>
          <div className={`${styles.mainGrid} ${styles.info}`}>
            <div className={`${styles.mainGridCol} ${styles.mainGridColLeft}`}>
              <ul>{toLiElements(leftInfoList)}</ul>
            </div>
            <div className={`${styles.mainGridCol} ${styles.mainGridColRight}`}>
              <ul>{toLiElements(rightInfoList)}</ul>
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
          <h2>{messages.goalTitle}</h2>
          {toGoalElements(profile.goals)}
        </div>
      </section>
      <Banner position={profile.position} />
    </>
  );
}

export default Header;
