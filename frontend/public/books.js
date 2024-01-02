const getAllCourses = async () => {
  const url = "http://localhost:3001/api/books";
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      token: sessionStorage.getItem("token"),
    },
  });

  const books = await response.json();

  books.map((book, index) => {
    const bookHeader = document.createElement("h3");
    bookHeader.textContent = `Book ${index + 1}`;
    const bookUl = document.createElement("ul");
    Object.keys(book).forEach(function (key) {
      const bookLi = document.createElement("li");
      bookLi.textContent = book[key];
      bookUl.append(bookLi);
    });

    document.body.append(bookHeader, bookUl);
  });
};

getAllCourses();
