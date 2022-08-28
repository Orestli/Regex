import React from "react";
import { Tooltip, TooltipProps } from "react-tippy";

interface CustomTooltipProps extends TooltipProps {
  children: React.ReactNode;
}

const CustomTooltip: React.FC<CustomTooltipProps> = (props) =>
  React.cloneElement(<Tooltip />, { ...props });

export default CustomTooltip;
