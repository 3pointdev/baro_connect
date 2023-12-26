import { NextRouter } from "next/router";

export interface PageProps {
  router: NextRouter;
  isMobile: boolean;
}

export interface userAgentProps {
  userAgent: string;
}
