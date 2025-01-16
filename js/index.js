const singleElement2 = document.getElementById('value'); // return single element
const htmlCollection = document.getElementsByClassName('value'); // return HTML Collection
const htmlCollection2 = document.getElementsByTagName('value'); // return HTML Collection
 //'.value' - class / "#value" - id /'option[attribute="value"]' - attribute
 // return Node Collection

const singleElement = document.querySelector('.navbar__menu-item');
singleElement2.style.backgroundColor = 'red'; // .style - вхів у css // backgroundColor - css властивість, 
                                              // якій можна присвоїти значення.
                                              // так можна модіфікувати тільки один елемент
const nodeCollection = document.querySelectorAll('.navbar__menu-item');
nodeCollection.forEach(element => {   // querySelectorAll повертає колекцію, з якою можна працювати як з масивом
    element.style.color = 'red';      // треба присвоювати кожному елементу колекцію стиль окремо
})

const htmlParentElement = querySelector('ul'); // parrent element
const newElement = document.createElement('li'); // create new html tag item

const list = document.querySelector('li'); // first element in list
list.innerText; // innerText saves text as it appears on the web page. Invisible text, comments, and extra spaces are not shown.
list.textContent; // textContent saves text as it presents in html code with invisible text, comment and other things.
list.innerHTML; // innerHTML works similarly to textContent but includes HTML tags as part of the text.

list.innerText = "new text"; // Sets new text or replaces the existing text with a new value
list.innerText += "new text"; // Appends new text to the end of the existing text value

list.setAttribute('id','attributeName'); // set new attribute 
                                                // (id = attribute like id/class/value/href 
                                                // and attributeName = value)
list.getAttribute('id') // give the element attribute by it's name
list.removeAttribute('.value'); // remove the attribute by it's name 

list.classList.add('className'); // Adds the specified class to the element
list.classList.remove('className'); // Removes the specified class from the element
list.classList.contains('className'); // Returns true if the element has the specified 
                                            // class, otherwise returns false



// const listElement = document.querySelector('li'); // first element in list
// // Two options to access a parent node:
// listElement.parentElement; // Accesses the parent element node
// listElement.parentNode;    // Accesses the parent node (which may include non-element nodes)

// // Accessing grandparent nodes:
// listElement.parentElement.parentElement; // Accesses the grandparent element node
// listElement.parentNode.parentNode;       // Accesses the grandparent node (which may include 
//                                          // non-element nodes)

const list = document.querySelector('ul'); // targeted element

// Two options to access sibling nodes:

// First option (includes non-element nodes):
list.previousSibling;      // Accesses the previous sibling node (may include text or comment nodes)
list.nextSibling;          // Accesses the next sibling node (may include text or comment nodes)

// Second option (excludes non-element nodes):
list.previousElementSibling; // Accesses the previous sibling element node (ignoring non-element nodes)
list.nextElementSibling;     // Accesses the next sibling element node (ignoring non-element nodes)




// Accessing grandparent nodes:
list.parentElement.parentElement; // Accesses the grandparent element node
list.parentNode.parentNode;       // Accesses the grandparent node (which may include 
                                         // non-element nodes)








                                            