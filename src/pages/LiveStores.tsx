import { BiListCheck, BiStore } from "react-icons/bi";

const LiveStores = () => {
  return (
    <div className="p-3">
      <div className="bg-[#0d1206d7] rounded-md p-3">
        <img src="./img/live-stores.png" className="max-w-full" alt="" />
        <div className="flex flex-col md:flex-row gap-3 items-center mx-auto md:w-9/12 relative mt-[-100px]">
          <div className=" bg-[#5776260F] py-2 px-2 rounded-md md:w-6/12">
            <div className=" py-8 w-full h-full rounded-md border border-solid border-[#ffef1294] p-3">
              <div className="flex items-center gap-3 text-white justify-between">
                <div className="flex gap-3 items-center">
                  <span className="bg-[#DF0000] p-1"></span>
                  <p className="text-slate-400">Columbia</p>
                </div>
                <div className="flex gap-3 items-center">
                  <p className="bg-[#32421D] p-2 rounded flex items-center gap-2">
                    <BiListCheck className="text-lg" /> 1
                  </p>
                  <p className="bg-[#32421D] p-2 rounded flex items-center gap-2">
                    <BiStore /> Store Open
                  </p>
                </div>
              </div>
              <p className="text-white text-xl">LIMES</p>

              <div className="flex items-center gap-3 text-white justify-between mt-3">
                <div className=" text-slate-200">
                  <p>Costs</p>
                  <p className="text-white text-2xl">39K</p>
                </div>
                <div className="flex gap-5 items-center">
                  <div className=" text-slate-200">
                    <p>Sales</p>
                    <p className="text-white text-2xl">47K</p>
                  </div>
                  <p className="text-[#67AA00] text-2xl">+8k</p>
                </div>
              </div>
            </div>
          </div>

          <div className=" bg-[#5776260F] py-2 px-2 rounded-md md:w-6/12">
            <div className=" py-8 w-full h-full rounded-md border border-solid border-[#ffef1294] p-3">
              <div className="flex items-center gap-3 text-white justify-between">
                <div className="flex gap-3 items-center">
                  <span className="bg-[#DF0000] p-1"></span>
                  <p className="text-slate-400">Columbia</p>
                </div>
                <div className="flex gap-3 items-center">
                  <p className="bg-[#32421D] p-2 rounded flex items-center gap-2">
                    <BiListCheck className="text-lg" /> 1
                  </p>
                  <p className="bg-[#32421D] p-2 rounded flex items-center gap-2">
                    <BiStore /> Store Open
                  </p>
                </div>
              </div>
              <p className="text-white text-xl">LIMES</p>

              <div className="flex items-center gap-3 text-white justify-between mt-3">
                <div className=" text-slate-200">
                  <p>Costs</p>
                  <p className="text-white text-2xl">39K</p>
                </div>
                <div className="flex gap-5 items-center">
                  <div className=" text-slate-200">
                    <p>Sales</p>
                    <p className="text-white text-2xl">47K</p>
                  </div>
                  <p className="text-[#67AA00] text-2xl">+8k</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveStores;
