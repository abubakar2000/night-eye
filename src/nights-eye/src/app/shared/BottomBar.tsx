import clsx from 'clsx';
import { Link, useNavigate } from 'react-router-dom';

const BottomBar = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: "url('/images/bottomBar.svg')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '140pt',
        maxHeight: '100pt',
        width: '100%',
        backgroundSize: '100% 140pt',
      }}
      className={clsx(
        'flex items-center justify-center fixed bottom-0 bg-black',
        'rounded-full bg-opacity-60 backdrop-blur-lg'
      )}
    >
      <div className="flex flex-row justify-center w-full max-w-[650pt]">
        <div className="flex justify-center flex-1">
          <div
            className={clsx([
              'border-2 border-purple-600',
              'px-5 py-2 hover:bg-purple-900',
              'rounded-full duration-300 transition-all',
              'active:scale-95 cursor-pointer',
              'bg-black',
            ])}
            onClick={() => {
              navigate('/');
            }}
          >
            Owl Nest
          </div>
        </div>
        <div className="absolute">
          <Link to={'/quick-menu'}>
            <img
              src="/images/FAB.svg"
              alt=""
              className={clsx([
                'w-[60pt] aspect-square -translate-y-10',
                'active:scale-90 transition-all duration-500',
              ])}
            />
          </Link>
        </div>
        <div className="flex justify-center flex-1">
          <div
            className={clsx([
              'border-2 border-purple-600',
              'px-5 py-2 hover:bg-purple-900',
              'rounded-full duration-300 transition-all',
              'active:scale-95 cursor-pointer',
              'bg-black',
            ])}
            onClick={() => {
              navigate('/near-by-bars');
            }}
          >
            Near me
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
