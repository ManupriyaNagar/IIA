import React from 'react';

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
  return (
    <div className="bg-gray-100 py-16">
      <h2 className="text-5xl font-bold text-center mb-12 text-gray-800">
        Video Testimonials
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-6">
        {videos.map((video) => (
          <div key={video.id} className="w-full md:w-1/2 max-w-md">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <video
                className="w-full h-64 md:h-96 object-cover"
                src={video.videoUrl}
                autoPlay
                loop
                muted
                playsInline
              >
                Sorry, your browser doesn't support embedded videos.
              </video>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoTestimonials;
