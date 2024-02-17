import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/all-books")
            .then(response => response.json())
            .then(bookArray => setBooks(bookArray.splice(0, 8)))
    }, [1])
    return (
        <div>
            <BookCards books={books} headline="Other Book " />
        </div>
    )
}

export default OtherBooks
