import * as React from 'react';
import './app.css';
//import AppContent from './AppContent';

import Header from './Header'
import AppContent from './AppContent';

function App() {
    return (
        <div>
            <Header pageTitle="IntelliJAC Quiz"/>
            <div className="container-fluid">
              <div className="row">
                <div className="col">
                     <AppContent/>
                </div>
               </div>
            </div>
        </div>
    );
}

export default App;