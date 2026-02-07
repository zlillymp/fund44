interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Rounded square background */}
      <rect width="40" height="40" rx="10" fill="currentColor" className="text-primary" />
      {/* "44" text */}
      <text
        x="20"
        y="27"
        textAnchor="middle"
        fontFamily="Outfit, sans-serif"
        fontWeight="800"
        fontSize="22"
        fill="white"
        letterSpacing="-1"
      >
        44
      </text>
    </svg>
  );
};
