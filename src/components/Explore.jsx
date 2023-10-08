import {Link} from "react-router-dom";

function Explore() {
    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'instant'
        });
    }
    return (
        <section id="explore">
            <div className="container">
                <div className="row row__column">
                    <h2>
                        Explore More <span className="purple">Books</span>
                    </h2>
                    <Link to="/books" onClick={handleScroll}>
                        <button className="btn">Explore Books</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Explore