import React from 'react';

export const ChatIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 22.81C11.31 22.81 10.66 22.46 10.2 21.85L8.7 19.85C8.67 19.81 8.55 19.76 8.5 19.75H8C3.83 19.75 1.25 18.62 1.25 13V8C1.25 3.58 3.58 1.25 8 1.25H16C20.42 1.25 22.75 3.58 22.75 8V13C22.75 17.42 20.42 19.75 16 19.75H15.5C15.42 19.75 15.35 19.79 15.3 19.85L13.8 21.85C13.34 22.46 12.69 22.81 12 22.81ZM8 2.75C4.42 2.75 2.75 4.42 2.75 8V13C2.75 17.52 4.3 18.25 8 18.25H8.5C9.01 18.25 9.59 18.54 9.9 18.95L11.4 20.95C11.75 21.41 12.25 21.41 12.6 20.95L14.1 18.95C14.43 18.51 14.95 18.25 15.5 18.25H16C19.58 18.25 21.25 16.58 21.25 13V8C21.25 4.42 19.58 2.75 16 2.75H8Z"
      fill="currentColor"
    />
    <path
      d="M12 12C11.44 12 11 11.55 11 11C11 10.45 11.45 10 12 10C12.55 10 13 10.45 13 11C13 11.55 12.56 12 12 12Z"
      fill="currentColor"
    />
    <path
      d="M16 12C15.44 12 15 11.55 15 11C15 10.45 15.45 10 16 10C16.55 10 17 10.45 17 11C17 11.55 16.56 12 16 12Z"
      fill="currentColor"
    />
    <path
      d="M8 12C7.44 12 7 11.55 7 11C7 10.45 7.45 10 8 10C8.55 10 9 10.45 9 11C9 11.55 8.56 12 8 12Z"
      fill="currentColor"
    />
  </svg>
);

export const ChevronRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="9"
    height="18"
    viewBox="0 0 9 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0.7475 17.3375C0.5575 17.3375 0.3675 17.2675 0.2175 17.1175C-0.0725 16.8275 -0.0725 16.3475 0.2175 16.0575L6.7375 9.5375C7.2175 9.0575 7.2175 8.2775 6.7375 7.7975L0.2175 1.2775C-0.0725 0.9875 -0.0725 0.5075 0.2175 0.2175C0.5075 -0.0725 0.987499 -0.0725 1.2775 0.2175L7.7975 6.7375C8.3075 7.2475 8.5975 7.9375 8.5975 8.6675C8.5975 9.3975 8.3175 10.0875 7.7975 10.5975L1.2775 17.1175C1.1275 17.2575 0.9375 17.3375 0.7475 17.3375Z"
      fill="currentColor"
    />
  </svg>
);

// ---------Example usage:---------
// import { ChatIcon, ChevronRightIcon } from "@/components/icons";

// export default function MyComponent() {
//   return (
//     <div className="flex items-center gap-2 text-primary">
//        <ChatIcon className="w-6 h-6" />
//        <span>Messages</span>
//        <ChevronRightIcon className="w-4 h-4 ml-auto" />
//     </div>
//   );
// }
