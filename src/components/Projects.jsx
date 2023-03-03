import './projects.css';
import { FaChrome, FaGithub } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

function confirmRedirect(url) {
    return function(event) {
        event.preventDefault();
        if (window.confirm(`¿Deseas ir a ${url}?`)) {
            window.location.href = url;
        }
    }
}

const Projects = (props) => {

    const animationOptions = {
        opacity: 1,
        x: 0,
        transition: { duration: 1.2 }
    };

    const [ref1, inView1] = useInView({ threshold: 0.5, triggerOnce: true });
    const [ref2, inView2] = useInView({ threshold: 0.5, triggerOnce: true });
    const [ref3, inView3] = useInView({ threshold: 0.5, triggerOnce: true });
    const [ref4, inView4] = useInView({ threshold: 0.5, triggerOnce: true });
    const [ref5, inView5] = useInView({ threshold: 0.5, triggerOnce: true });
    const [ref6, inView6] = useInView({ threshold: 0.5, triggerOnce: true });

    return (
        <div className="vg-page page-portfolio" id="portfolio">
            <div className="container-portfolio">
                <h1 className="section-ttl text-center wow fadeInUp"><b>&lt;h2&gt;&nbsp;</b>&nbsp;&nbsp;Proyectos&nbsp;&nbsp;<b>&lt;/h2&gt;&nbsp;</b></h1>
                    <ul className='list-portfolio grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                        <li className='project' ref={ref1}>
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            animate={inView1 ? animationOptions : {}}>
                            <div className='img-project-container'>
                                <img src='/images/proyecto-2.png' alt='img' />
                            </div>
                            <div className='text-project-container'>
                                <div className='text-wrap'>
                                    <h2>Proyecto ReactJS</h2>
                                    <p>Réplica de Netflix, con auth y db de Firebase</p>
                                </div>
                                <div className='buttons-project'>
                                    <a href="https://tenflix-react.netlify.app/" onClick={confirmRedirect("https://tenflix-react.netlify.app/")}><FaChrome className='hover:scale-110 hover:text-primary'/></a>
                                    <a href="https://github.com/davidFCDev/tenflix-api-react" onClick={confirmRedirect("https://github.com/davidFCDev/tenflix-api-react")}><FaGithub className='hover:scale-110 hover:text-primary'/></a>
                                </div>
                            </div>
                        </motion.div>
                        </li>
                        <li className='project' ref={ref2}>
                            <motion.div 
                                initial={{ opacity: 0, x:50 }}
                                animate={inView2 ? animationOptions : {}}>
                                <div className='img-project-container'>
                                    <img src='/images/proyecto-3.jpg' alt='img' />
                                </div>
                                <div className='text-project-container'>
                                    <div className='text-wrap'>
                                        <h2>Proyecto ReactJS</h2>
                                        <p>Aplicación simulando el menú de PS5</p>
                                    </div>
                                    <div className='buttons-project'>
                                        <a href="https://menu-ps5.netlify.app/" onClick={confirmRedirect("https://menu-ps5.netlify.app/")}><FaChrome className='hover:scale-110 hover:text-primary'/></a>
                                        <a href="https://github.com/davidFCDev/menu-ps5-react" onClick={confirmRedirect("https://github.com/davidFCDev/menu-ps5-react")}><FaGithub className='hover:scale-110 hover:text-primary'/></a>
                                    </div>
                                </div>
                            </motion.div>
                        </li>
                        <li className='project' ref={ref3}>
                            <motion.div 
                                initial={{ opacity: 0, x:50 }}
                                animate={inView3 ? animationOptions : {}}>
                                <div className='img-project-container'>
                                    <img src='/images/proyecto-1.png' alt='img' />
                                </div>
                                <div className='text-project-container'>
                                    <div className='text-wrap'>
                                        <h2>Proyecto ReactJS</h2>
                                        <p>Página web deportiva para pleno uso</p>
                                    </div>
                                    <div className='buttons-project'>
                                        <a href="https://sport-web.netlify.app/" onClick={confirmRedirect("https://sport-web.netlify.app/")}><FaChrome className='hover:scale-110 hover:text-primary'/></a>
                                        <a href="https://github.com/davidFCDev/sport-web-react" onClick={confirmRedirect("https://github.com/davidFCDev/sport-web-react")}><FaGithub className='hover:scale-110 hover:text-primary'/></a>
                                    </div>
                                </div>
                            </motion.div>
                        </li>
                        <li className='project' ref={ref4}>
                            <motion.div 
                                initial={{ opacity: 0, x:50 }}
                                animate={inView4 ? animationOptions : {}}>
                                <div className='img-project-container'>
                                    <img src='/images/proyecto-5.jpg' alt='img' />
                                </div>
                                <div className='text-project-container'>
                                    <div className='text-wrap'>
                                        <h2>eCommerce con ReactJS</h2>
                                        <p>Aplicación de compras y gestor de usuarios</p>
                                    </div>
                                    <div className='buttons-project'>
                                        <a href="https://fir-shopping-8e43d.firebaseapp.com/" onClick={confirmRedirect("https://fir-shopping-8e43d.firebaseapp.com/")}><FaChrome className='hover:scale-110 hover:text-primary'/></a>
                                        <a href="https://github.com/davidFCDev/app-react-firebase" onClick={confirmRedirect("https://github.com/davidFCDev/app-react-firebase")}><FaGithub className='hover:scale-110 hover:text-primary'/></a>
                                    </div>
                                </div>
                            </motion.div>
                        </li>
                        <li className='project' ref={ref5}>
                            <motion.div 
                                initial={{ opacity: 0, x:50 }}
                                animate={inView5 ? animationOptions : {}}>
                                <div className='img-project-container'>
                                    <img src='/images/proyecto-6.jpg' alt='img' />
                                </div>
                                <div className='text-project-container'>
                                    <div className='text-wrap'>
                                        <h2>Proyecto javascript</h2>
                                        <p>Minijuego básico de emparejados</p>
                                    </div>
                                    <div className='buttons-project'>
                                        <a href="https://minigame-js.netlify.app" onClick={confirmRedirect("https://minigame-js.netlify.app")}><FaChrome className='hover:scale-110 hover:text-primary'/></a>
                                        <a href="https://github.com/davidFCDev/mini-game-javascript" onClick={confirmRedirect("https://github.com/davidFCDev/mini-game-javascript")}><FaGithub className='hover:scale-110 hover:text-primary'/></a>
                                    </div>
                                </div>
                            </motion.div>
                        </li>
                        <li className='project' ref={ref6}>
                            <motion.div 
                                initial={{ opacity: 0, x:50 }}
                                animate={inView6 ? animationOptions : {}}>
                                <div className='img-project-container'>
                                    <img src='/images/proyecto-4.jpg' alt='img' />
                                </div>
                                <div className='text-project-container'>
                                    <div className='text-wrap'>
                                        <h2>Landing page ReactJS</h2>
                                        <p>Landing page con React y TailwindCss</p>
                                    </div>
                                    <div className='buttons-project'>
                                        <a href="https://modern-landingpage-react.netlify.app" onClick={confirmRedirect("https://modern-landingpage-react.netlify.app")}><FaChrome className='hover:scale-110 hover:text-primary'/></a>
                                        <a href="https://github.com/davidFCDev/modern-landing-page" onClick={confirmRedirect("https://github.com/davidFCDev/modern-landing-page")}><FaGithub className='hover:scale-110 hover:text-primary'/></a>
                                    </div>
                                </div>
                            </motion.div>
                        </li>
                    </ul>
            </div>
        </div>
    )
}

export default Projects