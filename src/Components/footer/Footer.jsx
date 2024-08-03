import "./Footer.css";
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const Footer = () => {
    return(
        <>
             <div className="footer">
            <ul className="footer-menu">
                <li> <AnchorLink className='anchor-link' offset={50} href='#about'>About</AnchorLink></li>
                <li> <AnchorLink className='anchor-link' offset={50} href='#skills'>Skills</AnchorLink></li>
                <li> <AnchorLink className='anchor-link' offset={50} href='#projects'>Projects</AnchorLink></li>
            </ul>
        </div>
        <div className="rights">
            <p>Copyright 2024 Geeth Chand. All rights reserved.</p>
        </div>
        </>
       

    );
}