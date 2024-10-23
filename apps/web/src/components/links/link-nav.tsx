import BaseWrappedLink, { HeaderLinkProps } from "./base-wrapped-link";

export default function LinkNav({ children, href, ...props }: HeaderLinkProps) {
  return (
    <BaseWrappedLink href={href} {...props}>
      {children}
    </BaseWrappedLink>
  );
}
