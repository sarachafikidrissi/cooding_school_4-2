import React, { useContext, useState } from "react";
import { Mycontext } from "../context";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function DashContent() {
  const { activeUser, books, setBooks, opendModal, setOpenModal } = useContext(Mycontext);
  const [bookName, setBookName] = useState('')
  const [bookAuthor, setBookAuthor] = useState('')
  const [bookCover, setBookCover] = useState('')
  const [bookDate, setBookDate] = useState('')

  


  const addBook = () => {
    const newTab = [...books]
    const bookData = {id: books.length, name: bookName, author: bookAuthor, cover: bookCover, date: bookDate}
    newTab.push(bookData)
    console.log(bookCover);
    
    setBooks(newTab)
    setBookName('')
    setBookAuthor('')
    setBookCover('')
    setBookDate('')
    setOpenModal(false)


  }
  return (
    <div className="w-[80vw] h-screen p-20 flex flex-col gap-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-[40px] font-semibold ">Discover</h1>
        <div className="flex items-center gap-x-4">
          <span className="font-bold">{activeUser.username}</span>
          <RiArrowDropDownLine size="30" />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between ">
          <span className="text-sm font-semibold">Books Listing</span>
          <button
            onClick={() => setOpenModal(!opendModal)}
            className="px-6 py-2 min-w-[120px] text-center text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring"
          >
            Add Book
          </button>

          {opendModal && (
            <>
            
            <div class="flex items-center justify-center min-h-screen absolute top-[4vh] left-[40vw]">
              <div class="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full">
                <h1 class="text-2xl font-semibold mb-4 text-gray-800">
                  Enter Book Information
                </h1>
                <div >
                  <div class="mb-4">
                    <label
                      for="cardholder-name"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Book Name
                    </label>
                    <input
                    onChange={(e) => setBookName(e.target.value)}
                    value={bookName}
                      type="text"
                      id="cardholder-name"
                      name="cardholder-name"
                      placeholder="John Doe"
                      class="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                      required
                    />
                  </div>

                  <div class="mb-4">
                    <label
                      for="card-number"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Book Author
                    </label>
                    <input
                    onChange={(e) => setBookAuthor(e.target.value)}
                    value={bookAuthor}
                      type="text"
                      id="card-number"
                      name="card-number"
                      placeholder="John Dow"
                      class="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                      required
                      maxlength="19"
                    />
                  </div>
                  <div class="mb-4">
                    <label
                      for="card-number"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Book Cover
                    </label>
                    <input
                    onChange={(e) => setBookCover(URL.createObjectURL(e.target.files[0]))}
     
                      type="file"
                      accept="image/*"
                      id="card-number"
                      name="card-number"
                      placeholder="John Dow"
                      class="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                      required
                      maxlength="19"
                    />
                  </div>

                  <div class="flex gap-4">
                    <div class="mb-4 w-1/2">
                      <label
                        for="expiry-date"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Publication Date
                      </label>
                      <input
                      onChange={(e) => setBookDate(e.target.value)}
                    value={bookDate}
                        type="text"
                        id="expiry-date"
                        name="expiry-date"
                        placeholder="MM/YY"
                        class="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                        required
                        maxlength="5"
                      />
                    </div>

                  </div>

                  <div>
                    <button
                    onClick={addBook}
                      class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            </>
          )}
        </div>

        {/* list of books */}
        <div className="flex flex-wrap gap-x-10 gap-y-4  pt-4">
          {books.length > 0 ? (
            books.map((book, index) => (
              <div key={index} className="flex flex-col gap-y-2">
                <img src={book.cover} alt="hello" width="200" height='400' />
                <Link to={`/book/${book.id}`} className="text-blue-900">
                  see details
                </Link>
              </div>
            ))
          ) : (
            <h1>there are no books</h1>
          )}
        </div>
      </div>
    </div>
  );
}
