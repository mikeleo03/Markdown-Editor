import "../styles/globals.css";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import * as React from "react";
import MarkdownEditor from "./main-editor";

function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MarkdownEditor/>}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;