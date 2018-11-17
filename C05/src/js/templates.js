// Create rating stars
const createRatingStarsTemplate = (ratingValue, maxStars = 5, classStars = { full: 'fas fa-star', empty: 'far fa-star', medium: 'fas fa-star-half-alt' }, classContainer = 'rating') => {
  // Validation if rating value is higher than max # stars
  if (ratingValue > maxStars) {
    return `rating(${ratingValue}) is higher than max(${maxStars})`;
  }
  const amountFull = Math.floor(ratingValue);
  const extra = (ratingValue - amountFull);
  const starsTemplate = [];
  // Creating and filling stars
  for (let index = 0; index < maxStars; index += 1) {
    const stars = index + 1;
    if (stars > amountFull) {
      if (stars === (amountFull + 1) && extra >= 0.5) {
        starsTemplate.push(
          `
              <i class="${classStars.medium}"></i>`, // Star full painted
        );
      } else {
        starsTemplate.push(
          `
              <i class="${classStars.empty}"></i>`, // Star empty painted
        );
      }
    } else {
      starsTemplate.push(
        `
            <i class="${classStars.full}"></i>`, // star mid painted
      );
    }
  }
  const outputStars = starsTemplate.join(''); // join all element in the array
  // Return completely the template
  return `
    <div class="${classContainer}">${outputStars}
    </div>
    `;
};

// Create img container and its overlay
// For pixel perfect width and height of image
// are seted with a fixed size.
const createImgWithOverlayTemplate = (image, rating) => `
<div class="overlay-container img-container">
<img src="${image}" alt="bookImage" class="img-border" width="176" height="250">
<div class="lend-book">
  <img alt="lend Icon" src="./../src/images/reservation.png">
  <i class="fas fa-user-check"></i>
</div>
  <div class="overlay-img">
    <div class="book-options">
      <!--<div class="child left circle-img"><i class="far fa-heart"></i></div> disabled-->
      <div class="child circle-img"><i class="fas fa-book-open"></i></div>
      <!--<div class="child right circle-img"><i class="far fa-bookmark"></i></div> disabled-->
    </div>
    <span>RATE THIS BOOK</span>
    ${createRatingStarsTemplate(rating)}      
  </div>    
</div>
`;

// Create book without Overlay
const createInfoBookTemplate = infoBook => `
<div class="book">
  ${createImgWithOverlayTemplate(infoBook.image, infoBook.rating)}
  <span class="book-title hidde-overflow-text">${infoBook.title}</span>
  <span class="author hidde-overflow-text">${infoBook.author}</span>
  ${createRatingStarsTemplate(infoBook.rating)}
</div>
`;

// Create header for overlay Summary
const createHeaderSummaryTemplate = infoSummary => `
<header class="header-summary">
    <div>
        <h1>${infoSummary.title}</h1>
        <span>${infoSummary.year}</span>
    </div>
    <h2>Novel by <span>${infoSummary.author}</span></h2>
    <p>${infoSummary.numPages} Pages</pinfoSummary.>
</header>
`;

// Create article for overlay Summary
const createArticleTemplate = infoSummary => `
<article class="summary-container">
    ${createHeaderSummaryTemplate(infoSummary)}
    <div class=book-paragraph>
        <span>summary</span>
        <p class="summary-paragraph">${infoSummary.description}</p>
    </div>
    <div class="book-summary-rating">
        <span>RATING</span>
        ${createRatingStarsTemplate(infoSummary.rating)}
    </div>
    <!--<div class="recommended-by"> DISABLED
        <span>RECOMMENDED BY</span>
        <div class="user-icons">
            <div><img src="images/user-icon-1.png"></div>
            <div><img src="images/user-icon-2.png"></div>
            <div><img src="images/user-icon-3.png"></div>
        </div>
    </div>--> 
</article>
`;

// Create overlay Summary
const createOverlaySummaryTemplate = infoSummary => `
<div class="overlay-summary">
    <div class="arrow"></div>
    <div>
    <button class="button-lend">lend</button>
    ${createArticleTemplate(infoSummary)}
    </div>
</div>
`;

// Create All the book and fill it
const createBook = infoBook => `
<div class="overlay-container">
  ${createInfoBookTemplate(infoBook)}
  ${createOverlaySummaryTemplate(infoBook)}
</div>
`;

// Export the function to create Books
export default createBook;
