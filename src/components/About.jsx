import { useMediaQuery } from '@mui/material';
import './about.css';
import AboutButton from './AboutButton';
import AboutButtonMovil from './AboutButtonMovil';

const About = () => {
	const isMobile = useMediaQuery('(max-width: 600px)');

	return (
		<div id='about' className='about'>
			<div className='about-container'>
				<div className='img-container'>
					<div className='img-place'>
						<img src='/images/me-3.png' alt='Photo Profile' />
					</div>
				</div>
				<div className='text-container'>
					<div className='caption flex flex-col gap-7'>
						<h1 className='section-ttl text-center'>
							<b>&lt;h1&gt;&nbsp;</b>&nbsp;&nbsp;fullStack
							<span className='text-secondary'>Dev&nbsp;&nbsp;</span>
							<b>&nbsp;&lt;/h1&gt;</b>
						</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am an adaptable, persevering
							and self-demanding person, always willing to give my best to
							achieve my goals and overcome any challenge that comes my way.
						</p>
						<p>
							Making apps and websites is my passion. If you need a clean work,
							with user-friendly interface and according with the new modern
							designs, I'm what you need.
						</p>
						<a href='https://www.linkedin.com/in/david-fernandez-comesa%C3%B1a/'>
							{isMobile ? <AboutButtonMovil /> : <AboutButton />}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
