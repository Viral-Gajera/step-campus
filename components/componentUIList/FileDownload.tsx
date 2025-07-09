"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { toast, Toaster } from "sonner";

export function FileDownload() {
    const [show,setShow] = useState(false);
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "./logo.png";
        link.download = "step-campus"; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setShow(true);
        toast.success("File Downloaded Successfully")
    };
    return (
        <>
            <Button onClick={handleDownload}>Download File</Button>
            <Toaster position="top-center" richColors duration={5}/>
        </>
    );
}
