"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function () {
    const router = useRouter();
    return <Button onClick={() => router.back()}>Back</Button>;
}
