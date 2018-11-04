// Avoid global variables with app variable
const appLocalStorage = function main() {
  const divFather = document.querySelector('div'); // Div container use to traversing downward the DOM
  const inputText = divFather.querySelector('#input'); // Input where the message is wrote
  const button = divFather.querySelector('#button'); // Button that calls saveValues function
  /*
        Create one post-it for each message stored into localStorage
    * */
  const updatePostItContainer = () => {
    // Get the parent container
    const postItContainer = divFather.querySelector('.postWall-container');
    // get total previous messages already showed
    const items = postItContainer.children.length;
    // define a off DOM to insert all the post-it
    const offDOM = document.createDocumentFragment();
    // For to add all post-it
    for (let i = items; i < localStorage.length; i += 1) {
      const div = document.createElement('div');
      const pTime = document.createElement('p');
      const pMessage = document.createElement('p');
      div.setAttribute('class', 'postWall-item'); // add a css class
      // Get one message from localStorage by index i
      const jsonObject = JSON.parse(localStorage.getItem(localStorage.key(i)));
      // get the date of the message
      const date = new Date(jsonObject.time);
      const finalDate = `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}
                               ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      pTime.innerText = finalDate;
      pMessage.innerText = jsonObject.message;
      div.appendChild(pTime); // Add paragraph element time
      div.appendChild(pMessage); // Add paragraph element message
      offDOM.appendChild(div); // add div item into offDOM
    }
    postItContainer.appendChild(offDOM); // add off DOM into container
  };
  /*
       verify if the message is empty, if it's empty
       shows an alert, other hand, if it isn't empty
       storage the message and the current date in the
       localStorage and finally calls the function
       updatePostItContainer.
    * */
  const saveValues = () => {
    const message = inputText.value;
    if (message && message !== '') {
      const time = new Date().getTime(); // get the current date
      // Save the message and date into the localStorage
      localStorage.setItem(String(time), JSON.stringify({
        time,
        message,
      }));
      updatePostItContainer();
      inputText.value = ''; // reset the value in the input
    } else {
      // eslint-disable-next-line no-alert
      alert('Campo Vacio');
    }
  };
    // add the click event into button with function saveValues
  button.addEventListener('click', saveValues);

  updatePostItContainer();
};

// init appLocalStorage after the web page is loaded.
window.addEventListener('load', appLocalStorage);
