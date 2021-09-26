import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="React"
      viewBox="0 0 512 512"
      {...props}
    >
      <rect width={512} height={512} rx="15%" fill="#fff" />
      <circle cx={256} cy={256} r={36} fill="#61dafb" />
      <path
        stroke="#61dafb"
        strokeWidth={18}
        fill="none"
        d="M317.47 291.43a71 183 30 10-.05.09zm-122.89.09a183 71 60 10-.05-.09zm61.47 35.43a183 71 0 10-.1 0z"
      />
    </svg>
  );
}

export default SvgComponent;
