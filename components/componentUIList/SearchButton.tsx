"use client";

import { Regex } from "lucide-react";
import { useState } from "react";

export function SearchButton() {
    const message =
        "Hey there, Welcome to step campus. Here you will learn how to automate components like drag and drop , button , slider and many more. This component is created to test search functionality paragraph Please provide your feedback on this component.";

    const [highlight, setHighlight] = useState<string>("");
    const handleChange = (e: any) => {
        setHighlight(e.target.value);
    };

    const getHighlightedText = (message: string, highlight: string) => {
        const messageArr = message.split(new RegExp(`(${highlight})`, "gi"));
        if(highlight === ''){
            return message;
        }
        return (
            <>
                {messageArr.map((ele, id) => {
                    return ele === highlight ? (
                        <span key={id} className="text-black bg-white">{ele}</span>
                    ) : (
                        <span key={id}>{ele}</span>
                    );
                })}
            </>
        );
    };
    return (
        <div className="flex">
            <div className="w-1/2 flex">
                <input
                    className="border-2 border-gray-500 py-1 px-2 rounded h-[45px]"
                    placeholder="Search here"
                    onChange={handleChange}
                ></input>
            </div>
            <div className="w-1/2 bg-neutral-900 text-white p-2 rounded">
                <span id="para">{getHighlightedText(message, highlight)}</span>
            </div>
        </div>
    );
}
