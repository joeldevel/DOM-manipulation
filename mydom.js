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

let titles = document.querySelectorAll('.title');
console.log(titles);
titles[1].style.fontFamily='serif';

let odd = document.querySelectorAll('li:nth-child(odd)');
// odd[0].style.background='red';
odd.forEach(item=>item.style.background='red');
