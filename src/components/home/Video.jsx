import { X } from "lucide-react";
import React from "react";

const Video = ({ toggleVideo, setVideoBox }) => {
  const handleToggle = () => {
    setVideoBox(!toggleVideo);
  };

  return (
    <section className=" fixed left-2/4 top-18 translate-x-[-50%] h-[80%] w-[80%] z-49 bg-white ">
      <div 
      onClick={handleToggle} 
      className=" h-6 w-6 absolute top-5 right-5 bg-white text-black  rounded-full "
      title="Close Video Tab"
      
      >
        <X />
      </div>

      <iframe
        src="https://www.facebook.com/reel/500822593389492"
        frameBorder="0"
        allow=" autoplay;"
        title="video"
        allowFullScreen
        className=" h-full w-full"
      ></iframe>
    </section>
  );
};

export default Video;
