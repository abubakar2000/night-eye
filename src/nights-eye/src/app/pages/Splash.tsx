import { useCallback, useState } from 'react';
import clsx from 'clsx';
import {
  FaFacebookF,
  FaInstagram,
  FaPlay,
  FaSnapchatGhost,
} from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import BottomBar from '../shared/BottomBar';
import { IoMdShareAlt } from 'react-icons/io';

const Splash = () => {
  const [splashTapped, setSplashTapped] = useState(true);
  const [logoTapped, setLogoTapped] = useState(true);
  const [sloganTapped, setSloganTapped] = useState(false);

  const onClickSplash = useCallback(() => {
    setSplashTapped(!splashTapped);
  }, [splashTapped]);

  const onLogoTapped = useCallback(() => {
    setLogoTapped(!logoTapped);
  }, [logoTapped]);

  const onTapSlogan = useCallback(() => {
    setSloganTapped(!sloganTapped);
  }, [sloganTapped]);

  return (
    <div className="bg-black">
      <div
        className={clsx([
          'absolute z-40 text-white',
          !sloganTapped && 'hidden',
        ])}
      >
        <BottomBar />
      </div>

      <div
        className={clsx([
          'min-h-screen bg-black text-white',
          'duration-300 transition-all relative',
        ])}
      >
        <div
          onClick={onClickSplash}
          className={clsx([
            'duration-500 transition-all absolute min-h-screen flex justify-center items-center w-full',
            splashTapped ? 'opacity-0 scale-0' : 'opacity-100 scale-100',
          ])}
        >
          Tap here to continue
        </div>
        <img
          onClick={onLogoTapped}
          src="/images/logo.svg"
          alt="NightsEye"
          className={clsx([
            'duration-500 transition-all absolute',
            'w-full h-screen',
            splashTapped && !logoTapped
              ? 'scale-50 opacity-100'
              : 'scale-0 opacity-0',
          ])}
        />
        <div
          className={clsx([
            !sloganTapped && logoTapped
              ? 'scale-100 opacity-100'
              : 'scale-0 opacity-0',
            'min-h-screen justify-center ws',
            'duration-500 transition-all absolute',
            'flex flex-col items-center gap-4',
            'w-screen',
          ])}
          onClick={onTapSlogan}
        >
          <img
            src="/images/purpleLogo.svg"
            alt="purpleLogo"
            className="w-[100pt]"
          />
          <h1 className="text-center text-3xl font-semibold">
            Your Scout on a <br />{' '}
            <span className="text-purple-500">Night</span> Out
          </h1>
        </div>
        <div className="flex justify-center">
          <div
            className={clsx([
              'absolute duration-300 transition-all overscroll-auto ',
              sloganTapped ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
              'w-screen max-w-[430pt] min-h-screen flex flex-col items-center pt-24 text-center',
              'relative',
            ])}
            style={{
              backgroundImage: "url('/backgrounds/splashBg.png')",
              backgroundAttachment: 'fixed',
              backgroundPosition: 'center',
              backgroundSize: '100% 1000px',
              backgroundPositionY: '0px',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <img src="/images/gradientLogo.svg" alt="" className="w-[45pt]" />
            <h1 className="text-3xl font-semibold drop-shadow-2xl">
              Your Scout on a <br />
              <span className="text-purple-500">Night</span> Out
            </h1>
            <div className="my-7 text-lg text-purple-500 bg-black px-4 py-1 rounded-full bg-opacity-70 backdrop-blur-md">
              Bars near you
            </div>
            <div className="flex justify-center my-10">
              <div className="bg-black p-6 rounded-full backdrop-blur-md opacity-70">
                <FaPlay size={30} />
              </div>
            </div>
            <div className="shadow-2xl flex flex-col w-full justify-center bg-gradient-to-t from-black to-transparent">
              <img
                src="/backgrounds/image1.png"
                alt=""
                className="w-full bg-gradient-to-t from-black to-transparent"
              />
              <div className="p-2 w-[87%] self-center rounded-xl bg-black">
                <img
                  src="/backgrounds/image2.png"
                  alt=""
                  className="w-full self-center"
                />
              </div>
            </div>
            <div className="bg-black w-full flex flex-col items-center">
              <div
                className="w-[88%] my-4 bg-gradient-to-tl from-purple-900"
                style={{
                  backgroundImage: "url('/backgrounds/nighteyeText.png')",
                  backgroundRepeat: 'repeat',
                }}
              >
                <div className="my-10">
                  <div className="text-3xl font-semibold mb-11">
                    Let's Invite your buddies
                  </div>
                  <div
                    className={clsx([
                      'border-[5pt] uppercase p-4 text-3xl border-slate-800',
                      'rounded-2xl text-center',
                      'flex justify-center flex-col items-center gap-3',
                    ])}
                  >
                    <img src="/images/purpleLogo.svg" alt="" />
                    <p>
                      I am on NIGHTEYE <br />
                      Where are you??
                    </p>
                    <div className="flex justify-center gap-3">
                      <div className="bg-gray-700 p-2 rounded-full">
                        <FaInstagram />
                      </div>
                      <div className="bg-gray-700 p-2 rounded-full">
                        <FaSnapchatGhost />
                      </div>
                      <div className="bg-gray-700 p-2 rounded-full">
                        <IoMdShareAlt />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center p-4 gap-2">
                    <div className="w-3 aspect-square bg-white rounded-full" />
                    <div className="w-3 aspect-square bg-white rounded-full bg-opacity-30" />
                    <div className="w-3 aspect-square bg-white rounded-full bg-opacity-30" />
                  </div>
                </div>

                <h1
                  className={clsx([
                    'text-center text-purple-600 text-3xl',
                    'font-semibold uppercase tracking-wider',
                  ])}
                >
                  A better night
                  <br />
                  for your squad
                </h1>
                <div className={clsx(['flex justify-center py-11 my-4'])}>
                  <video
                    autoPlay
                    src="/movies/splashPageMovie.mov"
                    className="rounded-3xl h-[60vh]"
                  ></video>
                </div>
              </div>
              <div className="h-28 w-full bg-gradient-to-t from-purple-900 to-transparent" />
              <div
                className={clsx(['bg-black flex flex-col items-center my-20'])}
              >
                <img src="/images/logo.svg" alt="" className="w-10 mb-3" />
                <h1 className="text-center font-semibold text-3xl">
                  Your Scount on a <br />
                  <span className="text-purple-500">Night</span> Out
                </h1>
                <div className="flex flex-row gap-3 my-4">
                  <div className="border-2 p-3 rounded-full border-gray-600">
                    <FaFacebookF size={20} className="fill-purple-500" />
                  </div>
                  <div className="border-2 p-3 rounded-full border-gray-600">
                    <FaLinkedinIn size={20} className="fill-purple-500" />
                  </div>
                  <div className="border-2 p-3 rounded-full border-gray-600">
                    <FaTwitter size={20} className="fill-purple-500" />
                  </div>
                </div>
                <div className="underline my-1">Privacy Policy</div>
                <div className="underline my-1 mb-20">Terms % Conditions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
