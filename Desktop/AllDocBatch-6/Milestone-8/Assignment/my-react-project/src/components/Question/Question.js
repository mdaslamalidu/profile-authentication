import React from 'react';
import "./Question.css";

const Question = () => {
    return (
        <div className='questions'>
            <div className='question'>
                <h2>How Does Word React?</h2>
                <p> While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
                    Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
                    Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js. </p>
            </div>
            <div className='question'>
                <h3>What is The Differecne between props and state?</h3>
                <h4>Props</h4>
                <p>1. The Data is passed from one component to another.</p>
                <p>2. It is Immutable (cannot be modified.</p>
                <p>3. Props can be used with state and functional components.</p>
                <p>4. Props are read-only.</p>
                <h4>State</h4>
                <p>1. The Data is passed within the component only.</p>
                <p>2. It is Mutable ( can be modified).</p>
                <p>3. 	State can be used only with the state components/class component (Before 16.0).</p>
                <p>4. State is both read and write.</p>
            </div>
            <div className='question'>
                <h3>What type of works do useEffect without fetch Api?</h3>
                <p>The useEffect hook is the Swiss Army knife of all the hooks. It’s the solution to many problems: withuot fetch data it works how to run code when state changes or when a prop changes, how to set up timers or intervals, you name it.</p>
            </div>
        </div>
    );
};

export default Question;