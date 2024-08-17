import React, { useState, useEffect } from 'react';

const Videos = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // Update URL to match your Django endpoint
        const response = await fetch('http://localhost:8000/api/videos/');
        if (response.ok) {
          const videos = await response.json();
          setVideoList(videos);
        } else {
          console.error('Failed to fetch videos');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchVideos();
  }, []);

  const filteredVideos = videoList.filter(video =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    video.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto my-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-3xl font-bold mb-8">Videos</h1>

      <div className="mb-8 flex justify-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search videos"
          className="p-2 border border-gray-300 rounded-lg w-full max-w-md"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {filteredVideos.map(video => (
          <div key={video.id} className="video-item">
            <h2 className="text-xl font-semibold mb-2">{video.title}</h2>
            <p className="mb-4">{video.description}</p>
            {/* HTML5 video player */}
            <video width="320" height="240" controls>
              <source src={video.video_file} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
