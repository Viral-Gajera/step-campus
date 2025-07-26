export const ValidateCss = () => {
    const elementList = [
        {
            title: "Color",
            elements: "This is red color",
            className: "text-red-500",
        },
        {
            title: "Background color",
            elements: "Green Background",
            className: "bg-green-500 p-1",
        },
        {
            title: "Font weight",
            elements: "Large Font Size",
            className: "text-xl",
        },
        {
            title: "Bold Text",
            elements: "Bold",
            className: "font-extrabold",
        },
        {
            title: "Box with Border",
            elements: "Box with Border",
            className: "border-2 p-1",
        },
        {
            title: "Border dashed",
            elements: "Border dashed",
            className: " p-1 border-2 border-black border-dashed",
        },
        {
            title: "Height",
            elements: "Height - 180px",
            className: "h-[180px] w-[80px] border-2 p-1 m-2",
        },
        {
            title: "Width",
            elements: "Width - 180px",
            className: "h-[40px] w-[180px] p-1 border-2",
        },
        {
            title: "Background gradient",
            elements: "Box 1",
            className: "bg-linear-to-r from-cyan-500 to-blue-500 p-2",
        },
    ];

    return (
        <>
            <div>
                {elementList.map((ele, index) => {
                    return (
                        <div
                            key={index}
                            className="flex gap-20 items-center border-2 p-2 m-2 w-[80%] rounded-lg"
                        >
                            <div className="w-1/3">{ele.title}</div>
                            <div className={ele.className}>{ele.elements}</div>
                        </div>
                    );
                })}
                <div className="flex gap-20 items-center border-2 p-2 m-2 w-[80%] rounded-lg">
                    <div className="w-1/3">Display Flex Row</div>
                    <div className="flex gap-5 items-center">
                        <div className="border-2 p-2">Box 1</div>
                        <div className="border-2 p-2">Box 2</div>
                    </div>
                </div>
                <div className="flex gap-20 items-center border-2 p-2 m-2 w-[80%] rounded-lg">
                    <div className="w-1/3">Display Flex Column</div>
                    <div className="flex flex-col gap-5 items-center">
                        <div className="border-2 p-2">Box 1</div>
                        <div className="border-2 p-2">Box 2</div>
                    </div>
                </div>
                <div className="flex gap-20 items-center border-2 p-2 m-2 w-[80%] rounded-lg">
                    <div className="w-1/3">Vertical Scroll</div>
                    <div className="flex h-[100px] w-[200px] border-2 flex-col gap-5 items-center overflow-y-auto">
                        <p>
                            You are at the top. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Eius, quae culpa.
                            Nihil quidem perspiciatis ullam harum eum
                            reprehenderit cum voluptas saepe tenetur excepturi.
                            Non officiis, consectetur qui aliquid aspernatur
                            neque. You have reached at the end
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
