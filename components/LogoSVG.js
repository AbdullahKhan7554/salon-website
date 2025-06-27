// components/LogoSVG.jsx

export default function LogoSVG({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="currentColor"
      preserveAspectRatio="xMidYMid meet"
      className={className}
    >
      {/* Example: Replace with your actual SVG paths */}
      <circle cx="50" cy="50" r="40" className="animate-pulse text-white" />
      <text
        x="50"
        y="55"
        textAnchor="middle"
        fontSize="22"
        fill="white"
        className="font-bold"
      >
        S
      </text>
    </svg>
  );
}
