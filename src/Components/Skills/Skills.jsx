import "./Skills.css";
import javascriptlogo from '../../assets/javascript-logo.png';
import reactlogo from '../../assets/react-logo.png';
import htmllogo from '../../assets/html-logo.png';
import csslogo from '../../assets/css-logo.png';
import tailwindlogo from '../../assets/tailwind-logo.png';
import typescriptlogo from '../../assets/typescript-logo.png';
import githublogo from '../../assets/github-logo.png';
import javalogo from '../../assets/java-logo.png';
import pythonlogo from '../../assets/python-logo.png';

export const Skills = () => {
    return (
        <div id="skills" className="skills">
            <div className="my-skills">
                <span>My</span> skills
            </div>
            <div className="skills-logo">
                <img src={javascriptlogo} alt=''/>
                <img src={reactlogo} alt=''/>
                <img src={htmllogo} alt=''/>
                <img src={csslogo} alt=''/>
                <img src={tailwindlogo} alt=''/>
                <img src={typescriptlogo} alt=''/>
                <img src={githublogo} alt=''/>
                <img src={javalogo} alt=''/>
                <img src={pythonlogo} alt=''/>
            </div>
            <div className="skills-section">
                <div className="skills-left">
                    <p>Front-end Development</p>
                    <div className="left-ab">
                        <div className="left-a">
                            <ul>
                                <li className="custom-bullet">JavaScript</li>
                                <li className="custom-bullet">HTML</li>
                                <li className="custom-bullet">TypeScript</li>
                            </ul>
                        </div>
                        <div className="left-b">
                            <ul>
                                <li className="custom-bullet">React</li>
                                <li className="custom-bullet">CSS</li>
                                <li className="custom-bullet">Tailwind</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="skills-right">
                    <p>Other skills</p>
                    <div className="right-ab">
                        <div className="right-a">
                            <ul>
                                <li className="custom-bullet">Java</li>
                                <li className="custom-bullet">Git</li>
                                <li className="custom-bullet">OOP</li>
                            </ul>
                        </div>
                        <div className="right-b">
                            <ul>
                                <li className="custom-bullet">Python</li>
                                <li className="custom-bullet">Firebase</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
