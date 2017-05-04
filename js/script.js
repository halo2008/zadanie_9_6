var list = document.getElementById('list'),
    add = document.getElementById('addElem'),
    i = document.getElementsByTagName('li');

add.addEventListener('click', function() {
  list.innerHTML += '<li>item' + ' ' + i.length;
});
