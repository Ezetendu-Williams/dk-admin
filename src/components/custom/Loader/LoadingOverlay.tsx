interface Props {
  isLoading: boolean;
  size?: string;
}

export default function LoadingOverlay({ isLoading, size }: Props) {
  return (
    <>
      {isLoading && (
        <div className="absolute top-0 left-0 w-full h-full grid place-content-center backdrop-blur-[3px] bg-[#070d1f57] z-[500000]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            width={size || "90"}
            height={size || "90"}
            style={{
              shapeRendering: "auto",
              display: "block",
              background: "transparent",
            }}
          >
            <g>
              <circle
                strokeLinecap="round"
                fill="none"
                strokeDasharray="50.26548245743669 50.26548245743669"
                stroke="#e80e0f"
                strokeWidth="8"
                r="32"
                cy="50"
                cx="50"
              >
                <animateTransform
                  values="0 50 50;360 50 50"
                  keyTimes="0;1"
                  repeatCount="indefinite"
                  dur="0.819672131147541s"
                  type="rotate"
                  attributeName="transform"
                ></animateTransform>
              </circle>
              <circle
                strokeLinecap="round"
                fill="none"
                strokeDashoffset="36.12831551628262"
                strokeDasharray="36.12831551628262 36.12831551628262"
                stroke="#101828"
                strokeWidth="8"
                r="23"
                cy="50"
                cx="50"
              >
                <animateTransform
                  values="0 50 50;-360 50 50"
                  keyTimes="0;1"
                  repeatCount="indefinite"
                  dur="0.819672131147541s"
                  type="rotate"
                  attributeName="transform"
                ></animateTransform>
              </circle>
              <g></g>
            </g>
          </svg>
        </div>
      )}
    </>
  );
}
