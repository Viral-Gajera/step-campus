"use client";

import { useState } from "react";
import { Button } from "../ui/button";

export function Confirm() {
    let [touched, setTouched] = useState<boolean>();
    let [response, setResponse] = useState<boolean>();
    function handlerClick() {
        setTouched(true);
        let res = confirm("Welcome to Step Campus!!..");
        console.log(res);
        setResponse(res);
    }
    return (
        <div>
            <Button onClick={handlerClick}>Click Here</Button>
            {touched && (
                <div className="bg-neutral-900 text-white p-4 rounded mt-3">
                    You have clicked: {response ? "OK" : "CANCEL"}
                </div>
            )}
        </div>
    );
}
