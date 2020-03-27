const clippyQuotes = {
  corona: ['Wash your hands!', 'Stop touching your face!',
    'Practice social distancing', 'Wipe off your filthy phone!',
    'Stay away from Grandma!'],
  workReminders: ['Look away from the screem for 20 seconds',
    'Stand up and stretch', 'Sit up straight!', 'Drink some water'],
  encouragement: ['You look so cool today!', 'Wow! You are so smart!',
    'I\'m so glad you\'re my friend!', 'You\'re my favorite person'],
  mean: [],
  catFacts: ['A cat was the mayor of an Alaskan town for 20 years',
    'Isaac Newton invented the cat door', 'The oldest cat in the world was 38',
    'The first cat in space was a French cat named Felicette in 1963',
    'Approximately 1/3 of cat owners think their pets can read their minds'],
  custom: [],
};

// check if the page is loaded
window.onload = function () {
  // set which type of quotes Clippy Cat will say - Right now I am hard-coding it
  // as cat facts but user will be able to choose
  const quoteType = 'catFacts';
  const messages = clippyQuotes[quoteType];
  let displayMsg = 'Hi! I\'m Clippy Cat! Nice to meet you!';
  // console.log('I\'m done!');
  // create a container for Clippy Cat
  let clippyBox = document.createElement('div');
  // add styling
  clippyBox.classList.add('clippyContainer');

  // create our Clippy Cat!
  const clippy = document.createElement('img');
  clippy.src = 'https://i.ibb.co/XSJ854n/clippy-cat.png';
  clippy.classList.add('clippy-cat');

  // put Clippy Cat in its box
  clippyBox.append(clippy);

  // load the image on the page inside the div
  document.body.append(clippyBox);

  // create a div for the message
  const messageBox = document.createElement('div');

  // add styling
  messageBox.classList.add('message-box');

  // add a message to the box
  let message = document.createTextNode(displayMsg);
  messageBox.append(message);

  // add the box on top of Clippy Cat so people can see it!
  clippyBox.prepend(messageBox);

  function updateMessage () {
    // pick a random message here to display and update message variable with it
    let i = Math.floor(Math.random() * 5);
    displayMsg = messages[i];
    messageBox.innerText = displayMsg;
    // set the message to show
    messageBox.style.display = 'block';

    // hide the message box after 10 seconds
    setTimeout(function () { messageBox.style.display = 'none'; }, 10000);

    // recursively call updateMessage to run in 30 seconds
    setTimeout(updateMessage, 30000);
  }

  /*custom messages*/
//add a font
// let fontElement = document.createElement('link');
// fontElement.setAttribute('href', 'https://fonts.googleapis.com/css?family=Patrick+Hand&display=swap');
// document.body.append(fontElement);

  // create a form with input text
  
  let customForm={

  createAnElement: function(){
    console.log('createElement');

    let formElement = document.createElement('form');
    formElement.setAttribute('name', 'customForm');
    formElement.setAttribute('action', '#');
    
    let textElement = document.createElement('textarea');
    textElement.setAttribute('class', 'customTextArea');
    textElement.setAttribute('cols',40);
    textElement.setAttribute('rows', 3);
    textElement.setAttribute('placeholder', 'Type your memo here');

    let buttonElement = document.createElement('button');
    buttonElement.setAttribute('class', 'customButton');
    buttonElement.innerHTML='save memo';

    let reminderDateElement=document.createElement('input');
    reminderDateElement.setAttribute('type','date');
    reminderDateElement.setAttribute('id','customDate');
    reminderDateElement.setAttribute('value','2020-03-28');
    reminderDateElement.setAttribute('min','2020-01-01');
    reminderDateElement.setAttribute('max','2028-12-31');
    
    formElement.append(textElement);
    formElement.append(reminderDateElement);
    formElement.append(buttonElement);
    clippyBox.append(formElement);

    formElement.addEventListener('submit', (e)=>{
      e.preventDefault();

      let objClippy={
        memo: textElement.value,
        reminderDateElement: reminderDateElement.value
      }
      localStorage.setItem('ClippyCat', objClippy);
    });
  }
};

    let showCustomForm = document.createElement('a');
    showCustomForm.setAttribute('href', '#');

  // start the call to consistently update the message
  setTimeout(updateMessage, 10000);
};

