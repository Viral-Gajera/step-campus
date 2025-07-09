"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export function Wait() {
    const [show, setShow] = useState(false);
    const [timer, setTimer] = useState(5);
    const [showTimer, setShowTimer] = useState(false);
    const handleClick = () => {
        const timerInterval = setInterval(() => {
            setTimer((old) => old - 1);
        }, 1000);

        setShowTimer(true);
        setTimeout(() => {
            clearInterval(timerInterval);
            setShow(true);
        }, 5000);
    };

    return (
        <div className="flex">
            <div className="w-1/2 flex">
                <Button onClick={handleClick}>Click To Show</Button>
                {showTimer && !show && <div className="ml-3 flex items-center">{timer}</div>}
            </div>
            <div className="w-1/2">
                {show && (
                    <div className="bg-neutral-900 text-white p-2 rounded">
                        Welcome to Step Campus!....
                    </div>
                )}
            </div>
        </div>
    );
}
