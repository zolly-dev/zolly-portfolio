type LogoProps = {
  fillColor: any;
  strokeColor: any;
  width: number;
  height: number;
};

export const Logo = ({ fillColor, strokeColor, width, height }: LogoProps) => {
  return (
    <svg
      width={width || 24}
      height={height || 24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x={0.5}
        y={0.5}
        width={23}
        height={23}
        rx={5.5}
        fill={fillColor}
        stroke={strokeColor}
      />
      <circle cx={12} cy={8} r={3} fill="#0091FF" />
      <circle cx={12} cy={16} r={3} fill="#0091FF" />
    </svg>
  );
};