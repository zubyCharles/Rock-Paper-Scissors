import RulesImg from '../../images/image-rules.svg';
import IconClose from '../../images/icon-close.svg';

const RulesModal = ({ toggleRulesModal }) => {
  return (
    <div className="absolute top-0 left-0 lg:top-[22%] lg:left-[38%] bg-slate-50 z-[100] w-[100vw] lg:w-[25vw] lg:h-auto h-[100%] overflow-y-hidden lg:rounded-md">
      <div className="pt-28 pb-20 lg:pt-6 lg:pb-8 lg:pl-8">
        <h1 className="text-dark text-4xl lg:text-3xl font-bold text-center lg:text-left">
          Rules
        </h1>
      </div>
      <div className="w-[80%] lg:w-[70%] pb-20 lg:pb-4 mx-auto">
        <img className="w-[100%]" src={RulesImg} alt="" />
      </div>
      <div className="w-[7%] mx-auto lg:absolute lg:top-8 lg:right-6 lg:pb-8 cursor-pointer">
        <img
          className="w-[100%] lg:w-[70%]"
          src={IconClose}
          alt=""
          onClick={() => toggleRulesModal(false)}
        />
      </div>
    </div>
  );
};

export default RulesModal;
