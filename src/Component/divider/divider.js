import React from 'react';

const Divider = () => {
  return (
    <hr className="relative   // Position the divider relative to its parent
        mx-auto   // Center the divider horizontally
        my-6     // Set vertical margin (adjust as needed)
        h-2       // Set the height (4px in this case)
        w-3/4     // Set the width to 75% of the container, adjust as needed
        border-t-0
        bg-transparent
        bg-gradient-to-r from-transparent via-neutral-500 to-transparent
        opacity-55
        dark:via-neutral-400
        -translate-y-6 // Move the divider upwards to overlap" />
  );
};

export default Divider;
