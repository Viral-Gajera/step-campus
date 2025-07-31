"use client";
import React, { useState } from "react";
import { Calendar } from "../ui/calendar";
import Image from "next/image";

export function DatePicker() {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [isOpen, setIsOpen] = useState(false);
    const onDateSelect = (e: any) => {
        if (e) {
            const selectedDate = new Date(e);
            setDate(selectedDate);
            setIsOpen(false);
        }
    };

    return (
        <>
            <div className="flex justify-between items-center">
                <div className="relative">
                    <div className="flex gap-4 items-center">
                        <h3>Date Picker:</h3>
                        <input
                            type="text"
                            value={date?.toDateString()}
                            className="bg-neutral-900 w-[50%] text-white p-2 rounded"
                        />
                        <div
                            className="cursor-pointer"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <Image
                                src={"/dateIcon.png"}
                                width={20}
                                height={20}
                                alt="Date Image"
                            />
                        </div>
                        {isOpen && (
                            <div className="absolute top-[20px] left-[380px] ">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={onDateSelect}
                                    className="rounded-md border shadow-sm"
                                    captionLayout="label"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
