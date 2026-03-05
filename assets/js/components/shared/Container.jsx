import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-transparent">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
};

export default Container;
