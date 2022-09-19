import { useEffect } from 'react';

const RulesBtn = ({ showRulesModal, toggleRulesModal }) => {
  const showRules = () => {
    window.scrollTo(0, 0);
    toggleRulesModal(true);
  };

  useEffect(() => {
    if (showRulesModal) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'unset';
    }
  }, [showRulesModal]);

  return (
    <div className="lg:relative w-fit mx-auto pt-12 pb-[8rem] lg:pb-[0]">
      <button
        className="lg:absolute lg:translate-x-[30rem] lg:-translate-y-[10rem] rules-btn py-2 px-8 text-slate-50 text-center border border-slate-400 rounded-lg"
        onClick={showRules}
      >
        RULES
      </button>
    </div>
  );
};

export default RulesBtn;
