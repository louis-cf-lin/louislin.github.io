import { ParallaxBanner } from "react-scroll-parallax";
import { LaunchIcon } from "./Icon";

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
    <a
      href={`https://www.youtube.com/watch?v=${piece.id}`}
      className={classes.piece}
      title={piece.title}
      target="_blank"
      rel="noreferrer"
    >
      <div className={classes.img}>
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
      <h2>
        {piece.title}
        <LaunchIcon className={classes.launch} />
      </h2>
      <p>{piece.date}</p>
    </a>
  );
};

export default StudioPiece;
