/* eslint-disable jsx-a11y/accessible-emoji */
import clsx from 'clsx';
import BottomBar from '../shared/BottomBar';
import { IoMdClose } from 'react-icons/io';

const Feedback = () => {
  return (
    <div className="h-screen overflow-scroll text-white relative bg-gradient-to-bl from-purple-900">
      <div>
        <div className="flex justify-end">
          <IoMdClose
            size={50}
            className="right-0 m-6 bg-gray-400 rounded-full p-2"
          />
        </div>
        <div className="mt-7">
          <div className="flex justify-center items-center gap-3">
            <div className="text-5xl">😔</div>
            <div className="text-5xl">🙁</div>
            <div className="text-5xl">😐</div>
            <div className="text-5xl">🙂</div>
            <div className="text-5xl">😀</div>
          </div>
          <div className="text-center my-4 text-3xl font-semibold tracking-wide">
            Choose your <span className="text-purple-500">experience</span>
          </div>
          <div className="p-5 flex justify-center">
            <textarea
              className="w-full p-5 text-lg rounded-2xl max-w-[500pt]"
              rows={7}
              placeholder="Suggest anything that we can approve"
            ></textarea>
          </div>
          <div className="flex justify-center items-center">
            <button
              className={clsx([
                'text-center bg-gradient-to-br from-purple-700 bg-blue-900 ',
                'rounded-full px-10 py-4 text-xl w-[60%] max-w-[300pt]',
              ])}
            >
              Send Feedback
            </button>
          </div>
        </div>
      </div>
      <BottomBar />
    </div>
  );
};

export default Feedback;
