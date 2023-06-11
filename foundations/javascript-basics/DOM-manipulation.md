# DOM Manipulation

document.querySelector(selector) -> first match
document.querySelectorAll(selector) -> "nodelist"

nodelist is not an array

const div = document.createElement("div");
document.createElement(tagName, [options]);

does not put the element into the DOM
-> appendNode or insertNode


parentNode.appendChild(childNode)
appends childNode as the last child of parentNode
parentNode.insertBefore(newNode, referenceNode)
inserts newNode into parentNode before referenceNode

parentNode.removeChild(child)
removes child from parentNode on the DOM and returns a reference to child

## Altering Elements

you can do that through reference to elements
div.style.color='blue';        
// adds the indicated style rule

div.style.cssText = 'color: blue; background: white;'; 
// adds several style rules

div.setAttribute('style', 'color: blue; background: white;');    
// adds several style rules

## Events

3 methods :

<button onclick="alert('Hello World')">Click Me</button>
not ideal because we clutter the html with js

<button id="btn">Click Me</button>

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");