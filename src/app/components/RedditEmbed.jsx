"use client";
import { useEffect } from "react";

const RedditEmbed = ({ url, height = "500px" }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.redditmedia.com/widgets/platform.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <blockquote
      className="reddit-embed"
      data-embed-media="www.redditmedia.com"
      style={{ height }}
    >
      <a href={url}>
        <div className="flex justify-center items-center">
          <span className="loading loading-spinner loading-lg text-black"></span>
        </div>
      </a>
    </blockquote>
  );
};

export default RedditEmbed;
