"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function CheckboxDemo() {
    return (
        <div className="flex flex-col gap-6">
            Select the items you want to display in the sidebar.
            <div className="flex items-center gap-3">
                <Checkbox className="cursor-pointer" id="item-1" />
                <Label className="cursor-pointer" htmlFor="item-1">
                    Recents
                </Label>
            </div>
            <div className="flex items-center gap-3">
                <Checkbox className="cursor-pointer" id="item-2" />
                <Label className="cursor-pointer" htmlFor="item-2">
                    Home
                </Label>
            </div>
            <div className="flex items-center gap-3">
                <Checkbox className="cursor-pointer" id="item-3" />
                <Label className="cursor-pointer" htmlFor="item-3">
                    Applications
                </Label>
            </div>
            <div className="flex items-center gap-3">
                <Checkbox className="cursor-pointer" id="item-4" />
                <Label className="cursor-pointer" htmlFor="item-4">
                    Downloads
                </Label>
            </div>
            <div className="flex items-center gap-3">
                <Checkbox className="cursor-pointer" id="item-5" />
                <Label className="cursor-pointer" htmlFor="item-5">
                    Documents
                </Label>
            </div>
        </div>
    );
}
