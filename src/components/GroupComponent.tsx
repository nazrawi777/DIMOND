import { FunctionComponent } from "react";
import styles from "./GroupComponent.module.css";

const GroupComponent: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <img className={styles.whiteLogo2Icon} alt="" src="/whitelogo-1@2x.png" />
      <div className={styles.diamondCasting}>DIAMOND CASTING</div>
      <div className={styles.quickLinksAboutContainer}>
        <p className={styles.quickLinks}>
          <span className={styles.span}>
            <span className={styles.span}>{`              `}</span>
            <span className={styles.span1}>{` `}</span>
            <b className={styles.span1}>Quick Links</b>
          </span>
        </p>
        <p className={styles.p}>
          <span>
            <span className={styles.span}>{`     `}</span>
          </span>
        </p>
        <p className={styles.quickLinks}>
          <span>
            <span className={styles.span}>{`               `}</span>
            <span className={styles.aboutUs1}>About Us</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.contact}>
          <span>
            <span className={styles.span}> Contact</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.contact}>
          <span>
            <span className={styles.span}> Services</span>
          </span>
        </p>
        <p className={styles.quickLinks}>&nbsp;</p>
      </div>
      <div className={styles.getInTouchContainer}>
        <p className={styles.quickLinks}>
          <b className={styles.span}> Get In Touch</b>
        </p>
        <p className={styles.blankLine3}>&nbsp;</p>
      </div>
      <div className={styles.phone0114628535Container}>
        <p className={styles.quickLinks}>Phone</p>
        <p className={styles.quickLinks}>0114628535 | 0940499999</p>
        <p className={styles.quickLinks}>Email</p>
        <p className={styles.quickLinks}>diamondproductionD@gmail.com</p>
        <p className={styles.quickLinks}>Address</p>
        <p className={styles.quickLinks}>
          Addis Ababa, Ethiopia Bole Mesqel flower James bld.9th floor
        </p>
      </div>
      <img className={styles.thumbnail1Icon} alt="" src="/thumbnail-1@2x.png" />
    </div>
  );
};

export default GroupComponent;
