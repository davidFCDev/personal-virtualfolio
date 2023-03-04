import './hero.css';
import './capitalLetter.css'

const Hero = () => {
    return (
        <section className="vg-page page-home" id="home">
            <div className="caption">
                <div className='caption-text'>
                    <h3 className="text-[35px] sm:text-[20px] md:text-[35px] font-light">hola, soy</h3>
                    <h2 className="text-[60px] sm:text-[40px] md:text-[60px] font-bold"><span className='h1-cl'>D</span>avid</h2>
                    <h2 className="text-[60px] sm:text-[40px] md:text-[60px] font-bold"><span className='h1-cl'>F</span>ernández</h2>
                    <p className="tagline">Front End developer && code lover</p>
                </div>
            </div>
        </section>
    )
}

export default Hero