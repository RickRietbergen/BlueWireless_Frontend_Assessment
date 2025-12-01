# Q4: Event Delegation

Explain what event delegation is and why it is useful.

Your answer here.

Event delegation is a JavaScript technique where you add a single event listener to a parent element instead of adding listeners to multiple child elements. Because events bubble up the DOM, the parent can catch events fired by its children and react based on which element triggered the event.

Why it’s useful:

- **Better performance:** Fewer event listeners reduce memory usage and improve efficiency.
- **Works with dynamic elements:** You don’t need to reattach listeners when new child elements are added.
- **Cleaner code:** All related event logic stays in one place, making the code easier to manage.