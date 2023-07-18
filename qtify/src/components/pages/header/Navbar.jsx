import React,{memo} from 'react';
import "./Navbar.css";
import Logo from './Logo';
import Search from './Search';
import Button from '../../common/Button';



const Navbar = () => {
    return (
        <nav className='navbar-main'>
            <div className='nav-contents'>
                <Logo />
                <Search />
                <Button btnName="Give Feedback" className="feedback-btn" />
            </div>
        </nav>
        
    )
}

export default memo(Navbar)