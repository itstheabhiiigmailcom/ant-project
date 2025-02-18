import { BackgroundVideo } from '@/components/background-video';
import HeroAnimation from '@/components/hero-animation';
import ImageComponent from '@/components/image-component';
import VehicleScrollEffect from '@/components/vehicle-scroll-effect';

async function Home() {
  return (
    <>
      <div className="bg-blue-500 py-[100vh]">
        <BackgroundVideo
          className="h-[700px] w-full"
          videoUrl="https://videos.pexels.com/video-files/4562551/4562551-hd_1280_720_30fps.mp4"
          thresholdView={0.5}
        >
          <h1 className="text- text-center text-xl font-bold text-white sm:text-2xl md:text-3xl lg:text-4xl">
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

      {/* <div>
        <CarComponent />
      </div> */}

      <div className="h-300 w-full bg-blue-100" />
      <ImageComponent
        className="h-64 w-64"
        image="/image.png"
        threshold={0.5}
        rotate={15}
        rotateX={15}
        rotateY={-15}
      />
      <div className="h-300 w-full bg-blue-100" />
      <VehicleScrollEffect
        floatingImg="http://www.redanttechsys.com/assets/img/hero/concept-4.png"
        backgroundImage="/road.jpeg"
        className="h-[500vh]"
      />
      <div className="h-300 w-full bg-blue-100" />
    </>
  );
}

export default Home;
