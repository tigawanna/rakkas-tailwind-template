interface AppLogoProps {
  height?: string;
  width?: string;
}

export function AppLogo({ height = "40px", width = "40px" }: AppLogoProps) {
  return (
    <svg
      fill="#f8d00d"
      height={height}
      width={width}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 492.308 492.308"
      xmlSpace="preserve"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <g>
            <path d="M379.75,124.774c-3.01-0.226-6.019-0.332-8.289-0.308c-0.913-0.077-96.471-7.106-134.731,118.827 c-33.442,110.082-110.913,105.197-115.01,104.889c-1.529,0-3.067-0.034-4.606-0.106c-54.625-2.423-97.423-47.192-97.423-101.923 c0-56.26,45.769-102.034,102.029-102.034c34.875,0,66.981,17.538,85.885,46.918l16.558-10.654 c-22.538-35.038-60.837-55.957-102.442-55.957C54.606,124.428,0,179.034,0,246.154c0,65.293,51.058,118.707,116.231,121.596 c1.817,0.082,3.635,0.111,4.615,0.086c0.096,0.01,1.25,0.096,3.269,0.096c17.183,0,97.221-6.231,131.462-118.918 c33.442-110.091,110.933-105.173,115.01-104.894c2.587,0,5.164,0.101,7.702,0.288c52.894,3.942,94.327,48.63,94.327,101.745 c0,56.26-45.769,102.029-102.029,102.029c-34.875,0-66.971-17.538-85.875-46.918l-16.558,10.654 c22.538,35.038,60.827,55.957,102.433,55.957c67.115,0,121.721-54.606,121.721-121.721 C492.308,182.789,442.865,129.472,379.75,124.774z"></path>
          </g>
        </g>
      </g>
    </svg>
  );
}
