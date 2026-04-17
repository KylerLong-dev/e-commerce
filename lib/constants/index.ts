//If a value is used in multiple places and doesn't change at runtime, it belongs in constants.
//If it changes at runtime, it belongs in state or environment variables.

export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Prostore";
export const APP_DESCRIPTION = 
    process.env.NEXT_PUBLIC_APP_DESCRIPTION || 
    "A modern e-commerce store built with Next.JS";
export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";