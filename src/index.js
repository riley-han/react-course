// import react and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// create a react component
const App = () => {
    return(
        <div>
        <h1>Hi There</h1>
        </div>
    )
}


// take react componenet and render

ReactDOM.render(<App />, document.getElementById('root'));