import logo from './logo.svg';
import './index.css';
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Highlights from "./components/Highlights";
import Featured from "./components/Featured";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { faTags } from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faShoppingCart, faTimes, faBolt, faBookOpen, faTags)

function App() {
    return (
        <div>
            <Nav />
            <Landing />
            <Highlights />
            <Featured />
        </div>
    );
}

export default App;
