// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);

// console.log(document.forms);
// console.log(document.links);
// console.log(document.images.length);

// By ID
// let title = document.getElementById('header-title');
// let header = document.getElementById('main-header');
// console.log(title.innerText);
// console.log(title.textContent);
// title.innerHTML = '<h2>new title</h2>';//puts inside the element another html

// title.style.color = 'tomato';
// header.style.border =' 5px dotted #aaa';

// By class

// let items = document.getElementsByClassName('list-group-item'); // ->htmlcollection
// console.log(items);
// console.log(items[1]);
// items[1].style.fontWeight = 800;
// items[2].style.background = '#234abc';
// items[2].style.color = '#abc234';

// apply style to all elements
// for(let i=0; i< items.length; i++) {
//   if(i%2===0) items[i].style.background ='orange';
//   else items[i].style.background ='plum';
// }

// By TAG
// let items = document.getElementsByTagName('li');
// for(let i=0; i< items.length; i++) {
//
// if(i%2===0) items[i].style.background ='orange';
//   else items[i].style.background ='plum';
// }

// by query selector, use any CSS selector
// let mainHeader = document.querySelector('#main-header');
// // console.log(mainHeader);
//
// let input = document.querySelector('input');
// input.value = 'value generated using JS';
//
// let item = document.querySelectorAll('li'); // grab a bunch of elements
// let submit = document.querySelector('input[type="submit"]');
// console.log(submit);
// submit.classList.remove('btn-dark');
// submit.classList.add('btn-danger');
//
// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.background='dodgerblue';
//
// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.background='orangered';

// QUERY SELECTOR All

// let titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[1].style.fontFamily='serif';
//
// let odd = document.querySelectorAll('li:nth-child(odd)');
// // odd[0].style.background='red';
// odd.forEach(item=>item.style.background='red');


// TRAVERSING THE DOM
// parentNode
// let itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.background='red';

// parentElement
// let itemList = document.querySelector('#items');
// console.log(itemList.parentElement);
// itemList.parentElement.style.background='red';

// childNodes
// console.log(itemList.childNodes); //->NodeList

// children
// console.log(itemList.children); //->HTMLCollection

// firstChild returns whatever child, event a line break
// console.log(itemList.firstChild);

// firstElementChild returns an html element so white space, line breaks etc are not returned
// console.log(itemList.firstElementChild);

// lastChild
// console.log(itemList.lastChild);
// lastElementChild
// console.log(itemList.lastElementChild);

// siblings
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling.style.color="greenyellow");


// create elements

// let newDiv = document.createElement('div');
// newDiv.className = 'bg-danger';
// newDiv.id = 'special-div';
// newDiv.setAttribute('title', 'what do you want');
//
// // text node
// let newDivText = document.createTextNode('Some people say we should do...');
// newDiv.appendChild(newDivText);
//
// let container = document.querySelector('header .container');
// let h1 = document.querySelector('header h1');
//
// // appent to the DOM
// // console.log(newDiv);
// container.insertBefore(newDiv, h1);
// container.insertBefore(newDiv, h1); //just appends it once!
// container.appendChild(newDiv);

//---------------------------------------------------------------------//
//                      Events and that stuff
let btn = document.querySelector('#button');
// let clickCounter = 0;
// function theFunction(e) {
//   clickCounter++;
//   if(clickCounter%2===0) {
//     btn.classList.remove('btn-dark');
//     btn.classList.add('btn-success');
//     document.querySelector('body').style.background='red';
//   } else {
//     document.querySelector('body').style.background='turquoise';
//   }
//   // console.log('clicking: #', e.target.id);
//   // console.log(e.target.className);
//   // console.log(e.target.classList);
//   // console.log(e.type);
//
//   // console.log(e.clientX); // coordinate from the window
//   // console.log(e.clientY);
//
//   // console.log(e.offsetX); // from the element
//   // console.log(e.offsetY);
//   // console.log(getComputedStyle(e.target).backgroundColor);
//
//   //checking keys when clicking
//   // console.log(e.altKey);
//   // console.log(e.ctrlKey);
//   // console.log(e.shiftKey);
// }
let output = document.getElementById('output');
function runEvent(e) {
  if(e.type==='submit') {
    e.preventDefault();
  }
  console.log('EVNT type', e.type);
  // document.body.style.display = 'none';
  // console.log(e.target.value);
  // output.innerHTML='<h3>'+e.target.value+'</h3>';
  // console.log('X',e.offsetX);
  // console.log('Y',e.offsetY);
  // going nuts!
  // btn.style.background = `rgba(${e.offsetX}, ${e.offsetY}, ${e.offsetX + e.offsetY})`;
}
// btn.addEventListener('click', runEvent);
// btn.addEventListener('dblclick', runEvent);
// btn.addEventListener('mousedown', runEvent);
// btn.addEventListener('mouseup', runEvent);

let box = document.querySelector('#box');

// these are confusing!
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseleave', runEvent);
// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseout', runEvent);
// box.addEventListener('mousemove', runEvent);

let itemInput = document.querySelector('input[type="text"]');
let form = document.querySelector('form');
let select = document.querySelector('select');
// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent); // mean out of focus

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);
// console.log(itemInput);
select.addEventListener('change', runEvent);
form.addEventListener('submit', runEvent);
