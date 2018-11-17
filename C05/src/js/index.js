// import event listener
import { addListeners, updateView } from './events';
import createBookTemplate from './templates';
// import function that calls the books from JSON
import getJson from './Tool';
// Import all CSS
import '../styles/sass/main.scss';

const appBookShelf = () => {
  // Charge all books into the bookshelf
  const fillBooks = async () => {
    const bookShelfContainer = document.querySelector('.bookshelf');
    const offDOM = document.createElement('template'); // offDOM
    // Call asynchronously the books.json
    const bookResponse = await getJson('./../src/js/json', 'books.json');
    const { books } = bookResponse;
    books.map((infoBook) => {
      // create Book using template literals
      offDOM.innerHTML += createBookTemplate(infoBook);
      return undefined;
    });
    // Append all the books in the offDOM into the page
    bookShelfContainer.appendChild(offDOM.content);
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
      // Hide all overlays
      if (over.hasClass('show-summary')) {
        over.removeClass('show-summary');
      }
    } else {
      // Hide others overlays
      const currentSummary = $(event.target).closest('.book').next();
      over.not(currentSummary).removeClass('show-summary');
    }
  });
};

// All begins when page is loaded
window.addEventListener('load', appBookShelf);
