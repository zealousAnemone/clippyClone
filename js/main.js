const clippyQuotes = {
  corona: ['Wash your hands!', 'Stop touching your face!',
    'Practice social distancing', 'Wipe off your filthy phone!',
    'Stay away from Grandma!'],
  workReminders: ['Look away from the screen for 20 seconds',
    'Stand up and stretch', 'Sit up straight!', 'Drink some water'],
  encouragement: ['You look so cool today!', 'Wow! You are so smart!',
    'I\'m so glad you\'re my friend!', 'You\'re my favorite person'],
  mean: ['Did you even lick yourself this morning?', 'You look terrible, did you get less than 22 hours of sleep last night?'],
  catFacts: ['A cat was the mayor of an Alaskan town for 20 years',
    'Isaac Newton invented the cat door', 'The oldest cat in the world was 38',
    'The first cat in space was a French cat named Felicette in 1963',
    'Approximately 1/3 of cat owners think their pets can read their minds'],
  custom: [],
};

// prompt user to pick Clippy's personality from drop-down
// don't show custom in drop-down of options
// when they pick personality, switch Clippy to show message from that key
// if user inputs custom message, switch personality to custom

// check if the page is loaded
window.onload = function () {
  // set which type of quotes Clippy Cat will say
  // turn quotes object keys into an array
  const personalities = Object.keys(clippyQuotes);
  // get a random number between 0 and length of array using floor
  const index = Math.floor(Math.random() * personalities.length);
  // get the key at that index
  const personalityType = personalities[index];
  // assign messages the personality at the random index we grabbed
  const messages = clippyQuotes[personalityType];
  let displayMsg = 'Hi! I\'m Clippy Cat! Nice to meet you!';

  // create a container for Clippy Cat
  const clippyBox = document.createElement('div');
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

  function updateMessage (message) {
    // pick a random message here to display and update message variable with it
    let hideMessage, update;

    if(message!=undefined){
      clearTimeout(hideMessage);
      clearTimeout(update);
      messageBox.innerText = message;
      messageBox.style.display = 'block';
    }
    else{
    let i = Math.floor(Math.random() * messages.length);
    displayMsg = messages[i];
    messageBox.innerText = displayMsg;
    // set the message to show
    messageBox.style.display = 'block';

    // hide the message box after 10 seconds
    hideMessage=setTimeout(function () { messageBox.style.display = 'none'; }, 10000);

    // recursively call updateMessage to run in 30 seconds
    update=setTimeout(updateMessage, 30000);
    }
  }

  /*custom messages*/
  let customForm={

  createAnElement: function(){

    let formElement = document.createElement('form');
    formElement.setAttribute('name', 'customForm');
    formElement.setAttribute('action', '#');
    
    let textElement = document.createElement('textarea');
    textElement.setAttribute('class', 'customTextArea');
    // textElement.setAttribute('cols',40);
    // textElement.setAttribute('rows', 3);
    textElement.setAttribute('placeholder', 'Add a new memo here');

    let buttonElement = document.createElement('button');
    buttonElement.setAttribute('class', 'customButton');
    buttonElement.innerHTML='save memo';

    let reminderDateElement=document.createElement('input');
    reminderDateElement.setAttribute('type','date');
    reminderDateElement.setAttribute('id','customDate');

    // reminderDateElement.setAttribute('value','2020-03-28');
    // reminderDateElement.setAttribute('min','2020-01-01');
    // reminderDateElement.setAttribute('max','2028-12-31');
    
    formElement.append(textElement);
    //formElement.append(reminderDateElement);

    let plainDiv=document.createElement('div');
    plainDiv.append(buttonElement);
    formElement.append(plainDiv);
    clippyBox.append(formElement);

    formElement.addEventListener('submit', (e)=>{
      e.preventDefault();
      clippyQuotes.custom.push(textElement.value);
      console.log(clippyQuotes);

      let objClippy={};
      objClippy={
        memo: textElement.value,
        //reminderDateElement: reminderDateElement.value
      };

      messageBox.innerHTML= objClippy.memo;
      //messageBox.innerHTML+= objClippy.reminderDateElement;

      localStorage.setItem('ClippyCat', JSON.stringify(objClippy));
      updateMessage (objClippy.memo);
      document.querySelector('.customTextArea').value='';

      document.querySelector('form[name="customForm"]').classList.toggle('hide');
      document.querySelector('.showCustomForm').innerHTML='add a reminder'

    });
  }
};

   let buttonMessage=['add a reminder', 'hide a note'];

    let showCustomFormButton = document.createElement('a');
    showCustomFormButton.setAttribute('href', '#');
    showCustomFormButton.classList.add('showCustomForm');
    showCustomFormButton.innerHTML=buttonMessage[0];

    let wrapDiv = document.createElement('div');
    wrapDiv.append(showCustomFormButton);
    clippyBox.append(wrapDiv);

 
    
    showCustomFormButton.addEventListener('click', (e)=>{
      e.preventDefault();
      let formEl=document.querySelector('form[name="customForm"]');
      if(formEl==this.undefined){
      customForm.createAnElement();
      showCustomFormButton.innerHTML=buttonMessage[1];
      } 
      else {
        
        formEl.classList.toggle('hide');
        formEl.classList.contains('hide') ?  showCustomFormButton.innerHTML=buttonMessage[0] : showCustomFormButton.innerHTML=buttonMessage[1];
      }

    });

  // start the call to consistently update the message
  setTimeout(updateMessage, 10000);
};

