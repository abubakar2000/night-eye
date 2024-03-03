import { useCallback, useState } from 'react';
import clsx from 'clsx';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Splash = () => {
  const [splashTapped, setSplashTapped] = useState(false);
  const [logoTapped, setLogoTapped] = useState(false);
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
          'fixed z-50 w-full bottom-0 text-white',
          'duration-300 transition-all',
          !sloganTapped ? 'translate-y-52' : 'translate-y-0',
        ])}
      >
        <div className="flex items-center w-full justify-center py-5 z-40">
          <div className="flex justify-between items-center w-[280pt]">
            <div className="flex items-end justify-between w-full mx-[30pt] relative">
              <div className="text-md border border-purple-600 px-4 py-2 min-w-[50pt] rounded-3xl shadow-lg shadow-purple-900 bg-black">
                Owl Nest
              </div>
              <img src="/images/FAB.svg" alt="" className="h-14 w-14" />
              <div className="text-md border border-purple-600 px-4 py-2 min-w-[50pt] rounded-3xl shadow-lg shadow-purple-900 bg-black">
                Near Me
              </div>
            </div>
          </div>
        </div>
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
        <div
          className={clsx([
            'absolute duration-300 transition-all overscroll-auto ',
            sloganTapped ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
            'w-screen min-h-screen flex flex-col items-center pt-24 text-center',
            'relative',
          ])}
          style={{
            backgroundImage: "url('/backgrounds/splashBg.png')",
            backgroundAttachment: 'fixed',
          }}
        >
          <img src="/images/gradientLogo.svg" alt="" className="w-[45pt]" />
          <h1 className="text-3xl font-semibold drop-shadow-2xl">
            Your Scout on a <br />
            <span className="text-purple-500">Night</span> Out
          </h1>
          <div className="my-7 text-lg text-purple-500">Bars near you</div>
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
              <img src="/backgrounds/cards.png" alt="" className="w-full " />
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
                <img
                  src="/backgrounds/lady.png"
                  alt=""
                  className="w-[75%] shadow-2xl shadow-purple-900 rounded-2xl"
                />
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
  );
};

export default Splash;
