// check if the page is loaded
window.onload = function () {
  console.log('I\'m done!');
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
  let message = document.createTextNode("hi there!");
  messageBox.append(message);

  // add the box on top of Clippy Cat so people can see it!
  clippyBox.prepend(messageBox);

  // start the call to consistently update the message
  updateMessage();

  function updateMessage () {
    // pick a random message here to display and update message variable with it

    // swap out the message in the box

    // set the message to show
    messageBox.style.display = 'block';

    // hide the message box after 10 seconds
    setTimeout(function () { messageBox.style.display = 'none'; }, 10000);

    // recursively call updateMessage to run in 30 seconds
    setTimeout(updateMessage, 30000);
  }
};
