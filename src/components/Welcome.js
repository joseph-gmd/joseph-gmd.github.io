import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/welcome.json'; // path to your Lottie file

const MyLottie = () => {
  return (
    <div className="w-60 sm:w-64 md:w-72 lg:w-80 xl:w-88 mx-auto">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default MyLottie;
