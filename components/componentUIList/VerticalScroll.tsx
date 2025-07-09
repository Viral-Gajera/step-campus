export function VerticalScroll() {
    return (
        <div className="overflow-x-auto max-h-[400px]">
            <div className="bg-neutral-900 text-white p-4 rounded mt-3 h-[2000px] flex flex-col justify-between">
                <div id="start">Start</div>
                <div id="end">End</div>
            </div>
        </div>
    );
}
