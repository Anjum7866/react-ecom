import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);

      setTimeout(() => {
        document.body.classList.remove('no-scroll');
      }, 2000);
    }, 2000);

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`preloader ${isLoading ? 'visible' : 'hidden'}`}>
      <div className="preloader-inner">
        <div className="preloader-icon">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
