import React, { useState } from "react";

const InputField = () => {
  const [modalopen, setModalopen] = useState(false);
  const copyHandler = () => {
    console.log("copy handler is working");
  };
  return (
    <>
      <div className="flex">
        <input
          type="text"
          className="block w-2xl px-6 py-2 bg-neutral-600 border-rose-600 rounded-l-2xl focus:outline-1 outline-indigo-300"
          placeholder="Paste your text here"
        />
        <button
          className="bg-blue-500 px-6 rounded-r-xl text-sm font-bold tracking-widest uppercase"
          onClick={() => {
            setModalopen(true);
          }}
        >
          get
        </button>
      </div>
      {modalopen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-neutral-800 border border-neutral-700 p-8 rounded-2xl shadow-2xl text-center max-w-sm w-screen mx-4">
            <h2 className="text-2xl font-bold text-white mb-8">Success!</h2>
            <div className="flex mb-2">
              <input
                type="text"
                className="block w-2xl px-6 py-2 bg-neutral-600 border-rose-600 rounded-l-2xl focus:outline-1 outline-indigo-300"
                placeholder="Paste your text here"
                readOnly
              />
              <button
                className="bg-blue-500 px-6 rounded-r-xl text-sm font-bold tracking-widest uppercase"
                onClick={() => {
                  copyHandler();
                  setModalopen(false);
                }}
              >
                COPY
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InputField;
