const Tools = () => {
  // Return a Json Object from our Computer
  const getJson = async (path, fileName) => {
    const response = await fetch(`${path}/${fileName}`)
      .then(responseJson => responseJson.json());
    return response;
  };

  const addBookToJson = async (isbn) => {
    const resBook = fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);
    const currentBooks = getJson('/src/js/json', 'book1.json');
    const responses = await Promise.all([resBook, currentBooks]);
    const jsonBook = await responses[0].json();
    console.log(responses[1].books);
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
    console.log(title);
    console.log(author);
    console.log(rating);
    console.log(description);
    console.log(image);
    console.log(numPages);
    console.log(year);
    const hiddenElement = document.createElement('a');
    hiddenElement.href = `data:attachment/json,${encodeURI(JSON.stringify(bookInfo))}`;
    hiddenElement.target = '_blank';
    hiddenElement.download = 'myFile.json';
    hiddenElement.click();
  };


  return {
    getJson,
    addBookToJson,
  };
};
const usoExterno = Tools();
// export default Tools;
