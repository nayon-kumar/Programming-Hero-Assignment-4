# Programming-Hero-Assignment-4

<p>To show the live preview <a href="https://nayon-kumar.github.io/Programming-Hero-Assignment-4/">Click Here</a></p>

## Some question and answer

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

<p>Answer: </p>
<p>getElementById select only one element. Like document.getElementById("studentId");</p>
<p>getElementsByClassName select all element of the given class name. Like document.getElementsByClassName("allStudent"); </p>
<p>querySelector only select first element of the given query. We can use it like CSS selector document.querySelector(".card"); </p>
<p>querySelectorAll select all elements of the given query. We can use it like CSS selector ddocument.querySelectorAll(".card"); </p>

### 2. How do you create and insert a new element into the DOM?

<p>Answer: </p>
<p>First, I will select the element where I want to add my new element like const container = document.getElementById("container");</p>
<p>Second, I will create new element like const div = document.createElement("div");</p>
<p>Third, I will add content what I want to add like div.innerText = "Hello world";</p>
<p>Finally , I will append the child in the selected element like container.appendChild(div);</p>

### 3. What is Event Bubbling? And how does it work?

<p>Answer: </p>
<p>If I select an element first it will run on this element and go to the parent element. It's continiously go to the parent of parent element.</p>
<p>It work like: Element → Parent → Grandparent → document → window</p>

### 4. What is Event Delegation in JavaScript? Why is it useful?

<p>Answer: </p>
<p>Using event delegation we can add a single event listener to a parent element instead of multiple event listener to child elements.</p>
<p>It is usefull because we can we can only one event listener instead of many. It reduce time and memory also.</p>

### 5. What is the difference between preventDefault() and stopPropagation() methods?

<p>Answer: </p>
<p>preventDefault() stop the default browser behavior but does not stop bubbling. For example: using preventDefault we can stop form refreshes the page then page does not reload.</p>
<p>stopPropagation() stop bubbling up to parent elements. It does not stop default behavior. For example: clicking a button inside a card stopPropagation stops the click from reaching the card</p>
