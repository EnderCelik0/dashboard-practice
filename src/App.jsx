import ProfileCard from './components/ProfileCard';

export default function App() {
  {
    return (
      <div className='flex flex-col items-center justify-center w-screen'>
        <ProfileCard
          profilePicture='../src/assets/images/image-jeremy.png'
          name='Jeremy Robson'
        />
      </div>
    );
  }
}
