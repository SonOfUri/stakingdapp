import React from 'react';
import { configureWeb3Modal } from "./connection/configureWeb3Modal.js";
import "@radix-ui/themes/styles.css";
import Header from "./component/Header";
import CreatePool from "./component/CreatePool.jsx";


configureWeb3Modal();

// App Component Function
function App() {
    return (
        <div className="App">

            <Header />


            <CreatePool />

        </div>
    );
}

export default App;