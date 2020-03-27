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

  // put Clippy Cat in its box!
  clippyBox.append(clippy);

  // load the image on the page inside the div
  document.body.append(clippyBox);
};
