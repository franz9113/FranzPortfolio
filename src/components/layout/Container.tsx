import React from 'react';

const Container = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`max-w-[1440px] mx-auto px-6 md:px-12 ${className}`}>
      {children}
    </div>
  );
};

export default Container;