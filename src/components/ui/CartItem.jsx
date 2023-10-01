function CartItem({book, changeQuantity, removefromcart}) {
    return (
        <div className="cart__item">
            <div className="cart__book">
                <img src={book.url}
                     alt=""
                     className='cart__book--img'/>
                <div className="cart__book--info">
                                            <span className="cart__book--title">
                                                {book.title}
                                            </span>
                    <span className="cart__book--price">
                                                ${(book.salePrice || book.originalPrice)}
                                            </span>
                    <button className="cart__book--remove"
                            onClick={() => removefromcart(book)}>
                        Remove
                    </button>
                </div>
            </div>
            <div className="cart__quantity">
                <input value={book.quantity} type="number"
                       className='cart__input' min={0} max={99}
                       onChange={(event) => changeQuantity(book, event.target.value)
                       }/>
            </div>
            <div className="cart__total">
                ${((book.salePrice || book.originalPrice) * book.quantity).toFixed(2)}
            </div>
        </div>
    )
}
export default CartItem