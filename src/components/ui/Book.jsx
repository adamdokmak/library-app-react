import React, {useEffect, useRef, useState} from "react";
import Rating from "./Rating";
import Pricing from "./Pricing";
import {Link} from "react-router-dom";

function Book({book}) {
    const [img, setImg] = useState()

    const mountedRef = useRef(true)

    useEffect(() => {
        const image = new Image()
        image.src = book.url
        image.onload = () => {
            setTimeout( () => {
                mountedRef.current && setImg(image)
            }, 400)
        }
        return () => {
            mountedRef.current = false
        }
    })

    return (
        <div className="book">
            {!img ? (
                    <>
                        <div className="book__img--skeleton"></div>
                        <div className="skeleton book__title--skeleton"></div>
                        <div className="skeleton book__rating--skeleton"></div>
                        <div className="skeleton book__price--skeleton"></div>
                    </>
                ) :
                (
                    <>
                        <Link to={`/book/${book.id}`}>
                            <figure className="book__img--wrapper">
                                <img className="book__img" src={img.src} alt=""/>
                            </figure>
                        </Link>
                        <div className="book__title">
                            <Link to={`/book/${book.id}`} className="book__title--link">
                                {book.title}
                            </Link>
                        </div>
                        <Rating rating={book.rating}/>
                        <Pricing salePrice={book.salePrice} originalPrice={book.originalPrice}/>
                    </>
                )
            }
        </div>
    )
}

export default Book