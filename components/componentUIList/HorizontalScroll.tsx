export function HorizontalScroll() {
    return (
        <div className="overflow-x-auto max-w-[100%]">
            <div className="bg-neutral-900 text-white p-4 rounded mt-3 w-[2000px] flex justify-between">
                <div id="start">Start</div>
                <div id="end">End</div>
            </div>
        </div>
    );
}
