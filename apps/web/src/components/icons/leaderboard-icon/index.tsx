export default function LeaderboardIcon({
  fill = "currentColor",
  stroke = "none",
  strokeWidth = "1",
}: {
  fill?: string;
  stroke?: string;
  strokeWidth?: string;
}) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 60 60"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M10.73,27.83H22A1.14,1.14,0,0,1,23.15,29V55.87A1.14,1.14,0,0,1,22,57H10.73A1.14,1.14,0,0,1,9.6,55.87V29A1.14,1.14,0,0,1,10.73,27.83Zm14.5-1V8.13A1.13,1.13,0,0,1,26.36,7H37.64a1.13,1.13,0,0,1,1.13,1.13V55.87A1.13,1.13,0,0,1,37.64,57H26.36a1.13,1.13,0,0,1-1.13-1.13ZM53.27,57H42a1.14,1.14,0,0,1-1.13-1.13V18.55A1.13,1.13,0,0,1,42,17.42H53.27a1.13,1.13,0,0,1,1.13,1.13V55.87A1.14,1.14,0,0,1,53.27,57Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
