import './about.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-container-resume">
                <div className="about-container-title-main">
                    <h3>ABOUT ME</h3>
                </div>
                <div className="about-container-education">
                    {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
                    <h4>EDUCATION</h4>
                    <div className="about-container-education-block">
                        <p>Software Technique - Institude IDAT</p>
                        <p>Student of the software development career in one of the technological institutes of Lima-Peru.
                            In my student days, I was able to obtain the following certificates awarded by the institution: </p>
                    </div>
                </div>
                <div className="about-container-experience">
                    {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
                    <h4>EXPERIENCE</h4>
                    <ul className="about-container-experience-block-first-company">
                        <li>Software Developer Intern - EMPRESA #1</li>
                        <p>Student of the software development career in one of the technological institutes of
                            Lima-Peru.
                            In my student days, I was able to obtain the following certificates awarded by the
                            institution: </p>
                    </ul>
                    <ul className="about-container-experience-block-second-company">
                        <li>Software Developer Intern - EMPRESA #2</li>
                        <p>
                            Student of the software development career in one of the technological institutes of Lima-Peru.
                            In my student days, I was able to obtain the following certificates awarded by the institution:
                        </p>
                    </ul>
                </div>
            </div>
            <div className="about-container-picture">
                <img src="../mainfoto.png" alt="about-me"/>
                <span>“I do everything with Java, just saying..”</span>
            </div>
        </div>

    )
        ;
}

export default About;