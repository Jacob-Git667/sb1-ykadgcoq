import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="text-[#070945] hover:text-[#0a0c5e] transition-all hover:scale-105 font-medium"
    >
      {children}
    </a>
  );
}