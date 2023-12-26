import errorImage from "public/images/error/error.jpg";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { LazyImageProps } from "./image.type";

export default function LazyImage({
  alt,
  src,
  onClick,
  width,
  height,
  isRound = false,
  addClass = "",
}: LazyImageProps) {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (src) {
      setHasError(true);
    }
  };

  return (
    <div className={`${isRound ? "rounded-md" : ""} shrink-0 ${addClass}`}>
      <LazyLoadImage
        src={hasError ? errorImage.src : src}
        alt={alt}
        effect="opacity"
        onError={handleError}
        onClick={onClick}
        style={{
          objectFit: "cover",
          width: width,
          height: height,
          borderRadius: isRound ? "8px" : "0px",
        }}
      />
    </div>
  );
}
