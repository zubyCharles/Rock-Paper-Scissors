import PaperImg from '../../images/icon-paper.svg';

const Paper = () => {
  return (
    <div className="relative paper-gradient w-[8rem] h-[8rem] grid place-items-center mx-auto rounded-[50%]">
      <div className="absolute w-[6rem] h-[6rem] grid place-items-center bg-slate-50 rounded-[50%]">
        <img className="w-fit" src={PaperImg} alt="" />
      </div>
    </div>
  );
};

export default Paper;
