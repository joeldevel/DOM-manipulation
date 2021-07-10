// console.log('works');
const form = document.querySelector('#addForm');
const itemList = document.querySelector('#items');
const filter = document.querySelector('#filter');
// form submit event

form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);

filter.addEventListener('keyup',filterItems);


function addItem(e) {
  e.preventDefault();

  // getinput value
  const newItem = document.querySelector('#item');

  // create new li element
  const li = document.createElement('li');
  li.className = 'list-group-item';

  // add text node
  li.appendChild(document.createTextNode(newItem.value));

  const deleteButton = document.createElement('button');
  deleteButton.className='btn btn-danger btn-sm float-right delete';

  deleteButton.appendChild(document.createTextNode('X'));
  li.appendChild(deleteButton);
  itemList.appendChild(li);

}

function removeItem(e) {
  if(e.target.classList.contains('delete')) {
    console.log('X ');
    if(confirm('r u sure?')) {
      const li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e) {
  // convert to lc
  const text = e.target.value.toLowerCase();
  // console.log(text);
  // get list
  const items = itemList.getElementsByTagName('li');
  Array.from(items).forEach(function(item){
    const itemName = item.firstChild.textContent;
    console.log(itemName);
    if(itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display='block';
    } else {
      item.style.display = 'none';
    }
  });
}
