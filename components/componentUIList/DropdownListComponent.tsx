"use client";

export const DropdownComponent = () => {
    return (
        <div className="flex">
            <div className="grow">
                <label htmlFor="select-fruits" className="block mb-3">
                    Select Fruits:
                </label>
                <select
                    name="select-fruits"
                    id="select-fruits"
                    className="block border border-neutral-500 rounded p-2 w-[300px]"
                >
                    <option value="apple">Apple</option>
                    <option value="banana">Banana</option>
                    <option value="blueberry">Blueberry</option>
                    <option value="grapes">Grapes</option>
                    <option value="pineapple">Pineapple</option>
                </select>
            </div>
        </div>
    );
};

{
    /* <Select>
<SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a fruit" />
</SelectTrigger>
<SelectContent>
    <SelectGroup>
        <SelectLabel>Fruits</SelectLabel>
        <SelectItem value="apple"></SelectItem>
        <SelectItem value="banana"></SelectItem>
        <SelectItem value="blueberry"></SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
    </SelectGroup>
</SelectContent>
</Select> */
}

// onKeyDown={(e) => {
//     if (e.key === "Enter") {
//         let selectedOption = countries.find(
//             (country) =>
//                 country.label.toLowerCase() ===
//                 inputValue.toLowerCase()
//         );
//         if (selectedOption) {
//             setInputValue(selectedOption.label);
//         }
//         setIsOpen(false);
//     }
// }}
