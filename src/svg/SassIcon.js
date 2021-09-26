import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Sass"
      viewBox="0 0 512 512"
      {...props}
    >
      <rect width={512} height={512} rx="15%" fill="#c69" />
      <path
        d="M258 88c-96 33-158 100-152 140s66 72 93 93c-35 18-79 45-78 80 2 48 54 33 76 19s44-53 30-94c31-8 58 2 66 8 31 22 15 47 4 51s-4 6 3 4 22-12 22-29c0-43-46-63-103-48-33-35-78-51-76-89 1-14 6-50 95-95s152-27 144 14c-12 62-120 104-158 68-2-4-9-7-5 4 20 50 182 27 189-79 2-56-79-71-150-47zm-86 320c-25 8-24-8-23-14 3-17 17-38 59-59 12 38-15 67-36 73z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgComponent;
