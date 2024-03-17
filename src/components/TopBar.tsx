const TopBar = () => {
  return (
    <nav className="container mx-auto px-4 py-3">
      <div className="flex justify-between items-center gap-3">
        <div className="brand">
          <img src="./img/logo.png" className="max-w-full" alt="logo" />
        </div>
        <div className="connect">
          <button className="bg-gradient-to-r from-[#FFF112] to-[#8EC737] px-[19px] py-3 rounded-md text-[#0C1006]">
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
