import React from 'react';
import './App.css';
import {Root} from "./routes/Root";
import {BrowserRouter} from "react-router-dom";
import {rootStore} from "./store/root-store-context";
import RootStore from "./store/root-store";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <rootStore.Provider value={new RootStore()}>
                <Root/>
                </rootStore.Provider>
                </BrowserRouter>
        </div>
    );
}

export default App;
