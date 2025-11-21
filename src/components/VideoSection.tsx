import { Play } from 'lucide-react';
import { useState } from 'react';

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    const video = document.getElementById('intro-video') as HTMLVideoElement;
    if (video) {
      video.play();
    }
  };

  return (
    <section className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-white mb-8 tracking-tight">
              Philosophy & Process
            </h2>
            <p className="text-gray-400 mb-12 leading-relaxed">
              Discover my approach to design—where precision meets creativity, and every detail serves a purpose.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4 pb-6 border-b border-gray-800">
                <div className="text-gray-500 mt-1 tracking-wider">01</div>
                <div>
                  <div className="text-white mb-2 tracking-wide">Creative Process</div>
                  <div className="text-gray-500 leading-relaxed">From concept to execution with meticulous attention</div>
                </div>
              </div>
              <div className="flex items-start gap-4 pb-6 border-b border-gray-800">
                <div className="text-gray-500 mt-1 tracking-wider">02</div>
                <div>
                  <div className="text-white mb-2 tracking-wide">Design Philosophy</div>
                  <div className="text-gray-500 leading-relaxed">Timeless elegance through minimal sophistication</div>
                </div>
              </div>
              <div className="flex items-start gap-4 pb-6 border-b border-gray-800">
                <div className="text-gray-500 mt-1 tracking-wider">03</div>
                <div>
                  <div className="text-white mb-2 tracking-wide">Client Collaboration</div>
                  <div className="text-gray-500 leading-relaxed">Partnership-driven approach to exceed expectations</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Video */}
          <div className="relative">
            <div className="aspect-video border border-gray-800 overflow-hidden bg-gray-900">
              {/* Video Element - Replace the src with your actual video URL */}
              <video
                id="intro-video"
                className="w-full h-full object-cover"
                controls
                poster=""
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                {/* Add your video source here */}
                <source src="public/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play Button Overlay */}
              {!isPlaying && (
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black/50 cursor-pointer group"
                  onClick={handlePlay}
                >
                  <div className="border border-white p-6 group-hover:bg-white group-hover:border-transparent transition-all duration-300">
                    <Play className="h-10 w-10 text-white group-hover:text-black group-hover:fill-black transition-colors" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
