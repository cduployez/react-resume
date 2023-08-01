import React from 'react';
import styles from './Banner.module.scss';

function Banner({position}: { position: string }): React.JSX.Element {
    return (
        <section className={styles.Banner}>
            <h1>{position}</h1>
        </section>
    );
}

export default Banner;
