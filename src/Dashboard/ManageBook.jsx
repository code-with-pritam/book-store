import { Checkbox, Table } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageBook = () => {

  const [allBooks, setAllBooks] = useState([]);
  const [selectedItems, setSelectedItems] = useState([])

  const getAllBooks = async () => {
    fetch('http://localhost:5000/all-books')
      .then(response => response.json())
      .then(book => {
        setAllBooks(book);
      })
  }


  useEffect(() => {
    getAllBooks()
  }, [])

  //delete a book  

  const handelDelete = (id) => {
    fetch(`http://localhost:5000/book/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        alert("Book deleted successfully")
        // setAllBooks(data)
        getAllBooks();
      })
  }
  //deletebook usign check boox

  const handelAllDelete = () => {
    const selectedIdList = selectedItems.join(",");
    fetch("http://localhost:5000/book/allbook", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({"ids":selectedItems.join(",")})
    })
      .then(response => response.json())
      .then(data => {
        alert("deleted selected Ids!!!")
        getAllBooks();
      })
  }
  
  
  const checkboxHandler = (event) => {
    let isSelected = event.target.checked;
		const eventId = event.target.value;
    let seletedItemList = selectedItems;
		if (isSelected){
			seletedItemList.push(eventId)
		}else{
      seletedItemList = seletedItemList.filter(item => item !== eventId)
		}
    setSelectedItems(seletedItemList)
  }

  return (
    <div className='px-4 my-12'>
      <h2 className="mb-8 text-3xl font-bold"> Manage Your Books </h2>
      {/* table for book data */}
      <Table className='lg:w-[1180px]'>
        <Table.Head>
          <Table.HeadCell> <Checkbox /> </Table.HeadCell>
          <Table.HeadCell>No</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Prices</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit Or Manage</span>
          </Table.HeadCell>
        </Table.Head>

        {
          allBooks.map((book, index) => {
            return (
              <Table.Body className="divide-y" key={book._id}>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <Checkbox value={book._id} onChange={checkboxHandler}  />
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {index + 1}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {book.bookTitle}
                  </Table.Cell>
                  <Table.Cell>{book.authorName}</Table.Cell>
                  <Table.Cell>{book.category}</Table.Cell>
                  <Table.Cell>$2999</Table.Cell>
                  <Table.Cell>
                    <Link to={`/admin/dashboard/edit-book/${book._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5">
                      Edit
                    </Link>
                    <button onClick={() => handelDelete(book._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>Delete</button>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            )
          })
        }
      </Table>
    </div>
  )
}

export default ManageBook
