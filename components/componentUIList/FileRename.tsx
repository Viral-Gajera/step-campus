"use client";

import { useEffect, useRef, useState } from "react";
import { FileUpload } from "./FileUpload";

export function FileRename() {
    
    return (
        <FileUpload isMultiple={false} isRename={true}/>
    );
}

