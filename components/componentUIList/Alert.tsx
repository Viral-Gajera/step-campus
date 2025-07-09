"use client";

import { Button } from "../ui/button";

export function Alert() {
    return (
        <Button onClick={() => alert("This is code step alert example!!")}>
            Click Here
        </Button>
    );
}
