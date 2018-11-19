// import event listener
import { addListeners, updateView } from './events';

// import function that calls the books from JSON
import getJson from './Tool';

// Import all CSS
import '../styles/sass/main.scss';

const appBookShelf = () => {
  // Add Options to Book over the img
  const createOptionsBook = (divClone) => {
    const container = divClone;
    const optionMid = document.createElement('div');
    const iconOption = document.createElement('i');
    container.className = 'book-options';
    optionMid.appendChild(iconOption);
    optionMid.className = 'child circle-img';
    iconOption.className = 'fas fa-bookmark';
    container.appendChild(optionMid);
    return container;
  };

  // add rating stars to the book struture
  const createRatingStars = (divClone, ratingValue) => {
    const ratingStars = divClone;
    const amountFull = Math.floor(ratingValue);
    const extra = (ratingValue - amountFull);

    // Creating and filling stars
    ratingStars.className = 'rating';
    for (let index = 0; index < 5; index += 1) {
      const star = document.createElement('i');
      const stars = index + 1;
      star.className = 'fas fa-star';
      if (stars > amountFull) {
        star.className = 'far fa-star';
      }
      if (stars === (amountFull + 1) && extra >= 0.5) {
        star.className = 'fas fa-star-half-alt';
      }
      ratingStars.appendChild(star);
    }
    return ratingStars;
  };


  // Create a empty book
  const createBook = (infoBook) => {
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

    // Contained in BookContainer
    const spanTitle = document.createElement('span');
    const spanAuthor = spanTitle.cloneNode();
    const ratingBook = createRatingStars(BookContainer.cloneNode(), infoBook.rating);

    // Contained in overlayImage
    const bookOptions = createOptionsBook(BookContainer.cloneNode());
    const spanRate = spanTitle.cloneNode();
    const ratingStarsOverImg = ratingBook.cloneNode(true);

    // Setting title and author
    spanTitle.classList.add('book-title', 'hidde-overflow-text');
    spanTitle.innerText = infoBook.title;
    spanAuthor.classList.add('author', 'hidde-overflow-text');
    spanAuthor.innerText = infoBook.author;

    // Adding atributes
    BookContainer.classList.add('book');
    overlayBookImg.classList.add('overlay-container', 'img-container');
    bookImage.alt = 'bookImage';

    // Lend container
    lendContainer.className = 'lend-book';
    lendIcon.alt = 'lend Icon';
    lendIcon.src = './../src/images/reservation.png'; // Setting image
    iconUserCheck.className = 'fas fa-user-check';
    lendContainer.appendChild(lendIcon);
    lendContainer.appendChild(iconUserCheck);

    // Thats no the correct ratio for de image, but for pixel perfect yes
    bookImage.src = infoBook.image;
    bookImage.className = 'img-border';
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
  const createOverlaySummaryContainer = (infoBook) => {
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
    const numbPagesText = document.createElement('p');

    // Book paragraph
    const bookParagraph = summaryContainer.cloneNode();
    const spanSubTitle = spanYear.cloneNode();
    const paragraph = numbPagesText.cloneNode();
    const ratingContainer = summaryContainer.cloneNode();
    // Into ratingContainer
    const spanRating = spanYear.cloneNode();
    const summaryStars = createRatingStars(summaryContainer.cloneNode(), infoBook.rating);

    // set class
    summaryContainer.className = 'overlay-summary';
    arrow.className = 'arrow';

    // Setting summary info
    titleHeader.innerText = infoBook.title;
    spanYear.innerText = infoBook.year;
    author.innerHTML = `Novel by <span>${infoBook.author}</span>`;
    numbPagesText.innerText = infoBook.numPages;

    // Append to divContainer
    divContainer.appendChild(titleHeader);
    divContainer.appendChild(spanYear);

    // Append to Header
    headerSummary.appendChild(divContainer);
    headerSummary.appendChild(author);
    headerSummary.appendChild(numbPagesText);
    headerSummary.className = 'header-summary';

    // Into bookParagraph
    bookParagraph.className = 'book-paragraph';
    spanSubTitle.innerText = 'Summary';
    paragraph.className = 'summary-paragraph';

    // Setting paragraph information
    paragraph.innerText = infoBook.description;
    bookParagraph.appendChild(spanSubTitle);
    bookParagraph.appendChild(paragraph);

    // Book summary rating
    spanRating.innerText = 'Rating';

    // Append to ratingContainer
    ratingContainer.className = 'book-summary-rating';
    ratingContainer.appendChild(spanRating);
    ratingContainer.appendChild(summaryStars);

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

  // Create a Book
  const createAndFillBook = (infoBook) => {
    const container = document.createElement('div');
    const book = createBook(infoBook);
    const overlaySummary = createOverlaySummaryContainer(infoBook);
    container.className = 'overlay-container';
    container.appendChild(book);
    container.appendChild(overlaySummary);
    return container;
  };

  // Charge all books into the bookshelf
  const fillBooks = async () => {
    const bookShelfContainer = document.querySelector('.bookshelf');
    const offDOM = document.createDocumentFragment(); // offDOM
    // Call asynchronously the books.json
    const bookResponse = await getJson('./../src/js/json', 'books.json');
    const { books } = bookResponse;
    books.map((infoBook) => {
      const book = createAndFillBook(infoBook);
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

// All begins when page is loaded
window.addEventListener('load', appBookShelf);
