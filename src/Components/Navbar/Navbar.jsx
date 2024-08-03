import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css';

export const Navbar = () => {


    return (
        <div className='navbar'>
            <h1><AnchorLink className='anchor-link-geeth' offset={50} href='#home'>Geeth</AnchorLink></h1>
            <ul className="nav-menu">
                <li> <AnchorLink className='anchor-link' offset={50} href='#about'>About</AnchorLink></li>
                <li> <AnchorLink className='anchor-link' offset={50} href='#skills'>Skills</AnchorLink></li>
                <li> <AnchorLink className='anchor-link' offset={50} href='#projects'>Projects</AnchorLink></li>
            </ul>
            <AnchorLink className='anchor-link' offset={50} href='#contact'><div className="nav-connect">Get in touch</div></AnchorLink>
        </div>
    );
}