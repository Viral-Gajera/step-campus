"use client";

import { useState } from "react";

export const AnotherComponent = () => {
    const [clickMessage, setClickMessage] = useState("Box");
    const [dblMessage, setDblMessage] = useState("Box");
    const [rightMessage, setRightMessage] = useState("Box");
    const [holdMessage, setHoldMessage] = useState("Box");
    const [releaseMessage, setReleaseMessage] = useState("Box");
    const [moveToElement, setMoveToElement] = useState("Box");

    const contextHandler = (ev: any) => {
        ev.preventDefault();
        ev.stopPropagation();
        setRightMessage("Right Clicked the box");
    };

    const resetMessage = (ev: any) => {
        ev.stopPropagation();
        setClickMessage("Box");
        setDblMessage("Box");
        setRightMessage("Box");
        setHoldMessage("Box");
        setReleaseMessage("Box");
        setMoveToElement("Box");
    };

    return (
        <div>
            <div
                className="flex gap-20 items-center border-dashed border-2  p-2 m-2 w-[80%] rounded-lg"
                onClick={resetMessage}
            >
                <div className="w-1/3">Move to Element</div>
                <div
                    onMouseEnter={(ev) => {
                        ev.stopPropagation();
                        setMoveToElement("On the box");
                    }}
                    onMouseLeave={(ev) => {
                        ev.stopPropagation();
                        setMoveToElement("Away from box");
                    }}
                    className="cursor-pointer border-1  hover:bg-[var(--color-primary-400)] rounded-xl border-gray-400 items-center flex justify-center w-40 h-30"
                >
                    {moveToElement}
                </div>
            </div>
            <div
                className="flex gap-20 items-center border-dashed border-2 p-2 m-2 w-[80%] rounded-lg"
                onClick={resetMessage}
            >
                <div className="w-1/3">Click</div>
                <div
                    className="cursor-pointer border-1 rounded-xl hover:bg-[var(--color-primary-400)] border-gray-400 items-center flex justify-center w-40 h-30"
                    onClick={(ev) => {
                        ev.stopPropagation();
                        setClickMessage("Clicked the box");
                    }}
                >
                    {clickMessage}
                </div>
            </div>
            <div
                className="flex gap-20 items-center border-dashed border-2 p-2 m-2 w-[80%] rounded-lg"
                onClick={resetMessage}
            >
                <div className="w-1/3">Right Click (Context Click)</div>
                <div
                    onContextMenu={contextHandler}
                    className="cursor-pointer border-1 rounded-xl hover:bg-[var(--color-primary-400)] border-gray-400 items-center flex justify-center w-40 h-30"
                >
                    {rightMessage}
                </div>
            </div>
            <div
                className="flex gap-20 items-center border-dashed border-2 p-2 m-2 w-[80%] rounded-lg"
                onClick={resetMessage}
            >
                <div className="w-1/3">Double Click</div>
                <div
                    className="cursor-pointer border-1 hover:bg-[var(--color-primary-400)] rounded-xl border-gray-400 items-center flex justify-center w-40 h-30"
                    onDoubleClick={(ev) => {
                        ev.stopPropagation();
                        setDblMessage("Double Clicked the box");
                    }}
                >
                    {dblMessage}
                </div>
            </div>
            <div className="flex gap-20 items-center border-dashed border-2 p-2 m-2 w-[80%] rounded-lg">
                <div className="w-1/3">Click and Hold</div>
                <div
                    className="cursor-pointer border-1 hover:bg-[var(--color-primary-400)] rounded-xl border-gray-400 items-center flex justify-center w-30 h-30"
                    onMouseUp={() => setHoldMessage("Box")}
                    onMouseDown={() => setHoldMessage("Holding the box")}
                >
                    {holdMessage}
                </div>
            </div>
            <div className="flex gap-20 items-center border-dashed border-2 p-2 m-2 w-[80%] rounded-lg">
                <div className="w-1/3">Release</div>
                <div
                    onMouseUp={() =>
                        setReleaseMessage("You have released the box")
                    }
                    onMouseDown={() => setReleaseMessage("Holding the box")}
                    className="cursor-pointer border-1 hover:bg-[var(--color-primary-400)] rounded-xl border-gray-400 items-center flex justify-center w-30 h-30"
                >
                    {releaseMessage}
                </div>
            </div>
        </div>
    );
};
