import React from "react";
import youtube from "./YoutubeEmbed.module.css";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
  <div className={youtube.videoResponsive}>
    <iframe
      width="720"
      height="380"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;