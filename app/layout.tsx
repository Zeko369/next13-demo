import EmotionRoot from "../lib/emotion";
import StitchesRoot from "../lib/stitches";
import StyledComponentsRoot from "../lib/styledComponents";

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
