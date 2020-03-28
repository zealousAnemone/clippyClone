// when they hit save, grab value from drop down
// Set to Chrome object
// main.js will grab that value from Chrome object

document.querySelector('#save').addEventListener('click', () => {
  const selected = document.getElementById('messagetype');
  chrome.storage.sync.set({'personality': selected.value});
});
