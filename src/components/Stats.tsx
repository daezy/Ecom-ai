const Stats = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="stat shadow-sm">
          <div className="icon w-fit mx-auto relative mb-[-28px]">
            <img src="./img/stat1.svg" width={80} alt="" />
          </div>
          <div className="text text-center bg-[#5776260F] py-2 px-2 rounded-md">
            <div className="grad bg-gradient-to-br from-[#57762617] p-[1px] via-[#FFF112] to-[#8EC737] rounded-md">
              <div className=" bg-[#36471a] py-8 w-full h-full rounded-md">
                <h3 className="text-[#98D7468C] text-sm">Total Revenue</h3>
                <h2 className="text-white text-5xl">$94K</h2>
              </div>
            </div>
          </div>
          <div className="mx-auto w-fit">
            <img src="./img/stats-bottom.png" alt="" />
          </div>
        </div>

        <div className="stat shadow-sm">
          <div className="icon w-fit mx-auto relative mb-[-28px]">
            <img src="./img/stat2.svg" width={80} alt="" />
          </div>
          <div className="text text-center bg-[#5776260F] py-2 px-2 rounded-md">
            <div className="grad bg-gradient-to-br from-[#57762617] p-[1px] via-[#FFF112] to-[#8EC737] rounded-md">
              <div className=" bg-[#36471a] py-8 w-full h-full rounded-md">
                <h3 className="text-[#98D7468C] text-sm">Stores Opened</h3>
                <h2 className="text-white text-5xl">7</h2>
              </div>
            </div>
          </div>
          <div className="mx-auto w-fit">
            <img src="./img/stats-bottom.png" alt="" />
          </div>
        </div>

        <div className="stat shadow-sm">
          <div className="icon w-fit mx-auto relative mb-[-28px]">
            <img src="./img/stat1.svg" width={80} alt="" />
          </div>
          <div className="text text-center bg-[#5776260F] py-2 px-2 rounded-md">
            <div className="grad bg-gradient-to-br from-[#57762617] p-[1px] via-[#FFF112] to-[#8EC737] rounded-md">
              <div className=" bg-[#36471a] py-8 w-full h-full rounded-md">
                <h3 className="text-[#98D7468C] text-sm">
                  Profits Distribution
                </h3>
                <h2 className="text-white text-5xl">1.8ETH</h2>
              </div>
            </div>
          </div>
          <div className="mx-auto w-fit">
            <img src="./img/stats-bottom.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
