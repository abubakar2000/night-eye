/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import BottomBar from '../shared/BottomBar';
import { IoIosArrowBack } from 'react-icons/io';
import { FaSearch } from 'react-icons/fa';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

const Chat = () => {
  const navigate = useNavigate();
  return (
    <div className="text-white">
      <div className="">
        <div className="flex justify-between p-5 items-center gap-14">
          <div
            className="bg-gray-800 p-2 rounded-full"
            onClick={() => {
              navigate('..');
            }}
          >
            <IoIosArrowBack size={35} className="-translate-x-0.5" />
          </div>
          <div className="flex bg-gray-800 items-center px-4 rounded-xl flex-1">
            <input
              type="text"
              className={clsx([
                'outline-none bg-transparent text-white flex-1',
                'bg-gray-800 p-3 pl-0 ',
              ])}
              placeholder="Search the Chat"
            />
            <FaSearch size={25} />
          </div>
        </div>
        <div className="px-5 flex flex-col gap-8 mt-6">
          <div className="flex items-start gap-3">
            <div className="w-[40pt] bg-blue-600 aspect-square rounded-full"></div>
            <div className="max-w-[250pt] bg-gray-800 p-3 rounded-r-2xl rounded-bl-2xl">
              <div className="font-semibold">Anonymouse</div>
              <div>
                Duis aute irure dolor in in proident velit esse cillum dolore eu
                fugiat
              </div>
            </div>
          </div>
          <div className="flex items-start justify-end gap-3">
            <div className="max-w-[250pt] bg-purple-800 p-3 rounded-l-2xl rounded-br-2xl">
              <div className="font-semibold text-end">You</div>
              <div>
                Duis aute irure dolor in in proident velit esse cillum dolore eu
                fugiat
              </div>
            </div>
            <div className="w-[40pt] bg-purple-600 aspect-square rounded-full"></div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-[40pt] bg-blue-600 aspect-square rounded-full"></div>
            <div className="max-w-[250pt] bg-gray-800 p-3 rounded-r-2xl rounded-bl-2xl">
              <div className="font-semibold">Anonymouse</div>
              <div>
                <img
                  src="/backgrounds/barOutside.png"
                  alt=""
                  className="mt-3 rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="flex items-start justify-end gap-3">
            <div className="max-w-[250pt] bg-purple-800 p-3 rounded-l-2xl rounded-br-2xl">
              <div className="font-semibold text-end">You</div>
              <div className="text-5xl">😂</div>
            </div>
            <div className="w-[40pt] bg-purple-600 aspect-square rounded-full"></div>
          </div>
          <div className="flex items-start justify-end gap-3">
            <div className="max-w-[250pt] bg-purple-800 p-3 rounded-l-2xl rounded-br-2xl">
              <div className="font-semibold text-end">You</div>
              <div>Duis aute irure dolor in in proident fugiat</div>
            </div>
            <div className="w-[40pt] bg-purple-600 aspect-square rounded-full"></div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-[40pt] bg-blue-600 aspect-square rounded-full"></div>
            <div className="max-w-[250pt] bg-gray-800 p-3 rounded-r-2xl rounded-bl-2xl">
              <div className="font-semibold">Anonymouse</div>
              <div>
                Duis aute irure dolor in in proident velit esse cillum dolore eu
                fugiat
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomBar />
    </div>
  );
};

export default Chat;
