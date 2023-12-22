import { ReactElement } from "react";

export interface PageArticleProps {
  children: ReactElement | ReactElement[] | string;
  addClass?: string;
}
