import ScissorsImg from '../../images/icon-scissors.svg';

const Scissors = () => {
  return (
    <div className="relative scissors-gradient w-[7rem] h-[7rem] grid place-items-center mx-auto rounded-[50%]">
      <div className="absolute w-[5rem] h-[5rem] grid place-items-center bg-slate-50 rounded-[50%]">
        <img className="w-fit" src={ScissorsImg} alt="" />
      </div>
    </div>
  );
};

export default Scissors;
