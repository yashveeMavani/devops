import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    };

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    };

    const handleClearText = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared", "success");
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard", "success");
    };

    const handleClearExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extraspaces removed", "success");
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const [text, setText] = useState("");
    return (
        <>
            <div style={{ color: props.mode === "dark" ? "white" : "#00183c" }}>
                <h1 className="mb-4">{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        id="myBox"
                        rows="8"
                    ></textarea>
                </div>
                <button
                    disabled={text.length === 0}
                    className="btn btn-primary mx-1 my-1"
                    onClick={handleUpClick}
                >
                    Convert To Uppercase
                </button>
                <button
                    disabled={text.length === 0}
                    className="btn btn-primary mx-1 my-1"
                    onClick={handleLowClick}
                >
                    Convert To Lowercase
                </button>

                <button
                    disabled={text.length === 0}
                    className="btn btn-primary mx-1 my-1"
                    onClick={handleClearExtraSpace}
                >
                    Remove Extra Spaces
                </button>
                <button
                    disabled={text.length === 0}
                    className="btn btn-primary mx-1 my-1"
                    onClick={handleCopy}
                >
                    Copy Text
                </button>
                <button
                    disabled={text.length === 0}
                    className="btn btn-primary mx-1 my-1"
                    onClick={handleClearText}
                >
                    Clear Text
                </button>
            </div>
            <div
                className="container my-3 p-0"
                style={{ color: props.mode === "dark" ? "white" : "#00183c" }}
            >
                <h2>Your text summery</h2>
                <p>
                    {
                        text.split(/\s+/).filter((element) => {
                            return element.length !== 0;
                        }).length
                    }{" "}
                    words and {text.length} characters
                </p>
                <p>
                    You need around{" "}
                    {parseInt(
                        0.008 *
                            text.split(" ").filter((element) => {
                                return element.length !== 0;
                            }).length
                    )}{" "}
                    minutes{" "}
                    {(0.008 *
                        text.split(" ").filter((element) => {
                            return element.length !== 0;
                        }).length -
                        parseInt(
                            0.008 *
                                text.split(" ").filter((element) => {
                                    return element.length !== 0;
                                }).length
                        )) *
                        60}{" "}
                    and seconds to read this text
                </p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    );
}
