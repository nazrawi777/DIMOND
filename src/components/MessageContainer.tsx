import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./MessageContainer.module.css";

export type MessageContainerType = {
  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
};

const MessageContainer: FunctionComponent<MessageContainerType> = ({
  propTop,
  propLeft,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={styles.groupParent} style={groupDivStyle}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.phone}>Phone</div>
      </div>
      <div className={styles.name}>Name</div>
      <div className={styles.email}>Email</div>
      <div className={styles.message}>Message</div>
    </div>
  );
};

export default MessageContainer;
