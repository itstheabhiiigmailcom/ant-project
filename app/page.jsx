import { BackgroundVideo } from '@/components/background-video';
import DroneHero from '@/components/drone-animation';

async function Home() {
  return (
    <>
      <div className="mx-auto w-[500px] bg-black py-[800px]">
        <BackgroundVideo
          className="h-[300px] w-full"
          // videoUrl="https://v.ftcdn.net/07/86/43/22/700_F_786432275_pFq56z7rEXtR8K18h3QpK0PVUiNTd2xl_ST.mp4"
          videoUrl="https://videos.pexels.com/video-files/4562551/4562551-hd_1280_720_30fps.mp4"
          thresholdView={0.5}
        >
          <h1 className="text-center text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
            Content Over the Background
          </h1>
        </BackgroundVideo>
      </div>
      <div className="relative h-[220vh] w-screen bg-black">
        <DroneHero
          backgroundImage="https://cdn.prod.website-files.com/63a1c2f787c35e5906961d4f/63a1c2f787c35e6c13961e55_442380534.webp"
          droneImage="https://cdn.prod.website-files.com/63a1c2f787c35e5906961d4f/63a1c2f787c35e1667961e56_Drone.webp"
          bgSize="cover" // Set background size dynamically
          droneWidth={300} // Change drone width dynamically
          droneHeight={300} // Change drone height dynamically
        />
      </div>

      <div className="h-300 w-full bg-blue-600" />
    </>
  );
}

export default Home;
