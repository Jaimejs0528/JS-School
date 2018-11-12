const addActionToList = (first, second) => {
  first.map((value) => {
    const action = () => () => {
      first.map((item) => {
        item.classList.remove('selected');
        return undefined;
      });
      second.map((item) => {
        item.classList.remove('selected');
        return undefined;
      });
      value.classList.add('selected');
    };
    const clousureAction = action();
    value.addEventListener('click', clousureAction);
    return null;
  });
};

const addOverlayActions = (main) => {
  const bookShelf = main.querySelector('.bookshelf');
  const containers = bookShelf.querySelectorAll('.img-container');
  const containerArray = Array.prototype.slice.call(containers, 0);
  const actionSummary = container => () => {
    container.classList.toggle('show-summary');
    if (!container.classList.contains('change-sense')
    && !container.classList.contains('down')) {
      const wC = container.getBoundingClientRect().width;
      const pC = container.getBoundingClientRect().left;
      const rB = bookShelf.getBoundingClientRect().right;
      const rC = container.getBoundingClientRect().right;
      if (rC > rB) {
        if (Math.abs(pC - wC) > wC) {
          container.classList.add('change-sense');
        } else {
          container.classList.add('down');
        }
      } else {
        container.classList.remove('change-sense');
        container.classList.remove('down');
      }
    }
  };
  containerArray.map((cont) => {
    const parentOverlay = cont.parentElement.parentElement;
    const overlaySummary = parentOverlay.querySelector('.overlay-summary');
    const lendButton = parentOverlay.querySelector('.button-lend');
    const lendContainer = cont.querySelector('.lend-book');
    const actionLend = lendCont => () => {
      lendCont.classList.toggle('show');
    };
    const pressButtom = actionLend(lendContainer);
    lendButton.addEventListener('click', pressButtom);
    const showSummary = actionSummary(overlaySummary);
    cont.addEventListener('click', showSummary);
    return undefined;
  });
};

export const addListeners = () => {
  const main = document.querySelector('.main');
  const parent = main.querySelector('.left-side');
  const menu = parent.querySelector('#menu');
  const menuList = Array.prototype.slice.call(menu.children[1].children, 0);
  const uBooks = parent.querySelector('#u-books');
  const uBooksList = Array.prototype.slice.call(uBooks.children[1].children, 0);
  addOverlayActions(main);
  addActionToList(menuList, uBooksList);
  addActionToList(uBooksList, menuList);
  const toggleList = (parentContainer) => {
    const listItems = parentContainer.children[1];
    return () => {
      listItems.classList.toggle('show');
    };
  };
  const menuAction = toggleList(menu);
  const uBooksAction = toggleList(uBooks);
  menu.addEventListener('click', menuAction);
  uBooks.addEventListener('click', uBooksAction);
};

export const updateView = () => {
  const img = document.querySelector('.header-logo').querySelector('img');
  $('.change-sense').removeClass('show-summary').removeClass('change-sense');
  $('.down').removeClass('show-summary').removeClass('down');
  if (window.innerWidth <= 768) {
    img.src = '/src/images/favicon.png';
  } else {
    img.src = '/src/images/logo.png';
  }
};
