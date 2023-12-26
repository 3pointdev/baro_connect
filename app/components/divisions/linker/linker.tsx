import Link from "next/link";
import { selectUserState } from "src/redux/reducers/auth/userReducer";
import { useAppSelector } from "src/redux/reduxHook";
import { LinkerProps } from "./linker.type";

export default function Linker({
  className,
  children,
  href,
  notLoginable = false,
}: LinkerProps) {
  const state = useAppSelector(selectUserState);

  if (state.isLogin || notLoginable) {
    return (
      <Link className={className} href={href}>
        {children}
      </Link>
    );
  } else {
    return (
      <Link className={className} href={"/login"}>
        {children}
      </Link>
    );
  }
}
