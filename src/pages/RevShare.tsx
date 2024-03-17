const RevShare = () => {
  return (
    <div className="p-4 px-2 text-white">
      <div className="bg-[#5776263D] grid grid-cols-1 md:grid-cols-2 gap-5 py-7 px-4 rounded-md items-center">
        <div className="p-2">
          <h2 className="text-center text-2xl my-2 mb-10">REVENUE SHARING</h2>

          <div className="my-2">
            <h4 className="text-[#FFF112] my-1">YOUR BALANCE: $12000.00</h4>
            <div className="flex items-center gap-3">
              <div className="w-4/6">
                <input
                  type="number"
                  placeholder="Enter amount to stake"
                  className="bg-[#19210C] rounded-md px-4 py-3 w-full placeholder:text-[#FFFFFF47]"
                />
              </div>
              <div className="w-1/6">
                <button className="bg-[#19210C] px-[19px] py-3 rounded-md text-[#8EC737] w-full">
                  MAX
                </button>
              </div>
              <div className="w-1/6">
                <button className="bg-gradient-to-r from-[#FFF112] to-[#8EC737] px-[19px] py-3 rounded-md text-[#0C1006] w-full">
                  Stake
                </button>
              </div>
            </div>
          </div>
          <div className="my-2">
            <p className="my-1">Staked $SPRAI</p>
            <div className="flex items-center gap-3">
              <div className="w-4/6">
                <p className="bg-[#19210C] rounded-md px-4 py-3 w-full">0</p>
              </div>
              <div className="w-2/6">
                <button className="bg-gradient-to-r from-[#FFF112] to-[#8EC737] px-[19px] py-3 rounded-md text-[#0C1006] w-full">
                  Withdraw
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-solid border-[#EFE514] my-4 mt-10 py-4">
            <div className="flex items-center justify-center gap-3 divide-x divide-[#EFE514]">
              <div className="p-3 text-center w-1/2">
                <h3 className="text-[#98D7468C] text-sm">Staked $PRAI</h3>
                <h2 className="text-white text-3xl">24M</h2>
              </div>
              <div className="p-3 text-center w-1/2">
                <h3 className="text-[#98D7468C] text-sm">Distributed</h3>
                <h2 className="text-white text-3xl">1.8ETH</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="grad bg-gradient-to-br from-[#57762617] p-[1px] via-[#FFF112] to-[#8EC737] rounded-md">
            <div className=" bg-[#36471a] py-8 w-full h-full rounded-md px-3">
              <h2 className="text-center text-2xl my-2 mb-10">YOUR REWARDS</h2>
              <div className="btns flex flex-col gap-3 w-8/12 md:w-7/12 mx-auto relative mb-[-110px]">
                <button className="bg-gradient-to-r from-[#FFF112] to-[#8EC737] px-[19px] py-3 rounded-md text-[#0C1006] w-full">
                  Compound Rewards
                </button>
                <button className="bg-transparent border border-solid border-[#FFF112] px-[19px] py-3 rounded-md text-white w-full">
                  Withdraw
                </button>
              </div>
              <img src="./img/world.svg" alt="world" className="max-w-full" />
              <p className="text-center w-11/12">
                With compounding, your rewards are used to buy and stake
                additional $SPRAI, increasing your revenue sharing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevShare;
