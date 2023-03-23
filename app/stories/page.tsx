/* eslint-disable jsx-a11y/alt-text */
"use client";

import React, { useEffect, useState } from "react";
import Stories from "react-insta-stories";

import { mockStories } from "./data";
import { HighlightsBox, Story, StoryBox, ImageFooBar as Image } from "./_page";

type StoryType = {
  url: string;
  duration: number;
};

const Highlights: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentStories, setCurrentStories] = useState<StoryType[]>(mockStories[0].stories);
  const [storyIndex, setStoryIndex] = useState<number>(0);
  console.log("currentStories", currentStories);

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

  // const handleStoryChange = (stories: StoryType[]) => {
  //   setCurrentStories(stories)
  // }

  const allStories = mockStories?.map((story) => story.stories).flat();

  console.log("allStories", allStories);

  return (
    <HighlightsBox>
      {mockStories.map((story) => (
        <StoryBox
          key={story.id}
          onClick={() => {
            setIsOpen(true);
            setStoryIndex(story.id);
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
            keyboardNavigation
            loop
            storyContainerStyles={{
              borderRadius: 8,
              backgroundColor: "red",
              pointerEvents: "none",
              objectFit: "contain",
            }}
            onStoryEnd={(s: number, st: any) => {
              // handle
            }}
            onAllStoriesEnd={(s: number, st: any) => {
              setIsOpen(false);
              setCurrentStories(mockStories[storyIndex + 1].stories);
              // start next story
              setStoryIndex(storyIndex + 1);
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
