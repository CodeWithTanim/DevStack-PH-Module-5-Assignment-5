# Dev Stack

Dev Stack is a responsive web application that helps developers explore different technologies and build their ideal development stack. Users can browse technologies, add them to their stack, and remove them whenever they want.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- React-Toastify
- Vite
- JSON

## Features

- Explore different frontend, backend, database, styling, and development technologies.
- Add technologies to your personal stack and remove them when needed.
- Get toast notifications when adding, removing, or trying to add a duplicate technology.

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that help us to write HTML type code inside JavaScript. React use JSX to describe how the user interface should be look like.

### 2. What is the difference between props and state?

Props are data which are passed from a parent components to a child components where state manage data inside a component than can change over the time.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to create and manage changing data in React components. In this project, I used it to manage the technologies, selected stack and loading state.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is basically used to perform actions after a component renders. I used it to fetch the technology data from the local technologies.json file when the component loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

Unique `Key` props helps React to identify each items in a list and allow React to efficiently update the correct item when the list change.

### 6. What is conditional rendering? Show one place you used it.

Conditional Rendering means showing different UI based on a condition. In this project, I used it to show 'Your Stack is empty' when the stack array has no items.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child using props. To send something back to the parent passes a function to the child and the child call the function.