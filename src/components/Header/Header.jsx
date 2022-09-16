import Logo from '../../images/logo.svg';

const Header = () => {
  return (
    <div className="pb-12">
      <div className="w-[100%] flex flex-row justify-between px-8 py-2 border-[2px] border-header-outline rounded-lg">
        <div className="w-[32%] grid place-content-center">
          <img className="w-[100%]" src={Logo} alt="" />
        </div>
        <div className="bg-slate-50 px-5 py-2 rounded">
          <small className="text-center">SCORE</small>
          <p className="text-center text-light text-4xl font-bold">12</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
