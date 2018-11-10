// import Tools from './src/js/Tool';
// import './styles/Css/main.css';

const appBookShelf = () => {
  // Return a Json Object from our Computer
  const getJson = async (path, fileName) => {
    const response = await fetch(`${path}/${fileName}`)
      .then(responseJson => responseJson.json());
    return response;
  };

  const createOptionsBook = (divClone) => {
    const arrayTemp = [];
    const container = divClone;
    container.className = 'book-options';
    const optionLeft = document.createElement('div');
    const iconOption = document.createElement('i');
    optionLeft.appendChild(iconOption);
    optionLeft.classList.add('circle-img');
    arrayTemp.push([optionLeft.querySelector('i'), 'left']);
    const optionMid = optionLeft.cloneNode(true);
    optionMid.classList.add('mid-child');
    optionLeft.classList.add('child');
    arrayTemp.push([optionMid.querySelector('i'), 'mid']);
    const optionRight = optionLeft.cloneNode(true);
    optionLeft.classList.add('left');
    optionRight.classList.add('right');
    arrayTemp.push([optionRight.querySelector('i'), 'right']);
    arrayTemp.map((value) => {
      if (value[1] === 'mid') {
        value[0].classList.add('fas');
        value[0].classList.add('fa-book-open');
      } else {
        value[0].classList.add('far');
        if (value[1] === 'left') {
          value[0].classList.add('fa-heart');
        } else {
          value[0].classList.add('fa-bookmark');
        }
      }
      return undefined;
    });
    container.appendChild(optionLeft);
    container.appendChild(optionMid);
    container.appendChild(optionRight);
    return container;
  };

  const createRatingStars = (divClone) => {
    const ratingStars = divClone;
    ratingStars.className = 'rating';
    const IconStar = document.createElement('i');
    IconStar.classList.add('fas');
    IconStar.classList.add('fa-star');
    for (let i = 1; i < 5; i += 1) {
      const star = IconStar.cloneNode(true);
      ratingStars.appendChild(star);
    }
    ratingStars.appendChild(IconStar);
    return ratingStars;
  };

  const createBook = () => {
    // Book Container
    const BookContainer = document.createElement('div');
    // Overlay Image Container
    const overlayBookImg = BookContainer.cloneNode();
    // Contained in overlayBookImg
    const bookImage = document.createElement('img');
    // Overlay Image
    const overlayImage = BookContainer.cloneNode();
    // Contained in overlayImage
    const bookOptions = createOptionsBook(BookContainer.cloneNode());
    const spanRate = document.createElement('span');
    const ratingStarsOverImg = createRatingStars(BookContainer.cloneNode());
    // Contained in BookContainer
    const spanTitle = spanRate.cloneNode();
    spanTitle.classList.add('book-title', 'hidde-overflow-text');
    const spanAuthor = spanRate.cloneNode();
    spanAuthor.classList.add('author', 'hidde-overflow-text');
    const ratingBook = createRatingStars(BookContainer.cloneNode());
    // Adding atributes
    BookContainer.classList.add('book');
    overlayBookImg.classList.add('overlay-container', 'img-container');
    bookImage.src = '/src/images/books/book-1.png';
    bookImage.alt = 'bookImage';
    // Thats no the correct ratio for de image, but yes for pixel perfect
    bookImage.setAttribute('height', '250px');
    bookImage.setAttribute('width', '176px');
    // Append childs to Overlay Image
    overlayImage.classList.add('overlay-img');
    overlayImage.appendChild(bookOptions);
    spanRate.innerText = 'Rate this book';
    overlayImage.appendChild(spanRate);
    overlayImage.appendChild(ratingStarsOverImg);
    // Appeng childs to Overlay Image Container
    overlayBookImg.appendChild(bookImage);
    overlayBookImg.appendChild(overlayImage);
    // Append childs to Book Container
    BookContainer.appendChild(overlayBookImg);
    BookContainer.appendChild(spanTitle);
    BookContainer.appendChild(spanAuthor);
    BookContainer.appendChild(ratingBook);
    return BookContainer;
  };

  const createOverlaySummaryContainer = () => {
    // Summary container
    const summaryContainer = document.createElement('div');
    const arrow = summaryContainer.cloneNode(); // arrow indicator
    const articleSummary = document.createElement('article');
    const headerSummary = document.createElement('header');
    // Into headerSummary
    const divContainer = summaryContainer.cloneNode();
    // Into divContainer
    const titleHeader = document.createElement('h1');
    const spanYear = document.createElement('span');
    const author = document.createElement('h2');
    author.innerHTML = 'Novel by <span>Anthony Doerr</span>';
    const numbPages = document.createElement('p');
    // Append to divContainer
    divContainer.appendChild(titleHeader);
    divContainer.appendChild(spanYear);
    // Append to Header
    headerSummary.appendChild(divContainer);
    headerSummary.appendChild(author);
    headerSummary.appendChild(numbPages);
    headerSummary.className = 'header-summary';
    // Book paragraph
    const bookParagraph = summaryContainer.cloneNode();
    // Into bookParagraph
    const spanSubTitle = spanYear.cloneNode();
    const paragraph = numbPages.cloneNode();
    bookParagraph.className = 'book-paragraph';
    spanSubTitle.innerText = 'Summary';
    paragraph.className = 'summary-paragraph';
    bookParagraph.appendChild(spanSubTitle);
    bookParagraph.appendChild(paragraph);
    // Book summary rating
    const ratingContainer = summaryContainer.cloneNode();
    // Into ratingContainer
    const spanRating = spanYear.cloneNode();
    spanRating.innerText = 'Rating';
    const summaryStars = createRatingStars(summaryContainer.cloneNode());
    // Append to ratingContainer
    ratingContainer.className = 'book-summary-rating';
    ratingContainer.appendChild(spanRating);
    ratingContainer.appendChild(summaryStars);
    // Recomended by
    summaryContainer.className = 'overlay-summary';
    arrow.className = 'arrow';
    // Append to articleSummary
    articleSummary.className = 'summary-container';
    articleSummary.appendChild(headerSummary);
    articleSummary.appendChild(bookParagraph);
    articleSummary.appendChild(ratingContainer);
    // Append to summaryContainer
    summaryContainer.append(arrow);
    summaryContainer.append(articleSummary);
    return summaryContainer;
  };

  const createEstructureBook = () => {
    const container = document.createElement('div');
    const book = createBook();
    const overlaySummary = createOverlaySummaryContainer();
    container.className = 'overlay-container';
    container.appendChild(book);
    container.appendChild(overlaySummary);
    return container;
  };

  const fillRating = (element, ratingValue) => {
    const amountFull = Math.floor(ratingValue);
    const extra = (ratingValue - amountFull);
    const childs = element.children;
    for (let index = 0; index < childs.length; index += 1) {
      const stars = index + 1;
      const temp = childs[index];
      if (stars > amountFull) {
        temp.className = 'far fa-star';
      }
      if (stars === (amountFull + 1) && extra >= 0.5) {
        temp.className = 'fas fa-star-half-alt';
      }
    }
  };

  const fillBooks = async () => {
    const bookShelfContainer = document.querySelector('.bookshelf');
    const offDOM = document.createDocumentFragment();
    const bookResponse = await getJson('/src/js/json', 'books.json');
    const { books } = bookResponse;
    const bookEmpty = createEstructureBook();
    books.map((infoBook) => {
      const book = bookEmpty.cloneNode(true);
      const overlayImgContainer = book.querySelector('.img-container');
      const imageBoot = overlayImgContainer.querySelector('img');
      imageBoot.src = infoBook.image;
      const ratingInside = overlayImgContainer.querySelector('.overlay-img')
        .lastChild;
      fillRating(ratingInside, infoBook.rating);
      const titleOutside = book.querySelector('.book-title');
      const authorOutside = titleOutside.nextSibling;
      titleOutside.innerText = infoBook.title;
      authorOutside.innerText = infoBook.author;
      const ratingOutside = authorOutside.nextSibling;
      fillRating(ratingOutside, infoBook.rating);
      const summaryContainer = book.querySelector('.summary-container');
      const headerContainer = summaryContainer.querySelector('header');
      const articleTitle = headerContainer.querySelector('div')
        .firstChild;
      const articleYear = articleTitle.nextSibling;
      articleTitle.innerText = infoBook.title;
      articleYear.innerText = infoBook.year;
      const numPages = headerContainer.lastChild;
      const authorSumary = numPages.previousSibling.children[0];
      authorSumary.innerText = infoBook.author;
      numPages.innerText = `${infoBook.numPages} Pages`;
      const bookParagraph = summaryContainer.querySelector('.summary-paragraph');
      bookParagraph.innerText = infoBook.description;
      const ratingSummary = summaryContainer.querySelector('.rating');
      fillRating(ratingSummary, infoBook.rating);
      offDOM.appendChild(book);
      return undefined;
    });
    bookShelfContainer.appendChild(offDOM);
  };

  const updateView = () => {
    const img = document.querySelector('.header-logo').querySelector('img');
    if (window.innerWidth <= 768) {
      img.src = '/src/images/favicon.png';
    } else {
      img.src = '/src/images/logo.png';
    }
  };
  fillBooks();
  updateView();
  window.addEventListener('resize', updateView);
};

window.addEventListener('load', appBookShelf);
