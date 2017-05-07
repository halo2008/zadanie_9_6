var list = document.getElementById('list'),
    addElement = document.getElementById('addElem'),
    liItem = document.getElementsByTagName('li');

addElement.addEventListener('click', function() {
  list.innerHTML += '<li>item ' + liItem.length;
});
