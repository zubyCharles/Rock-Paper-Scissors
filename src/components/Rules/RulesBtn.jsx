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
    <div className="w-fit mx-auto pt-12 pb-[8rem]">
      <button
        className="rules-btn py-2 px-8 text-slate-50 text-center border border-slate-400 rounded-lg"
        onClick={showRules}
      >
        RULES
      </button>
    </div>
  );
};

export default RulesBtn;
