import "./Projects.css";
import cryptograph from "../../assets/cryptograph.png";
import renuct from "../../assets/renuct.jpg";

export const Projects = () => {
    const gotoRenuctLive = () => {
        window.open("https://social-media-react-1eae8.web.app");
    }
    const gotoRenuctGit = () => {
        window.open("https://github.com/geeth-chand/Renect");
    }
    const gotoCryptographLive = () => {
        window.open("https://geeth-chand.github.io/cryptograph/");
    }
    const gotoCryptographGit = () => {
        window.open("https://github.com/geeth-chand/cryptograph");
    }

    return (
        <div id="projects" className="projects">
            <div className="projects-title">
                <h1>Projects</h1>
            </div>
            <div className="projects-container">
                <div className="project-cards">
                    <div className="project-card">
                        <img src={cryptograph} alt='Cryptograph Project'/>
                        <div className="overlay">
                            <div className="overlay-content">
                                <div className="title-buttons-container">
                                    <p className="overlay-text">Cryptograph</p>
                                    <div className="button-group">
                                        <button onClick={gotoRenuctLive} className="overlay-button">Live Demo</button>
                                        <button onClick={gotoRenuctGit} className="overlay-button">GitHub</button>
                                    </div>
                                </div>
                                <p className="overlay-paragraph">
                                    This is a brief description of the Cryptograph project. It provides details about the project's objectives, features, and any other relevant information.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="project-card">
                        <img src={renuct} alt='Renuct Project'/>
                        <div className="overlay">
                            <div className="overlay-content">
                                <div className="title-buttons-container">
                                    <p className="overlay-text">Renuct</p>
                                    <div className="button-group">
                                        <button onClick={gotoCryptographLive} className="overlay-button">Live Demo</button>
                                        <button onClick={gotoCryptographGit} className="overlay-button">GitHub</button>
                                    </div>
                                </div>
                                <p className="overlay-paragraph">
                                    This is a brief description of the Renuct project. It provides details about the project's objectives, features, and any other relevant information.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
