import React, { useState } from 'react';

const videos = [
  {
    id: 1,
    thumbnail: '/test1.jpg', // should be an image, not .mp3
    videoUrl: '/test1.mp4',
    alt: 'Testimonial 1',
  },
  {
    id: 2,
    thumbnail: '/test2.jpg',
    videoUrl: '/test2.mp4',
    alt: 'Testimonial 2',
  },
];

const VideoTestimonials = () => {
  const [playing, setPlaying] = useState({});

  const handlePlay = (id) => {
    setPlaying((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="">
        <h2 className='text-5xl py-8 text-center '>Video Testimonials</h2>
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-8 bg-gray-50">
       
      {videos.map((video) => (
        <div key={video.id} className="w-full md:w-1/2 max-w-md">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            {playing[video.id] ? (
              <video
                controls
                autoPlay
                className="w-full h-96 object-cover"
                src={video.videoUrl}
              />
            ) : (
              <div
                className="relative w-full h-96 cursor-pointer group"
                onClick={() => handlePlay(video.id)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.alt}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-90">
                  <svg
                    className="w-12 h-96 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default VideoTestimonials;
