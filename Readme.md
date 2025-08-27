1.Ans:
getElementById we can select any Element that has an  id 
getElementByClassName we can select all Element that have a Specific Class name 
QuerySelector we can select only the first Element that matches the selector
QuerySelectorAll we can select all the  Elements that have that matches the selector
that's all the major differences

2.Ans:
Here is how I create and insert a new element into the DOM

1st declare a variable and create an element 
Practical example : let p = document.createElement("p");

2nd add content to the element
Practical example : p.TextContent = "Hello Programmers";

3rd append the element to the body
Practical example : document.body.appendChild(p);

3.Ans:
if we click a button inside a div ,1st the button's click runs,then the div's click runs,then the body's click runs and so on.

4.Ans:
you can add one eventListener to any  parent element instead of adding it on every child element. because it is more efficient and less code and it is easier to manage


5.Ans:
Prevendefault( )  stops the default action of an element from happening . like After submitting the form it will not reload the page

stopPropagation( )  stops event bubbling. like if we click on a button it will not go to the parent element