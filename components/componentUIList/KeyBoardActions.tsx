"use client";

import { useState } from "react";

export function KeyBoardActions() {
    const [keyPressed, setKeyPressed] = useState("");
    const handleChange = (e: any) => {
        setKeyPressed(e.key);
    };
    return (
        <div className="flex">
            <div className="w-1/2 flex">
                <input
                    onKeyDown={handleChange}
                    className="border-2 border-gray-500 py-1 px-2 rounded"
                    placeholder="Type keyboard keys here"
                ></input>
            </div>
            <div className="w-1/2 bg-neutral-900 text-white p-2 rounded">
                Clicked <span className="font-bold text-[#f4ae12]">{keyPressed}</span> on keyboard
            </div>
        </div>
    );
}
