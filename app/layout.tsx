import EmotionRoot from "../lib/wrappers/emotion";
import StitchesRoot from "../lib/wrappers/stitches";
import StyledComponentsRoot from "../lib/wrappers/styledComponents";

const Wrapper = EmotionRoot;

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
