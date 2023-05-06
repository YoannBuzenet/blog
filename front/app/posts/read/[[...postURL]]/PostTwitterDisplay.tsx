"use client";
import { useEffect } from "react";

type TwitterWindow = Window &
  typeof globalThis & {
    twttr: {
      widgets: {
        load: () => void;
      };
    };
  };

const PostTwitterDisplay = () => {
  const windowLoaded = window as TwitterWindow;

  // Without this, the tweet can't load if using next client-side router
  useEffect(() => {
    windowLoaded.twttr.widgets.load();
  }, []);
  return <></>;
};

export default PostTwitterDisplay;
