"use client";

import { useState } from "react";

export const MouseOver = () => {
    const [isHovered, setIsHovered] = useState(false);
    const onMouseHover = (e: any) => {
        setIsHovered(true);
    };
    const onMouseLeave = (e: any) => {
        setIsHovered(false);
    };

    return (
        <>
            <div className="flex">
                <div className="w-1/2">
                    <div
                        className="bg-[#f4ae12] w-[100px] h-[50px] flex items-center justify-center  rounded-lg cursor-pointer hover:bg-[#ffd169]"
                        onMouseEnter={onMouseHover}
                        onMouseLeave={onMouseLeave}
                    >
                        Box
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="bg-neutral-900 w-[50%] text-white p-2 rounded">
                        {isHovered
                            ? "You are on the box"
                            : "You are off the box"}
                    </div>
                </div>
            </div>
        </>
    );
};
