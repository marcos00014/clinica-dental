function DentalTooth({ size = 34, strokeWidth = 1.8 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M7.6 3.7C9.2 2.9 10.7 4 12 4s2.8-1.1 4.4-.3c2.4 1.1 3.1 4.2 2.2 7.1-.6 1.9-1.4 3-1.8 5.5-.4 2.3-1 4.2-2.3 4.2-1.1 0-1.4-1.4-1.8-3.1-.2-.9-.4-1.7-.7-1.7s-.5.8-.7 1.7c-.4 1.7-.7 3.1-1.8 3.1-1.3 0-1.9-1.9-2.3-4.2-.4-2.5-1.2-3.6-1.8-5.5-.9-2.9-.2-6 2.2-7.1Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 6.8c.8.4 1.7.6 2.8.6s2-.2 2.8-.6"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default DentalTooth;
