import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Book from './ui/Book'
import {books} from "../data";
import React, {useState} from "react";

function Featured() {

    return (
        <section id="featured">
            <div className="contianer">
                <div className="row">
                    <h2 className="section__title">
                        Featured <span className="purple">Books</span>
                    </h2>
                    <div className="books">
                        {books
                            .filter((book) => book.rating === 5)
                            .slice(0, 4)
                            .map((book) =>
                                (
                                    <Book key={book.id} book={book}/>
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Featured