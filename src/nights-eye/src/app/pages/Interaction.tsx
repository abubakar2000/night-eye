import React from 'react';
import BottomBar from '../shared/BottomBar';
import clsx from 'clsx';
import { IoIosArrowForward } from 'react-icons/io';

const Interaction = () => {
  return (
    <div className="h-screen overflow-scroll text-white relative">
      <div className="flex flex-col items-center pt-6 gap-3">
        <img src="/images/gradientLogo.svg" alt="" />
        <div className="bg-purple-500 flex px-2 py-1 rounded-full gap-1">
          <img src="/images/brightHalfMoon.svg" alt="" className="w-4" />
          <img src="/images/halfMoon.svg" alt="" className="w-4" />
          <img src="/images/halfMoon.svg" alt="" className="w-4" />
          <img src="/images/halfMoon.svg" alt="" className="w-4" />
          <img src="/images/halfMoon.svg" alt="" className="w-4" />
          <img src="/images/halfMoon.svg" alt="" className="w-4" />
          <img src="/images/halfMoon.svg" alt="" className="w-4" />
          <img src="/images/halfMoon.svg" alt="" className="w-4" />
          <img src="/images/halfMoon.svg" alt="" className="w-4" />
          <img src="/images/halfMoon.svg" alt="" className="w-4" />
          <img src="/images/halfMoon.svg" alt="" className="w-4" />
          <img src="/images/halfMoon.svg" alt="" className="w-4" />
          <img src="/images/halfMoon.svg" alt="" className="w-4" />
        </div>
        <div
          style={{ backgroundImage: "url('/backgrounds/splashBg.png')" }}
          className={clsx([
            'h-[50vh] w-full bg-cover bg-center mt-24 mb-3',
            'flex justify-center relative',
          ])}
        >
          <div
            className={clsx([
              'w-full text-center bg-gradient-to-b from-black to-transparent max-h-[20%]',
              'flex flex-col justify-center items-center gap-1',
            ])}
          >
            <div className="text-2xl font-semibold">Your just earned your</div>
            <img src="/images/firstEye.svg" alt="" className="h-10 w-full" />
            <div className="text-2xl font-semibold">Just for watching</div>
          </div>
          <div className="absolute bottom-20 font-semibold text-4xl">
            Marina
          </div>
        </div>
        <div className="text-xl">Stay up to date and redeem your points</div>
        <div
          className={clsx([
            'bg-gray-900 px-3 rounded-xl text-lg flex',
            'flex-row justify-between items-center',
            'py-3 px-5 w-[75%]',
            'shadow-lg shadow-purple-600',
          ])}
        >
          <input
            type="text"
            className="outline-none bg-transparent text-white pl-3"
            placeholder="Phone / Email"
          />
          <div className="bg-purple-600 p-3 rounded-full">
            <IoIosArrowForward />
          </div>
        </div>
      </div>
      <BottomBar />
    </div>
  );
};

export default Interaction;
