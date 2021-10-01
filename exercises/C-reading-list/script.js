function readingList(books) {
  // Write your code here...
  const content = document.getElementById('content');
  const bookDetails = document.createElement("ul");
  content.appendChild(bookDetails)

  books.forEach(function(isRead){

    const bookList = document.createElement('li');
    if (isRead.alreadyRead === true){
      bookList.style.backgroundColor = 'green'
    }else{
      bookList.style.backgroundColor = 'red'
    }
    bookList.style.listStyleType = 'none';  
    bookList.style.width = 400;  
    bookDetails.appendChild(bookList)


    const bookTitle = document.createElement('p');
    bookTitle.innerHTML = isRead.title +' by '+ isRead.author;
    bookList.appendChild(bookTitle)

    const bookImg = document.createElement('img');
    if (isRead.title === "The Design of Everyday Things"){
      bookImg.src = 'https://images-eu.ssl-images-amazon.com/images/I/416Hql52NCL._SX342_SY445_QL70_ML2_.jpg';
    }else if(isRead.title === "The Most Human Human"){
      bookImg.src = 'https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg'
    }else{
      bookImg.src = 'https://images-na.ssl-images-amazon.com/images/I/51cUVaBWZzL._SX380_BO1,204,203,200_.jpg'
    }

    bookImg.style.width = 200;
    bookList.appendChild(bookImg)
  })
}

// Render the list of books on the page.
//  Each book should have a title, author and image 
 
//  and a background colour that is set dependent on whether we have read the book or not.


const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
  },
];

readingList(books);