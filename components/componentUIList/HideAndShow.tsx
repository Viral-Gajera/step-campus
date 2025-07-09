"use client";
import { useState } from "react";
import { Button } from "../ui/button";

export function HideAndShow() {
    const [hide, setHide] = useState(false);
    return (
        <div className="flex flex-col">
            <div className="flex gap-2">
                <Button onClick={() => setHide(true)}>Hide</Button>
                <Button onClick={() => setHide(false)}>Show</Button>
            </div>
            <div>
                {!hide && (
                    <div className="bg-neutral-900 text-white p-4 rounded mt-3">
                        Welcome to Step Campus!!
                    </div>
                )}
            </div>
        </div>
    );
}
