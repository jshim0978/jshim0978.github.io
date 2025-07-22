import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
};

export default Container; 