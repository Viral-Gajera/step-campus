"use client";

import { useRef, useState } from "react";

export function DragAndDrop() {
    const [pendinglist, setPendinglist] = useState([
        "Item 1",
        "Item 2",
        "Item 3",
        "Item 4",
        "Item 5",
        "Item 6",
        "Item 7",
        "Item 8",
    ]);
    const [droppedList, setDroppedList] = useState<any>([]);

    const onDragEvent = (e: any, id: any) => {
        e.dataTransfer.setData("id", id);
    };

    const onDragOverEvent = (e: any) => {
        e.preventDefault();
    };

    const onDropEvent = (e: any) => {
        e.preventDefault();
        const id = e.dataTransfer.getData("id");
        const data = pendinglist[id];

        const pList = pendinglist.filter((ele) => ele !== data);
        setPendinglist(pList);
        setDroppedList([...droppedList, data]);
    };

    const onDropEvent2 = (e: any) => {
        e.preventDefault();
        const id = e.dataTransfer.getData("id");
        const data = droppedList[id];
        const pList = droppedList.filter((ele: any) => ele !== data);
        setDroppedList(pList);
        setPendinglist((prev) => [...prev, data]);
    };
    return (
        <>
            <div className="flex">
                <div className="w-1/2">
                    <h3>Drag Items</h3>
                    <div
                        className="flex flex-wrap mt-2 border-2 h-[110px] border-dashed"
                        onDragOver={onDragOverEvent}
                        onDrop={onDropEvent2}
                    >
                        {pendinglist.map((ele, id) => {
                            return (
                                <div
                                    className="bg-[#f4ae12] m-2 p-2 w-[20%] h-[40px] rounded-lg cursor-pointer"
                                    draggable={true}
                                    onDragStart={(e) => onDragEvent(e, id)}
                                    key={id}
                                >
                                    {ele}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="w-1/2">
                    <h3>Drop Items</h3>
                    <div
                        className="mt-2 flex flex-wrap border-2 border-dashed h-[110px] border-l-0 bg-[#fff7e8]"
                        onDragOver={onDragOverEvent}
                        onDrop={onDropEvent}
                    >
                        {droppedList &&
                            droppedList.map((ele: any, id: any) => {
                                return (
                                    <div
                                        className="bg-[#f4ae12] m-2 p-2 w-[20%] h-[40px] rounded-lg cursor-pointer"
                                        key={id}
                                        draggable={true}
                                        onDragStart={(e) => onDragEvent(e, id)}
                                    >
                                        {ele}
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </>
    );
}
