import logo from './logo.svg';
import './index.css';
import Nav from "./components/Nav";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faShoppingCart, faTimes)

function App() {
    return (
        <div>
            <Nav />
        </div>
    );
}

export default App;
