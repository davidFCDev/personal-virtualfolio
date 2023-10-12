import React, { useState } from 'react';
import './toggleSound.css';
import { audioList } from '../constants/audioList';
import { MdMusicNote } from 'react-icons/md';

const ToggleSound = () => {
	const [soundEnabled, setSoundEnabled] = useState(false);
	const [currentAudio, setCurrentAudio] = useState(null);
	const [currentAudioTitle, setCurrentAudioTitle] = useState(null);
	const [showTitle, setShowTitle] = useState(false);
	const [titleColor, setTitleColor] = useState('white');
	const [currentIndex, setCurrentIndex] = useState(null);

	const handleSoundToggle = () => {
		if (soundEnabled) {
			setSoundEnabled(!soundEnabled);
			setTimeout(() => {
				setTitleColor('transparent');
			}, 1000);
		} else {
			setSoundEnabled(!soundEnabled);
			const randomAudio =
				audioList[Math.floor(Math.random() * audioList.length)];
			setCurrentAudio(randomAudio.audio);
			setCurrentAudioTitle(randomAudio.title);
			setShowTitle(true);
			setTitleColor('white');
			setTimeout(() => {
				setTitleColor('transparent');
			}, 3000);
		}
	};

	const handleMusicNoteClick = () => {
		const randomAudio = audioList[Math.floor(Math.random() * audioList.length)];
		setCurrentAudio(randomAudio.audio);
		setCurrentAudioTitle(randomAudio.title);
		setShowTitle(true);
		setTitleColor('white');
		setTimeout(() => {
			setTitleColor('transparent');
		}, 4000);
	};

	const handleAudioEnded = () => {
		const randomAudio = audioList[Math.floor(Math.random() * audioList.length)];
		setCurrentAudio(randomAudio.audio);
		setCurrentAudioTitle(randomAudio.title);
		setCurrentIndex(randomAudio.index);
		setShowTitle(true);
		setTitleColor('white');
		setTimeout(() => {
			setTitleColor('transparent');
		}, 4000);
	};

	return (
		<div className='fixed z-20 bottom-4 right-4 flex flex-row-reverse text-white gap-1'>
			<label className='switch'>
				<input type='checkbox' onChange={handleSoundToggle} />
				<span className='slider'></span>
			</label>
			<button
				onClick={handleMusicNoteClick}
				className='flex flex-row-reverse items-center gap-3 relative'
			>
				<MdMusicNote className='hover:scale-110 text-2xl' />
				{showTitle && (
					<p
						className={`text-[15px] italic ${
							showTitle ? 'color-transition' : ''
						}`}
						style={{ color: titleColor }}
					>
						"{currentAudioTitle}"
					</p>
				)}
			</button>
			{soundEnabled && currentAudio && (
				<audio autoPlay src={currentAudio} onEnded={handleAudioEnded} />
			)}
		</div>
	);
};

export default ToggleSound;
