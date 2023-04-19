"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { mockStories } from "./data";

// eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
export const ImageFooBar = (props) => <img {...props} />;

export type StoryType = {
  url: string;
  duration?: number;
};

type HighlightProps = {
  key: string | number;
  srcImage: string;
  isOpen: boolean;
  onClick: () => void;
  stories: StoryType[];
};

import RawStories from "react-insta-stories";

export const Story = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 10;
  z-index: 2;
  background-color: black;
  padding: 10px;
`;

type StoriesProps = {
  onClose?: () => void;
  key: string | number;
  stories: StoryType[];
};

const Stories = ({ onClose, key, stories }: StoriesProps) => {
  return (
    <Story>
      <RawStories
        stories={stories}
        defaultInterval={3500}
        width="100%"
        height="100vh"
        keyboardNavigation={true}
      />
    </Story>
  );
};

const Highlight = ({ key, srcImage, stories, isOpen, onClick }: HighlightProps) => {
  // console.log("onClick", onClick, isOpen);

  return (
    <>
      <StoryBox onClick={onClick}>
        <ImageFooBar src={srcImage} style={{ width: "32px", maxHeight: "32px" }} />
      </StoryBox>

      {isOpen && <Stories key={key} stories={stories} />}
    </>
  );
};

export const HighlightsBox = styled.div`
  display: flex;
  padding: 12px 16px;
  overflow-x: scroll;
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

export const StoryBox = styled.div`
  display: flex;
  min-width: 56px;
  min-height: 56px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  border-radius: 16px;
  background-color: white;
  border: 1px solid #1d7cd8;
  cursor: pointer;
`;

const Highlights: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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

  return (
    <HighlightsBox>
      {mockStories.map((story) => (
        <Highlight
          key={story.id}
          srcImage={story.srcImage}
          isOpen={isOpen}
          onClick={() => setIsOpen((o) => !o)}
          stories={story.stories}
        />
      ))}
    </HighlightsBox>
  );
};

export default function StoriesPage() {
  return <Highlights />;
}
