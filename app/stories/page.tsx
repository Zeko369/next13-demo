/* eslint-disable jsx-a11y/alt-text */
"use client";

import React, { startTransition, useEffect, useMemo, useState } from "react";
import Stories from "react-insta-stories";

import { mockStories } from "./data";
import { HighlightsBox, Story, StoryBox, ImageFooBar as Image } from "./_page";

type StoryType = {
  url: string;
  duration: number;
};

const Highlights: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [storyIndex, setStoryIndex] = useState<number>(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const currentStories = useMemo(() => {
    return mockStories[storyIndex].stories;
  }, [storyIndex]);

  const allStories = mockStories?.map((story) => story.stories).flat();
  console.log("allStories", allStories);

  return (
    <HighlightsBox>
      {mockStories.map((story) => (
        <StoryBox
          key={story.id}
          onClick={() => {
            console.log(story.id);
            setStoryIndex(mockStories.findIndex((s) => s.id === story.id));
            setIsOpen(true);
          }}
        >
          <Image src={story.srcImage} style={{ width: "32px", maxHeight: "32px" }} />
        </StoryBox>
      ))}
      {isOpen && (
        <Story>
          <Stories
            stories={currentStories}
            defaultInterval={3500}
            width="100%"
            height="calc(100vh - 20px)"
            // keyboardNavigation
            loop
            storyContainerStyles={{
              borderRadius: 8,
              backgroundColor: "red",
              pointerEvents: "none",
              objectFit: "contain",
            }}
            onStoryEnd={(s: number, st: any) => {
              console.log("onStoryEnd", s, st);
            }}
            onAllStoriesEnd={(s: number, st: any) => {
              if (storyIndex === mockStories.length - 1) {
                return setIsOpen(false);
              }

              setStoryIndex((s) => s + 1);
            }}
            onStoryStart={(s: number, st: any) => {
              console.log("onStoryStart", s, st);
              // handleStoryChange(st)
            }}
          />
        </Story>
      )}
    </HighlightsBox>
  );
};

export default Highlights;
