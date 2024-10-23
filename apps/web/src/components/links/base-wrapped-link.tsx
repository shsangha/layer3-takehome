import { Anchor, AnchorProps } from "@repo/ui/components";
import Link from "next/link";
import { ReactNode } from "react";

export interface HeaderLinkProps extends AnchorProps {
  children: ReactNode;
  href: string;
  onClick?: () => void;
}

export default function BaseWrappedLink({
  children,
  href,
  ...props
}: HeaderLinkProps) {
  return (
    <Anchor component={Link} href={href} {...props}>
      {children}
    </Anchor>
  );
}
