import { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
// const navigate = useNavigate();
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";
import ManageBook from './ManageBook'; 

const EditBooks = () => {
  const { id } = useParams();
  const { bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL } = useLoaderData()
  console.log("Book Detels--", bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL);


  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiographic",
    "History",
    "self-Help",
    "Memoir",
    "Business",
    "Children books",
    "travel",
    "Rligious",
    "Art And Design",
  ];
  const [selectedCategories, setSelectedCategories] = useState(
    bookCategories[0]
  );

  const hendelChangeSelectedValues = (event) => {
    console.log(event.target.value);
    setSelectedCategories(event.target.value);
  };

  //hendel book submissions

  const hendelUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;
    // console.log(bookTitle +authorName + imageURL + category + bookDescription + bookPDFURL);

    const updateBookObj = {
      bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL
    }
    console.log("updateBookObj--------", updateBookObj)

    //update Book data

    const updatedData = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateBookObj)
    };

    fetch(`http://localhost:5000/book/${id}`, updatedData)
      .then(response => response.json())
      .then(bookDataArr => {
        alert("Book Update Successfully!!!")
        // form.reset();
        window.location.href = '/admin/dashboard/manage';
      })


  }


  return (
    <div className="px-4 mt-12">
      <h2 className="mb-8 text-3xl font-bold"> Update The Book Data</h2>

      <form onSubmit={hendelUpdate} className="flex lg:w-[1180px] flex-col gap-4">
        {/* frist row */}
        <div className="flex gap-8">
          {/* Book Name */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              type="text"
              placeholder="Book Name"
              required
              defaultValue={bookTitle}
            />
          </div>
          {/* authorName */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              type="text"
              placeholder="Author Name"
              required
              defaultValue={authorName}
            />
          </div>
        </div>
        {/* 2nd  row */}
        <div className="flex gap-8">
          {/* book image */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput
              id="imageURL"
              type="text"
              placeholder="Book Image URL"
              required
              defaultValue={imageURL}
            />
          </div>
          {/* cetegory */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <select
              id="inputState"
              name="category"
              className="w-full rounded"
              value={selectedCategories}
              onChange={hendelChangeSelectedValues}
            >
              {bookCategories.map((option, index) => {
                return <option key={index} value={option}>{option}</option>;
              })}
            </select>
          </div>
        </div>

        {/* bookDescription */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            name="bookDescription"
            placeholder="Write Your Book Discription..."
            required
            rows={6}
            className="w-full rounded"
            defaultValue={bookDescription}
          />
        </div>

        {/* book pdf link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          </div>
          <TextInput
            id="bookPDFURL"
            name="bookPDFURL"
            type="text"
            placeholder="Book PDF URL"
            required
            defaultValue={bookPDFURL}
          />
        </div>
        <Button type="submit" className="mt-5">
          Update Book
        </Button>
      </form>
    </div>
  );
}

export default EditBooks
