"use client";

import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import logo from "@/resources/images/logo.svg";
import { Button } from "@/components/ui/button";

const ErrorPage = ({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Image
                src={logo}
                width={48}
                height={48}
                alt={`${APP_NAME}`}
                priority={true}
            />
            <div className="p-6 w-1/3 rounded-lg shadow-md text-center">
                <h1 className="text-3xl font-bold mb-4">Hmm, that didn&apos;t seem to work.</h1>
                <p className="text-destructive">{error.message}</p>
                <Button
                    variant="outline"
                    className="mt-4 ml-2 cursor-pointer"
                    onClick={() => reset()}
                >
                    Try again
                </Button>
            </div>
        </div>
    );
}

export default ErrorPage;