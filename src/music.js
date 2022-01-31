import React, { useState } from "react";

const YoutubePlayer = () => {
  const [videoSource, setVideoSource] = useState(
    "https://www.youtube.com/watch?v=BQrxsyGTztM"
  );

  function playButton(event) {
    console.log(event.target.value);
  }

  return (
    <div id="youtube-player">
      <iframe
        width="360"
        height="215"
        src={videoSource}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div id="youtube-control">
        <form>
          <label>
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" onCLick={playButton} />
        </form>
      </div>
    </div>
  );
};

export default YoutubePlayer;
