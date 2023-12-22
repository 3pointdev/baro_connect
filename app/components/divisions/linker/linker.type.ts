import { ReactElement } from "react";

export interface LinkerProps {
  className?: string;
  notLoginable?: boolean;
  children: ReactElement | ReactElement[] | string;
  href: string;
}
