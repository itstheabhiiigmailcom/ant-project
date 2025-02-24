// import { BackgroundVideo } from '@/components/background-video';
// import HeroAnimation from '@/components/hero-animation';
// import ImageRotation from '@/components/image-rotation';
// // import { ContentOverVideo } from '@/components/content-over-video';
// import HorizontalVehicleMovement from '@/components/horizontal-vehicle-scroll';
import VehicleScrollEffect from '@/components/vehicle-scroll-effect';
import TerrainVehicleMovement from '@/components/terrain-vehicle-movement';
import VideoScrollEffect from '@/components/video-scroll-effect';

async function Home() {
  return (
    <>
      {/* <div className="bg-blue-500 py-[100vh]">
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

      <div className="h-300 w-full bg-blue-100" />
      <ImageRotation
        className="h-64 w-64"
        image="/image.png"
        threshold={0.5}
        rotate={15}
        rotateX={15}
        rotateY={-15}
      /> */}
      <div className="h-300 w-full bg-blue-300" />
      <VehicleScrollEffect
        topPosition={43} //63
        leftPosition={76.8} //49.8
        floatingImgScaleFactor={2.5}
        floatingImg="http://www.redanttechsys.com/assets/img/hero/concept-4.png"
        backgroundImage="/hilly_road2.jpg"
        className="h-[500vh]"
        floatingImgClassName="h-50 w-50"
      />

      {/* <div className="h-300 w-full bg-blue-300" />
      <HorizontalVehicleMovement
        skyImage="/sky.jpeg"
        treeImage="/tree-removebg-preview.png"
        trackImage="/track.jpeg"
        floatingImg="/car-removebg-preview.png"
        wheelSpinDuration={wheelSpinDuration} // Set custom duration for wheel spin
        floatingImgMovementDuration={floatingImgMovementDuration} // Set custom duration for car movement
        wheels={[
          {
            image: '/wheel1-removebg-preview.png',
            className: '-bottom-[2px] left-[34px]',
          },
          {
            image: '/wheel2-removebg-preview.png',
            className: '-bottom-[6px] left-[166px]',
          },
        ]}
        wheelClassName="h-[49px] w-[46px]"
        floatingBodyClassName="bottom-[77px] left-[3rem]"
        floatingImgClassName="h-[4.7rem] w-[17rem]"
        trackImgClassName="bottom-0 h-[20vh]"
        treeImgClassName="bottom-4 h-[87%]"
      /> */}

      <div className="h-300 w-full bg-blue-300" />
      <TerrainVehicleMovement
        terrainImage="/hilly_road.jpg"
        floatingImg="/jeep.png"
        wheels={[
          {
            image: '/wheel1-removebg-preview.png',
            x: 68, // Adjust X position
            y: 195, // Adjust Y position
          },
          {
            image: '/wheel2-removebg-preview.png',
            x: 187, // Adjust X position
            y: 195, // Adjust Y position
          },
        ]}
        wheelHeight={56}
        wheelWidth={56}
        floatingImgWidth={197}
        floatingImgHeight={100}
        floatingImgPosition={{ x: -22, y: 14, rotate: 8 }}
        wheelSpinDuration={{ sm: '1.2s', md: '0.8s', lg: '2s' }} // Set custom duration for wheel spin
        floatingImgMovementDuration={{ sm: '15s', md: '12s', lg: '25s' }} // Set custom duration for car movement
      />
      <div className="h-300 w-full bg-blue-300" />

      <div>
        <VideoScrollEffect
          videoSrc="https://videos.pexels.com/video-files/4562551/4562551-hd_1280_720_30fps.mp4"
          className="h-[500vh] w-full"
          videoClassName="opacity-80"
        >
          <div>
            <h1 className="text-4xl font-bold">First Content</h1>
            <p>This is the first section of content.</p>
          </div>
          <div>
            <h1 className="text-4xl font-bold">Second Content</h1>
            <p>This is the second section of content.</p>
          </div>
          <div>
            <h1 className="text-4xl font-bold">Third Content</h1>
            <p>This is the third section of content.</p>
          </div>
        </VideoScrollEffect>
      </div>
      <div className="h-300 w-full bg-blue-300" />
    </>
  );
}

export default Home;
