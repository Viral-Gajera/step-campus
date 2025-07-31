"use client";

import { useRef, useState } from "react";
import { Button } from "../ui/button";
import { toast, Toaster } from "sonner";

export function FileUpload({ isMultiple = true , isRename = false }) {
    const [openModal, setOpenModal] = useState(false);
    const [selectedFile, setSelectedFile] = useState<any>([]);
    const [selectedClickedFile, setSelectedClickedFile] = useState<File>();
    
    const fileChange = useRef<any>(null);
    const handleFileChange = (event: any) => {
        setSelectedFile([...event.target.files]);
        toast.success("File Uploaded Successfully");
    };

    const uploadFile = () => {
        if (fileChange.current) fileChange.current.click();
    };

    
    const handleRenameFile = (ele: File) => {
        setOpenModal(true);
        setSelectedClickedFile(ele);
    };

    const closeModal = () => {
        setOpenModal(false);
    };

    const onSubmit = (name: any) => {
        const extensionPart = selectedClickedFile?.name.split(".");
        const extension = extensionPart
            ? extensionPart[extensionPart?.length - 1]
            : "";
        if (selectedClickedFile) {
            const newFile = new File(
                [selectedClickedFile],
                `${name}.${extension}`,
                {
                    type: selectedClickedFile?.type,
                }
            );
            setSelectedFile([newFile]);
        }
    };

    return (
        <div className="flex">
            <div className="w-1/2 flex">
                <Button className="" onClick={() => uploadFile()}>
                    Upload file
                </Button>
                <input
                    type="file"
                    className="hidden"
                    ref={fileChange}
                    onChange={handleFileChange}
                    multiple={isMultiple}
                ></input>
            </div>
            <div className="w-1/2 border-l-2 pl-2 border-dashed">
                {selectedFile &&
                    selectedFile.map((ele: any, id: any) => {
                        return (
                            <div key={id} onClick={() => handleRenameFile(ele)}>
                                {ele.name}
                            </div>
                        );
                    })}
            </div>
            {openModal && isRename &&(
                <Modal
                    open={openModal}
                    closeModal={closeModal}
                    onSubmit={onSubmit}
                />
            )}
            <Toaster richColors position="top-center" />
        </div>
    );
}

export function Modal({ openModal = true, closeModal, onSubmit }: any) {
    const [isOpen, setIsOpen] = useState(openModal);
    const [name, setName] = useState("");
    const handleChange = () => {
        closeModal();
        onSubmit(name);
    };
    return (
        isOpen && (
            <div className="fixed top-0 left-0  backdrop-blur-xs flex items-center justify-center w-full h-full">
                <div className="m-auto border-1 rounded-xl bg-white border-black w-[30vw] h-[30vh] flex flex-col justify-center p-4">
                    <h3 className="my-2">Rename</h3>
                    <input
                        type="text"
                        className="my-2 p-2 border-1 border-gray-500 rounded-xl"
                        placeholder="Enter file name"
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                    <Button className="w-[20%] my-2" onClick={handleChange}>
                        Change
                    </Button>
                </div>
            </div>
        )
    );
}
