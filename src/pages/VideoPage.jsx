import React, { useState, useEffect } from 'react';

const VideoPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
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
    <div className='px-8' style={{ maxWidth: '1280px', margin: '3rem auto', padding: '0 1rem' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
        Videos
      </h1>

      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search videos"
          style={{
            padding: '0.5rem',
            border: '1px solid #D1D5DB',
            borderRadius: '0.5rem',
            width: '100%',
            maxWidth: '400px'
          }}
        />
      </div>

      <div className='px-8' style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
        {filteredVideos.map(video => (
          <div key={video.id} style={{ padding: '1rem', border: '1px solid #E5E7EB', borderRadius: '0.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', color: '#2563EB', fontWeight: '600', marginBottom: '1rem' }}>
              {video.title}
            </h2>
            <p style={{ marginBottom: '1rem', color: '#4B5563' }}>{video.description}</p>
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

export default VideoPage;
