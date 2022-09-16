const RulesBtn = ({ toggleRulesModal }) => {
  const showRules = () => {
    window.scrollTo(0, 0);
    toggleRulesModal(true);
  };

  return (
    <div className="w-fit mx-auto py-14">
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
