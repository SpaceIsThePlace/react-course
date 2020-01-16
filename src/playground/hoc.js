// Higher Order Component (HOC) - A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Props manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share</p>}        
            <WrappedComponent {...props}/>            
        </div>
    )
};

 
const requireAuthentication = (WrappedComponent) => {    
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent  {...props}/>
                ): (
                    <p>Please login to view the info</p>                  
                )}
        </div>
    )
    
}

// requireAuthentication
const AuthInfo = requireAuthentication(Info);
const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details"/>, document.getElementById('app'));