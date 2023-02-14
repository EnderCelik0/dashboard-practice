import Card from './Card';
import { useState } from 'react';
import categories from '/categories.json';

export default function ProfileCard({ name, profilePicture }) {
  const [timeframe, setTimeframe] = useState(0); //0 = daily , 1 = weekly , 2 = monthly timeframe

  const dailyCard = categories.map((categories) => (
    <Card
      key={categories.title}
      title={categories.title}
      titleImage={categories.titleImage}
      timeframe={'Day'}
      background={'bg-lime-300'}
      shadow={`shadow-lime-300`}
      currentTime={categories.timeframes.daily.current}
      previousTime={categories.timeframes.daily.previous}
    />
  ));

  const weeklyCard = categories.map((categories) => (
    <Card
      key={categories.title}
      title={categories.title}
      titleImage={categories.titleImage}
      background={'bg-lime-500'}
      shadow={'shadow-lime-500'}
      timeframe={'Week'}
      currentTime={categories.timeframes.weekly.current}
      previousTime={categories.timeframes.weekly.previous}
    />
  ));

  const monthlyCard = categories.map((categories) => (
    <Card
      key={categories.title}
      title={categories.title}
      titleImage={categories.titleImage}
      background={'bg-lime-600'}
      shadow={'shadow-lime-600'}
      timeframe={'Month'}
      currentTime={categories.timeframes.monthly.current}
      previousTime={categories.timeframes.monthly.previous}
    />
  ));

  return (
    <>
      <div className='h-[170px] w-[290px] bg-dark-blue rounded-xl  flex flex-col justify-between mb-5'>
        <div className='flex items-center bg-blue-primary rounded-xl h-[110px] w-[290px]'>
          <img
            src={profilePicture}
            className='w-[60px] h-[60px] rounded-full border-2 m-5 mr-4'
          />
          <div className='text-pale-blue'>
            <p className='text-xs font-light'>Report for</p>
            <h2 className='text-[18px] font-[400]'>{name}</h2>
          </div>
        </div>
        <div className='flex justify-between font-light text-sm  text-desaturated-blue py-4 px-5'>
          <div
            onClick={() => setTimeframe(0)}
            className='cursor-pointer hover:text-pale-blue'
          >
            Daily
          </div>
          <div
            onClick={() => setTimeframe(1)}
            className='cursor-pointer hover:text-pale-blue'
          >
            Weekly
          </div>
          <div
            onClick={() => setTimeframe(2)}
            className='cursor-pointer hover:text-pale-blue'
          >
            Monthly
          </div>
        </div>
      </div>
      {timeframe === 0 && dailyCard}
      {timeframe === 1 && weeklyCard}
      {timeframe === 2 && monthlyCard}
    </>
  );
}
