import { cloneElement } from 'react';
import { type TooltipProps, Tooltip } from 'react-tippy';

interface CustomTooltipProps extends TooltipProps {
  children: React.ReactNode;
}

const CustomTooltip: React.FC<CustomTooltipProps> = (props) =>
  cloneElement(<Tooltip />, { ...props });

export default CustomTooltip;
