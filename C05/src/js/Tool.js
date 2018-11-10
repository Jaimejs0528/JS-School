const Tools = () => {
  // Return a Json Object from our Computer
  const getJson = async (path, fileName) => {
    const response = await fetch(`${path}/${fileName}`)
      .then(responseJson => responseJson.json());
    return response;
  };

  const addBookToJson = async (isbn) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;
    const resBook = fetch(url);
    const currentBooks = getJson('/src/js/json', 'books.json');
    const responses = await Promise.all([resBook, currentBooks]);
    const jsonBook = await responses[0].json();
    let allBooks = await responses[1].books;
    const bookInfo = jsonBook.items[0].volumeInfo;
    const {
      title,
      authors,
      averageRating: rating,
      description,
      imageLinks,
      pageCount: numPages,
      publishedDate,
    } = bookInfo;
    const year = publishedDate.split('-')[0];
    const author = authors[0];
    const image = imageLinks.thumbnail;
    const newBook = {
      title,
      author,
      year,
      description,
      numPages,
      rating,
      image,
    };
    allBooks.push(newBook);
    allBooks = allBooks.map(value => JSON.stringify(value));
    const joinBooks = allBooks.join();
    const output = `{"books":[${joinBooks}]}`;
    const hiddenElement = document.createElement('a');
    hiddenElement.href = `data:attachment/text,${encodeURI(output)}`;
    hiddenElement.target = '_blank';
    hiddenElement.rel = 'noopener';
    hiddenElement.download = 'books.json';
    hiddenElement.click();
  };

  return {
    getJson,
    addBookToJson,
  };
};
const usoExterno = Tools();
// export default Tools;
