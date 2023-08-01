import React from 'react';
import './Banner.scss';

function Banner({position}: { position: string }): React.JSX.Element {
    return (
        <section className="Banner">
            <h1>{position}</h1>
        </section>
    );
}

export default Banner;
