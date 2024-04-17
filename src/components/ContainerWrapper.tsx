import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ContainerWrapper.module.css";

export type ContainerWrapperType = {
  /** Style props */
  vIDEOPRODUCTIONTop?: CSSProperties["top"];
  vIDEOPRODUCTIONLeft?: CSSProperties["left"];
};

const ContainerWrapper: FunctionComponent<ContainerWrapperType> = ({
  vIDEOPRODUCTIONTop,
  vIDEOPRODUCTIONLeft,
}) => {
  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      top: vIDEOPRODUCTIONTop,
      left: vIDEOPRODUCTIONLeft,
    };
  }, [vIDEOPRODUCTIONTop, vIDEOPRODUCTIONLeft]);

  return (
    <div className={styles.rectangleParent} style={groupDiv1Style}>
      <div className={styles.groupChild} />
      <img
        className={styles.featuresImg21Icon}
        alt=""
        src="/featuresimg2-1@2x.png"
      />
      <div className={styles.videoProductionWeContainer}>
        <p className={styles.videoProduction}>VIDEO PRODUCTION</p>
        <p className={styles.blankLine}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.videoProduction}>
          <span>
            <span>
              We create exceptional video content that delivers results for our
              clients. We are committed to provide creative and professional
              video production outputs extracting and crafting the brand under
              consideration from concept to delivery. We are passionate about
              bringing stories to life, and we are committed to add exceptional
              value to our clients product and service.
            </span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ContainerWrapper;
