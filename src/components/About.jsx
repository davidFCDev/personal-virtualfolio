import { useMediaQuery } from '@mui/material';
import './about.css';
import AboutButton from './AboutButton';
import AboutButtonMovil from './AboutButtonMovil';

const About = () => {
    const isMobile = useMediaQuery('(max-width: 600px)');

    return (
        <div id='about' className="about">
            <div className="about-container">
                <div className="img-container">
                    <div className="img-place">
                        <img src="/images/me-3.png" alt="Photo Profile" />
                    </div>
                </div>
                <div className="text-container">
                    <div className="caption flex flex-col gap-7">
                        <h1 className="section-ttl text-center"><b>&lt;h1&gt;&nbsp;</b>&nbsp;&nbsp;frontEnd<span className='text-secondary'>Dev&nbsp;&nbsp;</span><b>&nbsp;&lt;/h1&gt;</b></h1>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Después de muchos años en el sector de la hostelería, he decidido dar un cambio de 180º para dedicarme a lo que más me gusta: a la programación y al diseño web.</p>
                        <p>Soy una persona adaptable, perseverante y autoexigente, dispuesta siempre a dar lo mejor de mí para alcanzar mis objetivos y superar cualquier desafío que se me presente.</p>
                        <a href="https://www.linkedin.com/in/david-fernandez-comesa%C3%B1a/" >
                            {isMobile ? <AboutButtonMovil /> : <AboutButton />}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About