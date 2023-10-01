import landingImage from '../assets/Undraw_Books.svg'
import {Link} from "react-router-dom";

function Landing() {
    return (
        <section id="landing">
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1>Morocco's best book library</h1>
                        <h2>Find your dream book from our <span className="purple">Library</span></h2>
                        <Link to="#features">
                            <button className="btn">Browse Books</button>
                        </Link>
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