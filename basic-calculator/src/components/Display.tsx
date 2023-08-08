import React from "react";
import "../Css/Display.css"

export const Display = ({ input }: { input: string }) => (
    <div className="display">
        {input}
    </div>
);