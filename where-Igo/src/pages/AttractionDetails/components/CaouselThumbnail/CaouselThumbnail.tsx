import { ReactNode, useEffect, useState } from "react";

import { Attraction } from "../../../../type/attraction.ts";

import styles from "./CaouselThumbnail.module.css";
import clsx from "clsx";

type Props = {
  attraction: Attraction;
};

function CaouselThumbnail({ attraction }: Props): ReactNode {
  const [indexSlide, setIndexSlide] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexSlide((old) => (old + 1) % attraction.carousel.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [attraction]);

  return (
      <div className={styles.carousel}>
          <ul style={{transform: `translateX(${indexSlide * 100}%)`}}>
              {attraction.carousel.map((image) => (
                  <li>
                      <img src={`${import.meta.env.VITE_CDN_BASE_URL}/${image}`} alt=""/>
                  </li>
              ))}
          </ul>

          <div className={styles.bullets}>
              {attraction.carousel.map((_, index) => (
                  <button
                      key={index}
                      className={clsx(
                          styles.bullet,
                          index === indexSlide && styles.active,
                      )}
                      onClick={() => setIndexSlide(index)}
                  />
              ))}
          </div>
      </div>
  );
}

export default CaouselThumbnail;
