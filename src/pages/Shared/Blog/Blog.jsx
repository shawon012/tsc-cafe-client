import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <h3>Tell us the differences between uncontrolled and controlled components</h3>
                <p>In controlled component state manage form element value but in uncontrolled element browser does the work. However in controlled component, component render for every change but in uncontrolled component it does not render for every change. Moreover controlled component preferred for complex form and uncontrolled component preferred for simpler form.</p>
            </div>
            <div>
                <h3>How to validate React props using PropTypes</h3>
                <p>To validate it first we have to install props-types. Then we have to import it in component file. We have to define it adding proptype object in our component. Proptypes has different validators for different data type. When we will pass props to our component PropTypes will automatically validate them.</p>
            </div>
            <div>
                <h3>Tell us the difference between nodejs and express js.</h3>
                <p>Node.js is a javascript run time build on v8 javascript engine while express js is a flexible web application framework. Node.js provides ability to execute javascript code on server side but express js provides frame work and set of tool for making web application.</p>
            </div>
            <div>
                <h3>What is a custom hook, and why will you create a custom hook?</h3>
                <p>Custom hook is a function in React that can extract reuseable logic from other component. Custom hook is created by composing buil in hook. We create custom hook to share logic between components. Custom hook helps to simplify complex logic.</p>
            </div>
        </div>
    );
};

export default Blog; 