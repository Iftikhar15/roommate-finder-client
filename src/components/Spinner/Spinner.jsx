import React, { useEffect, useState } from 'react';

const Spinner = ({ duration = 2000 }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!show) return null;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-16 h-16 border-4 border-cyan-500 border-dashed rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
