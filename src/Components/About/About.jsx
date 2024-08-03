import './About.css';
import educationlogo from '../../assets/education-logo.png';


export const About = () => {
    return(
        <div id='about' className='about'>
            <div className="about-title">
                <h1><span>About</span> me</h1>
            </div>
            <div className="about-sections">
                    <div className="about-left">
                        <div className="education">
                            <img src={educationlogo} alt=''/>
                            <p className="education-title">Education</p>
                            <p className='education-details'>B.Tech. <br/>Bachelor's Degree</p>
                        </div>
                    </div>
        
                    <div className="about-right">
                        <p>I am a Front-end software developer specializing in robust and scalable
                         web applications using ReactJS. My expertise includes HTML, CSS, JavaScript, 
                         TypeScript, and Tailwind CSS. I excel in creating responsive, interactive 
                         applications and managing state with Redux and Context API. Proficient in Git,
                        I streamline development through continuous integration and deployment pipelines.
                        My work is characterized by transforming complex problems into user-friendly, 
                        visually appealing solutions, ensuring optimal performance and intuitive user experiences.
                        </p>
                    </div>
            </div>
        </div>
    );
}