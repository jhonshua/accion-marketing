import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    video.play();
    video.loop = true;
    video.muted = true; // Silenciar el video si es necesario

    // Manejar eventos de cambio de pantalla completa
    const handleFullScreenChange = () => {
      setIsFullScreen(document.fullscreenElement !== null);
    };
    document.addEventListener("fullscreenchange", handleFullScreenChange);

    return () =>
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
  }, [videoRef]);

  const handleClick = () => {
    navigate("/home"); // Redirect to /home on click
  };

  return (
  
      <div
        className="video-container"
        onClick={handleClick} // Use handleClick for redirection
      >
        <video ref={videoRef} muted>
          <source
            src="../src/assets/video/accion_marketing.mp4"
            type="video/mp4"
          />
        </video>
      </div>
  );
}

export default HomePage;
