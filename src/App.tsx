import React from 'react';
import './App.scss';
import {Root} from "./routes/Root";
import {BrowserRouter} from "react-router-dom";
import {RootStoreContext} from "./store/root-store-context";
import RootStore from "./store/root-store";
//
function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <RootStoreContext.Provider value={new RootStore()}>
                <Root/>
                </RootStoreContext.Provider>
                </BrowserRouter>
        </div>
    );
}

export default App;
