import { BackgroundVideo } from '@/components/background-video';
import HeroAnimation from '@/components/rotation-animation';

async function Home() {
  return (
    <>
      <div className="mx-auto w-[500px] bg-black py-[120vh]">
        <BackgroundVideo
          className="h-[300px] w-full"
          videoUrl="https://videos.pexels.com/video-files/4562551/4562551-hd_1280_720_30fps.mp4"
          thresholdView={0.5}
        >
          <h1 className="text-center text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
            Content Over the Background
          </h1>
        </BackgroundVideo>
      </div>
      <div className="relative">
        <HeroAnimation
          backgroundImage="https://cdn.prod.website-files.com/63a1c2f787c35e5906961d4f/63a1c2f787c35e6c13961e55_442380534.webp"
          floatingImage="https://cdn.prod.website-files.com/63a1c2f787c35e5906961d4f/63a1c2f787c35e1667961e56_Drone.webp"
          className="h-[200vh] bg-black"
          floatingClassName="h-[300px] w-[300px]"
        />
      </div>

      <div className="h-300 w-full bg-blue-600" />
    </>
  );
}

export default Home;
