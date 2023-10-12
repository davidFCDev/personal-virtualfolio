import './projects.css';
import { FaChrome, FaGithub } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants/projects';
import Swiper from 'swiper';
import ImageSlider from './ImageSlider';

function confirmRedirect(url) {
	return function (event) {
		if (window.confirm(`¿Do you want to access ${url}?`)) {
			window.open(url, '_blank');
		} else {
			event.preventDefault();
		}
	};
}

const Projects = () => {
	const animationOptions = {
		opacity: 1,
		x: 0,
		transition: { duration: 1.2 },
	};

	return (
		<div className='vg-page page-portfolio' id='portfolio'>
			<div className='container-portfolio'>
				<h1 className='section-ttl text-center wow fadeInUp'>
					<b>&lt;h2&gt;&nbsp;</b>&nbsp;&nbsp;Projects&nbsp;&nbsp;
					<b>&lt;/h2&gt;&nbsp;</b>
				</h1>

				<ul className='list-portfolio grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
					{PROJECTS.map(project => {
						const [ref, inView] = useInView({
							threshold: 0.5,
							triggerOnce: true,
						});
						return (
							<motion.li
								initial={{ opacity: 0, x: 50 }}
								animate={inView ? animationOptions : {}}
								className='project'
								key={project.id}
								ref={ref}
							>
								<div className='img-project-container'>
									<ImageSlider project={project} />
								</div>
								<div className='text-project-container'>
									<div className='text-wrap'>
										<h2>{project.title}</h2>
										<p>{project.description}</p>
									</div>
									<div className='buttons-project'>
										<a onClick={confirmRedirect(`${project.web}`)}>
											<FaChrome className='hover:scale-110 hover:text-primary' />
										</a>
										<a onClick={confirmRedirect(`${project.github}`)}>
											<FaGithub className='hover:scale-110 hover:text-primary' />
										</a>
									</div>
								</div>
							</motion.li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Projects;
