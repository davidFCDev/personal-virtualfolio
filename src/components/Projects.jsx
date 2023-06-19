import './projects.css';
import { FaChrome, FaGithub } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

function confirmRedirect(url) {
	return function (event) {
		if (window.confirm(`¿Deseas ir a ${url}?`)) {
			window.open(url, '_blank');
		} else {
			event.preventDefault();
		}
	};
}

const Projects = props => {
	const animationOptions = {
		opacity: 1,
		x: 0,
		transition: { duration: 1.2 },
	};

	const [ref1, inView1] = useInView({ threshold: 0.5, triggerOnce: true });
	const [ref2, inView2] = useInView({ threshold: 0.5, triggerOnce: true });
	const [ref3, inView3] = useInView({ threshold: 0.5, triggerOnce: true });
	const [ref4, inView4] = useInView({ threshold: 0.5, triggerOnce: true });
	const [ref5, inView5] = useInView({ threshold: 0.5, triggerOnce: true });
	const [ref6, inView6] = useInView({ threshold: 0.5, triggerOnce: true });
	const [ref7, inView7] = useInView({ threshold: 0.5, triggerOnce: true });
	const [ref8, inView8] = useInView({ threshold: 0.5, triggerOnce: true });
	const [ref9, inView9] = useInView({ threshold: 0.5, triggerOnce: true });

	return (
		<div className='vg-page page-portfolio' id='portfolio'>
			<div className='container-portfolio'>
				<h1 className='section-ttl text-center wow fadeInUp'>
					<b>&lt;h2&gt;&nbsp;</b>&nbsp;&nbsp;Proyectos&nbsp;&nbsp;
					<b>&lt;/h2&gt;&nbsp;</b>
				</h1>
				<ul className='list-portfolio grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
					<li className='project' ref={ref9}>
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={inView9 ? animationOptions : {}}
						>
							<div className='img-project-container'>
								<img src='/images/foro.webp' alt='img' />
							</div>
							<div className='text-project-container'>
								<div className='text-wrap'>
									<h2>Foro R&M React</h2>
									<p>Context, api, authentication, CRUD...</p>
								</div>
								<div className='buttons-project'>
									<a
										onClick={confirmRedirect(
											'https://fororickymorty.netlify.app/'
										)}
									>
										<FaChrome className='hover:scale-110 hover:text-primary' />
									</a>
									<a
										onClick={confirmRedirect(
											'https://github.com/davidFCDev/foro-reactjs'
										)}
									>
										<FaGithub className='hover:scale-110 hover:text-primary' />
									</a>
								</div>
							</div>
						</motion.div>
					</li>
					<li className='project' ref={ref1}>
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={inView1 ? animationOptions : {}}
						>
							<div className='img-project-container'>
								<img src='/images/puzzle.webp' alt='img' />
							</div>
							<div className='text-project-container'>
								<div className='text-wrap'>
									<h2>Página web React</h2>
									<p>Restaurante Puzzle Madriz</p>
								</div>
								<div className='buttons-project'>
									<a onClick={confirmRedirect('https://puzzlemadriz.com/')}>
										<FaChrome className='hover:scale-110 hover:text-primary' />
									</a>
									<a
										onClick={confirmRedirect(
											'https://github.com/davidFCDev/restaurant-react'
										)}
									>
										<FaGithub className='hover:scale-110 hover:text-primary' />
									</a>
								</div>
							</div>
						</motion.div>
					</li>
					<li className='project' ref={ref2}>
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={inView2 ? animationOptions : {}}
						>
							<div className='img-project-container'>
								<img src='/images/prueba-tecnica.webp' alt='img' />
							</div>
							<div className='text-project-container'>
								<div className='text-wrap'>
									<h2>Prueba técnica React</h2>
									<p>React-router, redux y api theMovieDB</p>
								</div>
								<div className='buttons-project'>
									<a
										onClick={confirmRedirect(
											'https://prueba-reactjs.netlify.app/'
										)}
									>
										<FaChrome className='hover:scale-110 hover:text-primary' />
									</a>
									<a
										onClick={confirmRedirect(
											'https://github.com/davidFCDev/Prueba-tecnica'
										)}
									>
										<FaGithub className='hover:scale-110 hover:text-primary' />
									</a>
								</div>
							</div>
						</motion.div>
					</li>
					<li className='project' ref={ref3}>
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={inView3 ? animationOptions : {}}
						>
							<div className='img-project-container'>
								<img src='/images/tenflix.webp' alt='tenflix' />
							</div>
							<div className='text-project-container'>
								<div className='text-wrap'>
									<h2>Proyecto React</h2>
									<p>Réplica de Netflix, con auth y db de Firebase</p>
								</div>
								<div className='buttons-project'>
									<a
										onClick={confirmRedirect(
											'https://tenflix-react.netlify.app/'
										)}
									>
										<FaChrome className='hover:scale-110 hover:text-primary' />
									</a>
									<a
										onClick={confirmRedirect(
											'https://github.com/davidFCDev/tenflix-api-react'
										)}
									>
										<FaGithub className='hover:scale-110 hover:text-primary' />
									</a>
								</div>
							</div>
						</motion.div>
					</li>
					<li className='project' ref={ref4}>
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={inView4 ? animationOptions : {}}
						>
							<div className='img-project-container'>
								<img src='/images/ps5.webp' alt='ps5' />
							</div>
							<div className='text-project-container'>
								<div className='text-wrap'>
									<h2>Proyecto React</h2>
									<p>Aplicación simulando el menú de PS5</p>
								</div>
								<div className='buttons-project'>
									<a onClick={confirmRedirect('https://menu-ps5.netlify.app/')}>
										<FaChrome className='hover:scale-110 hover:text-primary' />
									</a>
									<a
										onClick={confirmRedirect(
											'https://github.com/davidFCDev/menu-ps5-react'
										)}
									>
										<FaGithub className='hover:scale-110 hover:text-primary' />
									</a>
								</div>
							</div>
						</motion.div>
					</li>
					<li className='project' ref={ref5}>
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={inView5 ? animationOptions : {}}
						>
							<div className='img-project-container'>
								<img src='/images/deportiva.webp' alt='deportiva' />
							</div>
							<div className='text-project-container'>
								<div className='text-wrap'>
									<h2>Proyecto React</h2>
									<p>Página web deportiva para pleno uso</p>
								</div>
								<div className='buttons-project'>
									<a
										onClick={confirmRedirect('https://sport-web.netlify.app/')}
									>
										<FaChrome className='hover:scale-110 hover:text-primary' />
									</a>
									<a
										onClick={confirmRedirect(
											'https://github.com/davidFCDev/sport-web-react'
										)}
									>
										<FaGithub className='hover:scale-110 hover:text-primary' />
									</a>
								</div>
							</div>
						</motion.div>
					</li>
					<li className='project' ref={ref6}>
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={inView6 ? animationOptions : {}}
						>
							<div className='img-project-container'>
								<img src='/images/ecommerce.webp' alt='img' />
							</div>
							<div className='text-project-container'>
								<div className='text-wrap'>
									<h2>eCommerce con React</h2>
									<p>Aplicación de compras y gestor de usuarios</p>
								</div>
								<div className='buttons-project'>
									<a
										onClick={confirmRedirect(
											'https://fir-shopping-8e43d.firebaseapp.com/'
										)}
									>
										<FaChrome className='hover:scale-110 hover:text-primary' />
									</a>
									<a
										onClick={confirmRedirect(
											'https://github.com/davidFCDev/app-react-firebase'
										)}
									>
										<FaGithub className='hover:scale-110 hover:text-primary' />
									</a>
								</div>
							</div>
						</motion.div>
					</li>
					<li className='project' ref={ref7}>
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={inView7 ? animationOptions : {}}
						>
							<div className='img-project-container'>
								<img src='/images/minigame.webp' alt='img' />
							</div>
							<div className='text-project-container'>
								<div className='text-wrap'>
									<h2>Proyecto javascript</h2>
									<p>Minijuego básico de emparejados</p>
								</div>
								<div className='buttons-project'>
									<a
										onClick={confirmRedirect('https://minigame-js.netlify.app')}
									>
										<FaChrome className='hover:scale-110 hover:text-primary' />
									</a>
									<a
										onClick={confirmRedirect(
											'https://github.com/davidFCDev/mini-game-javascript'
										)}
									>
										<FaGithub className='hover:scale-110 hover:text-primary' />
									</a>
								</div>
							</div>
						</motion.div>
					</li>
					<li className='project' ref={ref8}>
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={inView8 ? animationOptions : {}}
						>
							<div className='img-project-container'>
								<img src='/images/landing.webp' alt='img' />
							</div>
							<div className='text-project-container'>
								<div className='text-wrap'>
									<h2>Landing page React</h2>
									<p>Landing page con React y TailwindCss</p>
								</div>
								<div className='buttons-project'>
									<a
										onClick={confirmRedirect(
											'https://modern-landingpage-react.netlify.app'
										)}
									>
										<FaChrome className='hover:scale-110 hover:text-primary' />
									</a>
									<a
										onClick={confirmRedirect(
											'https://github.com/davidFCDev/modern-landing-page'
										)}
									>
										<FaGithub className='hover:scale-110 hover:text-primary' />
									</a>
								</div>
							</div>
						</motion.div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Projects;
