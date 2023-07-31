import React from 'react';
import './Header.scss';
import Loader from '../Loader/Loader';

function Header() {
    let isLoading = true;

    function loader() {
        return <Loader/>;
    }

    if (isLoading) {
        return loader();
    }
    return loader();
}

export default Header;
