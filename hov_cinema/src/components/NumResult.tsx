import React from "react";

type Props = {
    length: number; // Correct the spelling here
};

export default function NumResult({ length }: Props) { // And here
  return (
    <div>
      <p className="num-results">
        Found <strong>{length}</strong> results
      </p>
    </div>
  );
}
