// check if the page is loaded
window.onload = function () {
  console.log('I\'m done!');
  // create a container for Clippy Cat
  const clippyBox = document.createElement('div');
  // add styling
  clippyBox.classList.add('clippyContainer');

  // create our Clippy Cat!
  const clippy = document.createElement('img');
  clippy.src = 'https://i.ibb.co/XSJ854n/clippy-cat.png';
  clippy.classList.add('clippy-cat');

  // put Clippy Cat in its box!
  clippyBox.append(clippy);

  // load the image on the page inside the div
  document.body.append(clippyBox);

  // create a div for the message
  const messageBox = document.createElement('div');

  // add styling
  messageBox.classList.add('message-box');

  // start the call to show Message in 15 minutes
  setTimeout(showMessage, 10000);

  function showMessage () {
    // add a message to the box
    let message = document.createTextNode("hi there!");
    messageBox.append(message);

    // add the box on top of Clippy Cat
    clippyBox.prepend(messageBox);

    // remove the box again after thirty seconds


    // recursively call showMessage to run in 15 minutes

  }
};
