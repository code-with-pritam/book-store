import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const BestSellerBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/all-books")
        .then(response=> response.json())
        .then(bookArray=> setBooks(bookArray.splice(0,6)))
    },[1])
    return (
        <div>
            <BookCards books={books} headline="Best Seller Books"/>
        </div>
    )
}

export default BestSellerBooks;
