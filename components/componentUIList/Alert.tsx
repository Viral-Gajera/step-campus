"use client";

import { useState } from "react";
import { Button } from "../ui/button";

export function Alert() {
    const [message, setMessage] = useState("test");
   
    const handleConfirm = () => {
        const confirms = confirm("This is code step alert example!!");
        console.log("confirms: " , confirms);
        if (confirms === false) {
            setMessage(`You have cancelled the prompt`);
        } else {
            setMessage("You have confirm the prompt");
        }
    };
    const handlePrompts = () => {
        const confirms = prompt("This is code step alert example!!");
        if (confirms !== null) {
            setMessage(`You have typed: ${confirms}`);
        } else {
            setMessage("You cancelled the prompt");
        }
    };

    return (
        <div className="flex items-center gap-x-4">
            <div>
                <Button
                    className="mx-2"
                    onClick={() => {
                        alert("This is code step alert example!!");
                        setMessage('');
                    }}
                >
                    Alert Box
                </Button>
                <Button className="mx-2" onClick={handleConfirm}>
                    Alert with OK & Cancel
                </Button>
                <Button
                    className="mx-2"
                    onClick={handlePrompts}
                >
                    Alert with Textbox
                </Button>
            </div>
            <div className="flex gap-x-1 ">
                <h3 className="font-bold">Message: </h3>
                <span className="">{message}</span>
            </div>
        </div>
    );
}
