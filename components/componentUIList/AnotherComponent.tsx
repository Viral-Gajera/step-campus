"use client";
import { useState } from "react";

export const AnotherComponent = () => {
    const [mouseEventMessage, setMouseEventMessage] = useState("Please interact with box");

    return (
        <>
            <div className="flex">
                <div className="w-1/2">
                    <div
                        className="bg-[#f4ae12] w-[100px] h-[50px] flex items-center justify-center  rounded-lg cursor-pointer hover:bg-[#ffd169]"
                        onMouseEnter={() =>
                            setMouseEventMessage("Cursor is on the box")
                        }
                        onMouseLeave={() =>
                            setMouseEventMessage("Cursor is off the box")
                        }
                        onMouseDown={() =>
                            setMouseEventMessage("You are holding the box")
                        }
                        onClick={() =>
                            setMouseEventMessage("You have clicked on the box")
                        }
                        onDoubleClick={() =>
                            setMouseEventMessage("You have double clicked on the box")
                        }
                    >
                        Box
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="bg-neutral-900 w-[50%] text-white p-2 rounded">
                        {mouseEventMessage}
                    </div>
                </div>
            </div>
        </>
    );
};
