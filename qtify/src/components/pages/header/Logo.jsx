import React,{memo} from 'react';
import {ReactComponent as LogoImg} from "../../assets/svg/logo.svg";
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <>
            <Link to='/'><LogoImg /></Link>
        </>
    )
}

export default memo(Logo)