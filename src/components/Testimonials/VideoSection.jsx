import React, { useRef, useState } from 'react';

const videos = [
  {
    id: 1,
    videoUrl: '/test1.mp4',
    alt: 'Testimonial 1',
  },
  {
    id: 2,
    videoUrl: '/test2.mp4',
    alt: 'Testimonial 2',
  },
];

const VideoTestimonials = () => {
  const [activeVideoId, setActiveVideoId] = useState(null);
  const videoRefs = useRef({});

  const toggleVideo = (id) => {
    const clickedVideo = videoRefs.current[id];
    if (!clickedVideo) return;

    if (activeVideoId === id) {
      // Pause & mute the active video
      clickedVideo.pause();
      clickedVideo.muted = true;
      setActiveVideoId(null);
    } else {
      // Pause & mute any other active video
      if (activeVideoId !== null) {
        const activeVideo = videoRefs.current[activeVideoId];
        if (activeVideo) {
          activeVideo.pause();
          activeVideo.muted = true;
        }
      }

      // Unmute & play clicked video
      clickedVideo.muted = false;
      const playPromise = clickedVideo.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setActiveVideoId(id);
          })
          .catch(() => {
            // If autoplay with sound fails, fallback to muted play
            clickedVideo.muted = true;
            clickedVideo.play();
            setActiveVideoId(null);
          });
      } else {
        setActiveVideoId(id);
      }
    }
  };

  return (
    <div className="bg-gray-100 py-16">
      <h2 className="text-5xl font-bold text-center mb-12 text-gray-800">
        Video Testimonials
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="w-full md:w-1/2 max-w-md cursor-pointer"
            onClick={() => toggleVideo(video.id)}
          >
            <div className="rounded-xl overflow-hidden shadow-xl">
              <video
                ref={(el) => (videoRefs.current[video.id] = el)}
                className="w-full h-64 md:h-96 object-cover"
                src={video.videoUrl}
                autoPlay
                loop
                muted={activeVideoId !== video.id}
                playsInline
              >
                Sorry, your browser doesn't support embedded videos.
              </video>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center mt-6 text-gray-600 italic">
        Click a video to play with sound, click again to pause.
      </p>
    </div>
  );
};

export default VideoTestimonials;
