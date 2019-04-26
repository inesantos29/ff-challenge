import React from "react";
import ReactDOM from "react-dom";

import BagPage from "./pages/Bag";
import "./index.scss";

function App() {
    return <BagPage bagId="bag1" />;
}

ReactDOM.render(<App />, document.querySelector('#root'));
