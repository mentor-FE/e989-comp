import React from 'react';

type TypographyProps = {
  variant?: 'heading' | 'subheading' | 'body';
  className?: string;
  children: React.ReactNode;
};

const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  className = '',
  children,
}) => {
  const Tag = variant === 'heading' ? 'h1' : variant === 'subheading' ? 'h2' : 'p';

  return <Tag className={`text-${variant} ${className}`}>{children}</Tag>;
};

export default Typography;
