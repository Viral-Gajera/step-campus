"use client";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export function ToggleButton() {
    const [message, setMessage] = useState("ON");
    const handleToggle = (value: any) => {
        const messageValue = value ? "ON" : "OFF";
        setMessage(messageValue);
    };
    return (
        <div className="flex">
            <div className="w-1/2 flex items-center">
                <span className="px-2">ON</span>
                <Switch onCheckedChange={handleToggle} />
                <span className="px-2">OFF</span>
            </div>
            <div className="w-1/2 bg-neutral-900 text-white p-2 rounded">
                You have {message} the switch.
            </div>
        </div>
    );
}
