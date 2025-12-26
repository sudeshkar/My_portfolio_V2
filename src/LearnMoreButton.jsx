import React from 'react';

const Button = () => {
  return (
    <button className="md:mt-5 md:w-1/5 w-1/3 mt-2 relative md:p-2 p-1 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
        Learn More ➡️
    </button>
  );
}

export default Button;
