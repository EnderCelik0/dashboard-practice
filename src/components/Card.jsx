import ellipses from '../assets/images/icon-ellipsis.svg';

export default function Card({
  title,
  titleImage,
  background,
  shadow,
  timeframe,
  previousTime,
  currentTime,
}) {
  return (
    <div
      className={`overflow-hidden relative h-[150px] w-[290px]  rounded-xl mb-5 bg-blue-primary shadow-md ${shadow} ${background}`}
    >
      <img
        className='w-[60px] h-[60px] absolute -top-2 right-2 '
        src={titleImage}
      />
      <div className=' relative top-8  flex flex-col items-center justify-center rounded-xl h-[130px] w-[290px] p-5  bg-dark-blue text-pale-blue'>
        <div className='flex items-center justify-between w-full'>
          <div className='font-[500]'>{title}</div>
          <img className='cursor-pointer' src={ellipses} />
        </div>
        <div className='flex items-center justify-between w-full'>
          <div className='text-[24px] font-light'>{currentTime}hrs</div>
          <div className='text-[14px] font-light'>
            Last {timeframe} - {previousTime}hrs
          </div>
        </div>
      </div>
    </div>
  );
}
