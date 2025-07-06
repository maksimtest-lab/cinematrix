import React from "react";
import "./title.sass"

export function Title({ children }: { children: React.ReactNode }) {
    return (
        <h1>{children}</h1>
    )
}