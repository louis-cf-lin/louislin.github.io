import { ParallaxBanner } from "react-scroll-parallax";

import classes from "./StudioPiece.module.scss";

export type TPiece = {
  id: string;
  title: string;
  date: string;
  img: string;
};

interface Props {
  piece: TPiece;
}

const StudioPiece = ({ piece }: Props): JSX.Element => {
  return (
    <div className={classes.piece}>
      <div className={classes.img}>
        {/* <Image src={`/${v.img}.jpg`} layout="fill" alt={v.title} />
    <Image src={`/${v.img}-text.jpg`} layout="fill" alt={v.title} /> */}
        <ParallaxBanner
          layers={[{ image: `/${piece.img}.jpg`, speed: -5 }]}
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
          }}
        />
        <ParallaxBanner
          layers={[{ image: `/${piece.img}-text.jpg`, speed: -5 }]}
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
          }}
        />
      </div>
      <h2>{piece.title}</h2>
      <p>{piece.date}</p>
    </div>
  );
};

export default StudioPiece;
