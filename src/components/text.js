import React from "react";

export default function Text({ value, style, className }) {
  return (
    <div>
      <p style={style} className={className}>
        {value}
      </p>
    </div>
  );
}
