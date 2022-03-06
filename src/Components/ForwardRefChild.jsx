import React, { forwardRef } from "react";
const InputBox = (props, ref) => {
  return (
    <div>
      <input type="text" placeholder="number" ref={ref} />
    </div>
  );
};

export default forwardRef(InputBox);
