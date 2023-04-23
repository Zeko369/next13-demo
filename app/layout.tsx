import EmotionRoot from "../lib/emotion";
// import StitchesRoot from "../lib/stitches";
// import StyledComponentsRoot from "../lib/styledComponents";

const Wrapper = EmotionRoot;

import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <Wrapper>{children}</Wrapper>
        <h1 className="text-3xl text-red font-bold underline">Hello world!</h1>
      </body>
    </html>
  );
}
