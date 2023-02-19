import { useState } from "react";
import "./Tooltip.css";

export interface TooltipProps {
  children: JSX.Element;
  label: string;
  direction?: string;
  delay?: number;
}
const Tooltip = ({ children, label, direction, delay }: TooltipProps) => {
  let timeout: NodeJS.Timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay || 350);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className="inline-block relative"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {active && (
        <div className={`Tooltip-Tip ${direction || "bottom"}`}>{label}</div>
      )}
    </div>
  );
};

export default Tooltip;
