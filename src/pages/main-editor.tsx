import * as React from "react";

const backgroundStyle = {
    backgroundColor : "#151718",
    height: "auto",
    width: "100vw",
    minHeight: "100vh",
    maxHeight: "100vh",
}

const MarkdownEditor = () => {
    return (
        <div style={backgroundStyle} className="flex lg:p-[3vh]">
            <p>Hello WORLD!</p>
        </div>
    );
};

export default MarkdownEditor;