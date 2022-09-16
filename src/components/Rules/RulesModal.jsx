import RulesImg from '../../images/image-rules.svg';
import IconClose from '../../images/icon-close.svg';

const RulesModal = ({ toggleRulesModal }) => {
  return (
    <div className="absolute top-0 left-0 bg-slate-50 z-[100] w-[100vw] min-h-[100%] overflow-y-hidden">
      <div className="pt-28 pb-20">
        <h1 className="text-dark text-4xl font-bold text-center">Rules</h1>
      </div>
      <div className="w-[80%] pb-20 mx-auto">
        <img className="w-[100%]" src={RulesImg} alt="" />
      </div>
      <div className="w-[7%] mx-auto">
        <img
          className="w-[100%]"
          src={IconClose}
          alt=""
          onClick={() => toggleRulesModal(false)}
        />
      </div>
    </div>
  );
};

export default RulesModal;
