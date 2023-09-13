import './skills.css';
import { icons } from '/src/constants/index.js';
import { TbPoint } from 'react-icons/tb';
import { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Skills = () => {
	const [isHtmlImage, setIsHtmlImage] = useState(false);
	const imgRef = useRef(null);

	const animationOptions = {
		opacity: 1,
		x: 0,
		transition: { duration: 1.2 },
	};

	const [ref0, inView0] = useInView({ threshold: 0.7, triggerOnce: true });
	const [ref1, inView1] = useInView({ threshold: 0.7, triggerOnce: true });
	const [ref2, inView2] = useInView({ threshold: 0.7, triggerOnce: true });
	const [ref3, inView3] = useInView({ threshold: 0.7, triggerOnce: true });
	const [ref4, inView4] = useInView({ threshold: 0.7, triggerOnce: true });
	const [ref5, inView5] = useInView({ threshold: 0.7, triggerOnce: true });

	useEffect(() => {
		const interval = setInterval(() => {
			setIsHtmlImage(prevIsHtmlImage => !prevIsHtmlImage);
		}, 2000);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		imgRef.current.classList.add('fade-in');

		const handleTransitionEnd = () => {
			imgRef.current.classList.remove('fade-in');
		};

		imgRef.current.addEventListener('transitionend', handleTransitionEnd);

		return () =>
			imgRef.current.removeEventListener('transitionend', handleTransitionEnd);
	}, [isHtmlImage]);

	return (
		<section id='skills' className='skills'>
			<div className='skills-container'>
				<h1 className='section-ttl text-center '>
					<b>&lt;h2&gt;&nbsp;</b>&nbsp;&nbsp;Tecnologías&nbsp;&nbsp;
					<b>&lt;/h2&gt;&nbsp;</b>
				</h1>
				<ul className='skills-list grid grid-cols-3 gap-8 sm:gap-2 md:gap-12'>
					{icons.map((icon, i) => (
						<li key={i}>
							<img src={icon} alt='logo' />
						</li>
					))}
				</ul>
			</div>
			<div className='studies-container'>
				<h1 className='section-ttl text-center '>
					<b>&lt;h2&gt;&nbsp;</b>&nbsp;&nbsp;Estudios&nbsp;&nbsp;
					<b>&lt;/h2&gt;&nbsp;</b>
				</h1>
				<ul className='studies-list'>
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={inView0 ? animationOptions : {}}
					>
						<li className='card' ref={ref0}>
							<img
								src='/images/iconoAngular.png'
								alt='typescript'
								className='img'
							/>
							<div className='textBox'>
								<div className='textContent'>
									<p className='h1'>Actualmente:</p>
									<span className='span flex flex-row-reverse items-center'>
										live
										<TbPoint className='text-xl text-green-400' />
									</span>
								</div>
								<p className='p'>Angular</p>
							</div>
						</li>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={inView1 ? animationOptions : {}}
					>
						<li className='card' ref={ref1}>
							<img
								src='/images/iconoTypescript.png'
								alt='typescript'
								className='img'
							/>
							<div className='textBox'>
								<div className='textContent'>
									<p className='h1'>Curso Typescript</p>
									<span className='span'>8 month ago</span>
								</div>
								<p className='p'>Importancia tipado de datos</p>
							</div>
						</li>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={inView2 ? animationOptions : {}}
					>
						<li className='card' ref={ref2}>
							<img src='/images/iconoReact.png' alt='react' className='img' />
							<div className='textBox'>
								<div className='textContent'>
									<p className='h1'>Curso React</p>
									<span className='span'>1 year ago</span>
								</div>
								<p className='p'>Estados, hooks, Firebase, jest...</p>
							</div>
						</li>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={inView3 ? animationOptions : {}}
					>
						<li className='card' ref={ref3}>
							<img src='/images/iconoJavascript.png' alt='js' className='img' />
							<div className='textBox'>
								<div className='textContent'>
									<p className='h1'>Curso Javascript</p>
									<span className='span'>14 month ago</span>
								</div>
								<p className='p'>Eventos, persistencia de datos...</p>
							</div>
						</li>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={inView4 ? animationOptions : {}}
					>
						<li id='css' className='card' ref={ref4}>
							<img
								ref={imgRef}
								src={
									isHtmlImage ? '/images/iconoHtml.png' : '/images/iconoCss.png'
								}
								alt='html'
								className='img'
							/>
							<div className='textBox'>
								<div className='textContent'>
									<p className='h1'>Curso HTML/CSS</p>
									<span className='span'>16 month ago</span>
								</div>
								<p className='p'>Bootstrap, sass, Tailwind, animaciones.</p>
							</div>
						</li>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={inView5 ? animationOptions : {}}
					>
						<li className='card' ref={ref5}>
							<img src='/images/iconoCiclo.png' alt='angular' className='img' />
							<div className='textBox'>
								<div className='textContent'>
									<p className='h1 text-secondary'>Ciclo de DAW</p>
									<span className='span'>8 years ago</span>
								</div>
								<p className='p'>IES Teis, Vigo, Galicia</p>
							</div>
						</li>
					</motion.div>
				</ul>
			</div>
		</section>
	);
};

export default Skills;
