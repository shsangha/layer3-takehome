import BaseWrappedLink, { HeaderLinkProps } from "./base-wrapped-link";

export default function LinkLarge({
  children,
  href,
  onClick,
  ...props
}: HeaderLinkProps) {
  return (
    <BaseWrappedLink fw="bold" fz={36} href={href} onClick={onClick} {...props}>
      {children}
    </BaseWrappedLink>
  );
}
