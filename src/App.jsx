import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import PreLoader from './components/PreLoader';
import Sound from './components/ToggleSound';

function App() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timeoutId = setTimeout(() => setIsLoading(false), 1480);

		return () => {
			clearTimeout(timeoutId);
		};
	}, []);

	return (
		<div>
			{isLoading ? (
				<PreLoader />
			) : (
				<>
					<div className='screen'>
						<div className='screen-gradient'>
							<Navbar />
							<Hero />
							<Sound />
						</div>
					</div>
					<div className='vg-page page-about'>
						<About />
						<Skills />
					</div>
					<div className='vg-page page-about'>
						<Projects />
					</div>
				</>
			)}
		</div>
	);
}

export default App;
