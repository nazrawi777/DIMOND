import { FunctionComponent, useCallback } from "react";
import ContainerWrapper from "../components/ContainerWrapper";
import GroupComponent from "../components/GroupComponent";
import MessageContainer from "../components/MessageContainer";
import styles from "./Services.module.css";

const Services: FunctionComponent = () => {
  const onServicesContainerClick = useCallback(() => {
    window.open("/services");
  }, []);

  return (
    <div className={styles.services} onClick={onServicesContainerClick}>
      <img className={styles.servicesChild} alt="" src="/rectangle-5.svg" />
      <div className={styles.frame}>
        <img className={styles.frameChild} alt="" src="/rectangle-6.svg" />
        <ContainerWrapper />
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.brandingAsBrandingContainer}>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>BRANDING</p>
            <p className={styles.asBrandingSpecialists}>&nbsp;</p>
            <p className={styles.asBrandingSpecialists}>
              As branding specialists, our team works with companies to develop
              and implement effective branding strategies that establish a
              strong brand identity and resonate with their target audience. In
              addition, we work with internationally renowned Branding companies
              as partners in the area.
            </p>
          </div>
          <img
            className={styles.featuresImg11Icon}
            alt=""
            src="/featuresimg1-1@2x.png"
          />
        </div>
        <ContainerWrapper
          vIDEOPRODUCTIONTop="719px"
          vIDEOPRODUCTIONLeft="459px"
        />
        <div className={styles.rectangleGroup}>
          <div className={styles.groupChild} />
          <img
            className={styles.featuresImg21Icon}
            alt=""
            src="/featuresimg2-1@2x.png"
          />
          <div className={styles.videoProductionWeContainer}>
            <p className={styles.videoProduction}>VIDEO PRODUCTION</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>
              We create exceptional video content that delivers results for our
              clients. We are committed to provide creative and professional
              video production outputs extracting and crafting the brand under
              consideration from concept to delivery. We are passionate about
              bringing stories to life, and we are committed to add exceptional
              value to our clients product and service.
            </p>
          </div>
        </div>
        <ContainerWrapper
          vIDEOPRODUCTIONTop="719px"
          vIDEOPRODUCTIONLeft="1456px"
        />
        <div className={styles.rectangleContainer}>
          <div className={styles.groupInner} />
          <img
            className={styles.featuresImg31Icon}
            alt=""
            src="/featuresimg3-1@2x.png"
          />
          <div className={styles.digitalMarketingAsContainer}>
            <p className={styles.videoProduction}>DIGITAL MARKETING</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>
              As our world is undeniably digital, We use various digital
              channels to promote our customers business online as well social
              media marketing tools for customer, attraction, engagement,
              conversion and retentionofprospectiveclients.
            </p>
          </div>
        </div>
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <div className={styles.services1}> SERVICES</div>
        <div className={styles.homeAboutUs}>
          HOME ABOUT US SERVICES CONTACT US
        </div>
        <img
          className={styles.whiteLogo1Icon}
          alt=""
          src="/whitelogo-1@2x.png"
        />
        <b className={styles.diamondCasting}>DIAMOND CASTING</b>
        <GroupComponent />
        <b className={styles.letsConnect}>Let’s Connect</b>
        <MessageContainer propTop="1429px" propLeft="1105px" />
      </div>
    </div>
  );
};

export default Services;
