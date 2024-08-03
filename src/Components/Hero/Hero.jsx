import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import profile from '../../assets/profile.jpg';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github-logo.png';

export const Hero = () => {

    const gotolinkedin= () => {
        window.open("https://www.linkedin.com/in/geeth-chand-yanamadala-5517b5201/");
    };
    const gotogithub= () => {
        window.open("https://github.com/geeth-chand/");
    };
    const gotoResume= () => {
        window.open("https://drive.google.com/file/d/1QyF45dp3Mw854xXsdsqNS6x3-wzmbrGH/view?usp=drive_link/");
    };

    return (
        <div id='home' className='hero'>
            <img src={profile} alt=''/>
            <h1><span>Geeth Chand</span><br/> Software developer</h1>
            <div className='hero-action'>
                <AnchorLink className='anchor-link' offset={50} href='#contact'><div className="hero-connect">Get in touch</div></AnchorLink>
                <div onClick={gotoResume} className="hero-resume">My Resume</div>
            </div>
            <div className='hero-action-images'>
                <div className="hero-linkedin"><img onClick={gotolinkedin} src={linkedin} alt=""/></div>
                <div className="hero-github"><img onClick={gotogithub} src={github} alt=""/></div>
            </div>
        </div>
    );
}