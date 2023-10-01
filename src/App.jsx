import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Books from "./pages/Books";
import {books} from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import React, {useState} from "react";

function App() {
    const [cart, setCart] = useState([]);

    function addToCart(book) {
        setCart([...cart, {...book, quantity: 1}])
    }

    function removeFromCart(book) {
        setCart(cart.filter(item => book.id !== item.id))
    }

    function numberOfItems() {
        let counter = 0;
        cart.forEach(item => counter += item.quantity)
        return counter
    }

    function changeQuantity(book, quantity) {
        setCart(cart.map((item) =>
            item.id === book.id ?
                {
                    ...item,
                    quantity: +quantity,
                }
                : item
        ))
        if (+quantity === 0) {
                removeFromCart(book)
        }
    }

    return (
        <div>
            <Router>
                <Nav numberOfItems={numberOfItems()}/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/books' element={<Books books={books}/>}/>
                    <Route path='/book/:id' element={<BookInfo cart={cart}
                                                               addtocart={addToCart}
                                                               books={books}/>}
                    />
                    <Route path='/cart' element={<Cart
                        removefromcart={removeFromCart}
                        changeQuantity={changeQuantity}
                        cart={cart}
                        books={books}/>}
                    />
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
