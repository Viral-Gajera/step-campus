"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react";
import Link from "next/link";
import useRandom from "@/hooks/useRandom";

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const EMAIL = `stepcampus@gmail.com`;
    const PASSWORD = `stepcampus123`;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSuccess, setIsSuccess] = useState("");
    const [captchaInput, setCaptchaInput] = useState("");
    const [message, setMessage] = useState("");

    const [num1] = useState(useRandom(50, 100, true));
    const [num2] = useState(useRandom(0, 50, false));
    const [op] = useState((num1 + num2) % 2 === 0 ? "+" : "-");
    const [result] = useState(op==="+"?num1+num2:num1-num2);

    function loginHandler(e: any) {
        if (!email || !password || !captchaInput) {
            return;
        }

        e.preventDefault();

        if(Number(captchaInput) != result){
            setIsSuccess("FALSE");
            setMessage("Invalid Captcha");
            return;
        }

        if (email.toLowerCase() === EMAIL && password === PASSWORD) {
            setIsSuccess("TRUE");
            setMessage("Success! Login Successful");
            setEmail("");
            setPassword("");
            setCaptchaInput("");
        } else {
            setIsSuccess("FALSE");
            setMessage("Failed! Invalid Credential");
        }
    }

    return (
        <div
            className={cn(
                "mx-auto flex flex-col gap-6 max-w-[400px]",
                className
            )}
            {...props}
        >
            {isSuccess == "TRUE" ? (
                <Alert>
                    <CheckCircle2Icon />
                    <AlertTitle>{message}</AlertTitle>
                </Alert>
            ) : (
                ""
            )}
            {isSuccess == "FALSE" ? (
                <Alert className="text-red-500">
                    <AlertCircleIcon />
                    <AlertTitle>{message}</AlertTitle>
                </Alert>
            ) : (
                ""
            )}
            <Card>
                <CardHeader>
                    <CardTitle className="mb-2 text-xl">
                        Login to your account
                    </CardTitle>
                    <CardDescription>
                        <div className="mb-1">
                            Use below credential to execute Login:
                        </div>
                        <div>
                            Email:{" "}
                            <span className="font-semibold text-black">
                                {EMAIL}
                            </span>
                        </div>
                        <div>
                            Password:{" "}
                            <span className="font-semibold text-black">
                                {PASSWORD}
                            </span>
                        </div>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-3">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="*****"
                                    required
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="password">Solve Captcha</Label>
                                <div className="flex items-center gap-5" >
                                    <div className="text-xl" >{num1}</div>
                                    <div className="text-xl" >{op}</div>
                                    <div className="text-xl" >{num2}</div>
                                    <div className="text-xl" >=</div>
                                    <div>
                                        <Input
                                            id="captcha-input"
                                            type="number"
                                            placeholder="Enter Here"
                                            required
                                            value={captchaInput}
                                            onChange={(e) =>
                                                setCaptchaInput(e.target.value)
                                            }
                                            className="text-center"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <Button
                                    type="submit"
                                    className="w-full"
                                    onClick={loginHandler}
                                >
                                    Login
                                </Button>
                            </div>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <Link
                                href="sign-up"
                                className="underline underline-offset-4"
                            >
                                Sign up
                            </Link>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
