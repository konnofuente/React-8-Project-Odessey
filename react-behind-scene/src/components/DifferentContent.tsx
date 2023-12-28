import React from 'react'

type Props = {}

export default function DifferentContent({}: Props) {
    return (
        <div className="tab-content">
          <h4>I'm a DIFFERENT tab, so I reset state 💣💥</h4>
        </div>
      );
}