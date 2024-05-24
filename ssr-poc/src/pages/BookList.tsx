import React, { useEffect, useState } from 'react';
import { getBooks } from '../api';
import '../index.css';

type Book = {
  id: string;
  title: string;
  url: string;
  detail: string;
  review: string;
  reviewer: string;
};

function BookList() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    getBooks(0)
      .then(setBooks)
      .catch(console.error);
  }, []);

  return (
    <div className="container mx-auto px-4">
      {books.map((book) => (
        <div key={book.id} className="max-w-full rounded overflow-hidden shadow-lg m-4 bg-gray-100 border border-white w-full">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{book.title}</div>
            <p className="text-gray-700 text-base">{book.review}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Reviewed by: {book.reviewer}</span>
          </div>
          <div className="px-6 pt-4 pb-2">
            <a href={book.url} className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{book.url}</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;