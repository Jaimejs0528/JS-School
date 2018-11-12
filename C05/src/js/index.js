// import event listener
import { addListeners, updateView } from './events';
// Import all CSS
import '../styles/sass/main.scss';

const appBookShelf = () => {
  // Return a Json Object from our Computer
  const getJson = async (path, fileName) => {
    const response = await fetch(`${path}/${fileName}`, {
      referrerPolicy: 'origin-when-cross-origin',
    }).then(responseJson => responseJson.json());
    return response;
  };

  // Add Options to Book over the img
  const createOptionsBook = (divClone) => {
    const container = divClone;
    container.className = 'book-options';
    const optionMid = document.createElement('div');
    const iconOption = document.createElement('i');
    optionMid.appendChild(iconOption);
    optionMid.classList.add('circle-img');
    const icon = optionMid.querySelector('i');
    icon.className = 'fas fa-bookmark';
    optionMid.classList.add('child');
    container.appendChild(optionMid);
    return container;
  };

  // add rating stars to the book struture
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


  // Create a empty book
  const createBook = () => {
    // Book Container
    const BookContainer = document.createElement('div');
    // Overlay Image Container
    const overlayBookImg = BookContainer.cloneNode();
    // Contained in overlayBookImg
    const bookImage = document.createElement('img');
    const lendContainer = BookContainer.cloneNode();
    const lendIcon = bookImage.cloneNode();
    const iconUserCheck = document.createElement('i');
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
    bookImage.alt = 'bookImage';
    // Lend container
    lendContainer.className = 'lend-book';
    lendIcon.alt = 'lend Icon';
    lendIcon.src = './../src/images/reservation.png';
    iconUserCheck.className = 'fas fa-user-check';
    lendContainer.appendChild(lendIcon);
    lendContainer.appendChild(iconUserCheck);
    // Thats no the correct ratio for de image, but for pixel perfect yes
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
    overlayBookImg.appendChild(lendContainer);
    overlayBookImg.appendChild(overlayImage);
    // Append childs to Book Container
    BookContainer.appendChild(overlayBookImg);
    BookContainer.appendChild(spanTitle);
    BookContainer.appendChild(spanAuthor);
    BookContainer.appendChild(ratingBook);
    return BookContainer;
  };

  // Create all overlayout summary for the empty book
  const createOverlaySummaryContainer = () => {
    // Summary container
    const summaryContainer = document.createElement('div');
    const arrow = summaryContainer.cloneNode(); // arrow indicator
    const summaryOptions = summaryContainer.cloneNode();
    const buttonReservation = document.createElement('button');
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
    // Append to summaryOptions
    buttonReservation.className = 'button-lend';
    buttonReservation.innerText = 'lend';
    summaryOptions.append(buttonReservation);
    summaryOptions.appendChild(articleSummary);
    // Append to summaryContainer
    summaryContainer.append(arrow);
    summaryContainer.append(summaryOptions);
    return summaryContainer;
  };

  // Create a Empty Book Structure
  const createEstructureBook = () => {
    const container = document.createElement('div');
    const book = createBook();
    const overlaySummary = createOverlaySummaryContainer();
    container.className = 'overlay-container';
    container.appendChild(book);
    container.appendChild(overlaySummary);
    return container;
  };

  // translate number rating into his recpevive icon
  // aspect
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

  // Charge all books into the bookshelf
  const fillBooks = async () => {
    const bookShelfContainer = document.querySelector('.bookshelf');
    const offDOM = document.createDocumentFragment(); // offDOM
    // Call asynchronously the books.json
    const bookResponse = await getJson('./../src/js/json', 'books.json');
    const { books } = bookResponse;
    const bookEmpty = createEstructureBook(); // create a book base
    books.map((infoBook) => {
      const book = bookEmpty.cloneNode(true); // clone the book base
      const overlayImgContainer = book.querySelector('.img-container');
      const imageBoot = overlayImgContainer.querySelector('img');
      imageBoot.src = infoBook.image;
      imageBoot.className = 'img-border';
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
    // Append all the books in the offDOM into the page
    bookShelfContainer.appendChild(offDOM);
    // Add Events
    addListeners();
  };

  fillBooks();
  // add window events
  updateView();
  window.addEventListener('resize', updateView);
  $(window).click((event) => {
    event.stopPropagation();
    const over = $('.overlay-summary');
    const imgContainer = $('.img-container');
    if (over.has(event.target).length === 0
     && imgContainer.has(event.target).length === 0) {
      if (over.hasClass('show-summary')) {
        over.removeClass('show-summary');
      }
    }
  });
};

// Al begins when page structure is loaded
window.addEventListener('load', appBookShelf);
