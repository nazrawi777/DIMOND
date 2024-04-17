import { FunctionComponent, useCallback } from "react";
import MessageContainer from "./MessageContainer";
import styles from "./HOME.module.css";

const HOME: FunctionComponent = () => {
  const onHOMEContainerClick = useCallback(() => {
    window.open("/services");
  }, []);

  return (
    <div className={styles.home} onClick={onHOMEContainerClick}>
      <div className={styles.homeChild} />
      <div className={styles.homeItem} />
      <img
        className={styles.helpShape21Icon}
        alt=""
        src="/helpshape2-1@2x.png"
      />
      <img
        className={styles.camRemovebgPreview1Icon}
        alt=""
        src="/camremovebgpreview-1@2x.png"
      />
      <div className={styles.homeAboutUs}>
        HOME ABOUT US SERVICES CONTACT US
      </div>
      <img className={styles.whiteLogo1Icon} alt="" src="/whitelogo-1@2x.png" />
      <b className={styles.diamondCasting}>DIAMOND CASTING</b>
      <div className={styles.linkUpWithContainer}>
        <p className={styles.linkUpWith}>
          LINK UP WITH US FOR THE BETTER EXPOSURE IN THIS DIGITAL AGE.
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>
          Empowering Brands with Strategic Digital Marketing, Compelling
          Advertising, and Unforgettable Branding Solutions.
        </p>
      </div>
      <b className={styles.digitalMarketingAdvertismentContainer}>
        <p className={styles.blankLine}>DIGITAL MARKETING</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>ADVERTISMENT</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>BRANDING</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>COMMUNICATION</p>
      </b>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.explore}>EXPLORE</div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerChild} />
        <img
          className={styles.whiteLogo2Icon}
          alt=""
          src="/whitelogo-1@2x.png"
        />
        <div className={styles.diamondCasting1}>DIAMOND CASTING</div>
        <div className={styles.quickLinksAboutContainer}>
          <p className={styles.blankLine}>
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
          <p className={styles.blankLine}>
            <span>
              <span className={styles.span}>{`               `}</span>
              <span className={styles.aboutUs1}>About Us</span>
            </span>
          </p>
          <p className={styles.blankLine7}>
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
          <p className={styles.contact}>
            <span>
              <span className={styles.span}> Contact</span>
            </span>
          </p>
          <p className={styles.blankLine7}>
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
          <p className={styles.contact}>
            <span>
              <span className={styles.span}> Services</span>
            </span>
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
        </div>
        <b className={styles.letsConnect}>Let’s Connect</b>
        <div className={styles.getInTouchContainer}>
          <p className={styles.blankLine}>
            <b className={styles.span}> Get In Touch</b>
          </p>
          <p className={styles.blankLine10}>&nbsp;</p>
        </div>
        <img
          className={styles.thumbnail1Icon}
          alt=""
          src="/thumbnail-1@2x.png"
        />
        <div className={styles.phone0114628535Container}>
          <p className={styles.blankLine}>Phone</p>
          <p className={styles.blankLine}>0114628535 | 0940499999</p>
          <p className={styles.blankLine}>Email</p>
          <p className={styles.blankLine}>diamondproductionD@gmail.com</p>
          <p className={styles.blankLine}>Address</p>
          <p className={styles.blankLine}>
            Addis Ababa, Ethiopia Bole Mesqel flower James bld.9th floor
          </p>
        </div>
      </div>
      <div className={styles.ourPartners}>
        <div className={styles.partners2}>
          <div className={styles.image2Parent}>
            <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
            <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
            <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
          </div>
        </div>
        <div className={styles.partners1}>
          <b className={styles.ourPartners1}>Our Partners</b>
          <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
          <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
        </div>
      </div>
      <div className={styles.portfolio}>
        <div className={styles.portfolioChild} />
        <div className={styles.portfolioItem} />
        <b className={styles.services2}>SERVICES</b>
        <div className={styles.portfolioInner} />
        <img
          className={styles.featuresImg11Icon}
          alt=""
          src="/featuresimg1-1@2x.png"
        />
        <div className={styles.branding1}>BRANDING</div>
        <img
          className={styles.featuresImg31Icon}
          alt=""
          src="/featuresimg3-1@2x.png"
        />
        <div className={styles.digitalMarketing1}>DIGITAL MARKETING</div>
        <div className={styles.asBrandingSpecialists}>
          As branding specialists, our team works with companies to develop and
          implement effective branding strategies that establish a strong brand
          identity and resonate with their target audience. In addition, we work
          with internationally renowned Branding companies as partners in the
          area
        </div>
        <div className={styles.asOurWorld}>
          As our world is undeniably digital, We use various digital channels to
          promote our customers business online as well social media marketing
          tools for customer, attraction, engagement, conversion and
          retentionofprospectiveclients.
        </div>
      </div>
      <div className={styles.ourWorks}>
        <div className={styles.ourWorksChild} />
        <b className={styles.ourWorks1}>Our Works</b>
      </div>
      <MessageContainer />
    </div>
  );
};

export default HOME;
