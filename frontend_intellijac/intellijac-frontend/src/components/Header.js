import React from 'react';

export default function Header(props) {
    return (
        <header className="App-header">
            <img src="https://apptraitsolutions.com/wp-content/uploads/2021/01/C88IZyEo7g-1.jpg" className="App-logo" alt="logo"/>
            <h1 className="App-title">{props.pageTitle}</h1>
        </header>
    );
};