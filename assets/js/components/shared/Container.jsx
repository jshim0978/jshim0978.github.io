import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-transparent">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        {children}
      </div>
    </div>
  );
};

export default Container;
