import { MouseEventHandler } from "react";

export interface LazyImageProps {
  alt: string;
  src: string;
  width?: number;
  height?: number;
  onClick?: MouseEventHandler;
  isRound?: boolean;
  addClass?: string;
}
