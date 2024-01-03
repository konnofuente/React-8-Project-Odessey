import React from "react";

type Props = {
    length: number; // Correct the spelling here
};

export default function NumResult({length = 0}: Props) { // And here
    return (
        <div>
            <p className="num-results">
                Found <strong>{length}</strong> results
            </p>
        </div>
    );
}
