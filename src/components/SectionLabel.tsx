import React from 'react';

interface SectionLabelProps {
  number: string;
  children: React.ReactNode;
}

export function SectionLabel({ number, children }: SectionLabelProps) {
  return (
    <span className="section-label">
      <span>{number}</span> <b>{children}</b>
    </span>
  );
}
