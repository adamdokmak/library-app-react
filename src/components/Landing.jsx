import landingImage from '../assets/Undraw_Books.svg'
import {Link} from "react-router-dom";

function Landing() {
    return (
        <section id="landing">
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1>Fast and reliable experience</h1>
                        <h2>Find your dream book from our <span className="purple">Library</span></h2>
                        <a href="#featured">
                            <button className="btn">Browse Books</button>
                        </a>
                    </div>
                    <figure className='header__img--wrapper'>
                        <img src={landingImage} alt=""/>
                    </figure>
                </div>
            </header>
        </section>
    )
}

export default Landing;