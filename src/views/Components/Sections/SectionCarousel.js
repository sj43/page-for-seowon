import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image1 from "assets/img/carousel1.jpg";
import image2 from "assets/img/carousel2.jpg";
import image3 from "assets/img/carousel3.jpg";
import image4 from "assets/img/carousel4.jpg";
import image5 from "assets/img/carousel5.jpg";
import image6 from "assets/img/carousel6.jpg";
import image7 from "assets/img/carousel7.jpg";
import image8 from "assets/img/carousel8.jpg";
import image9 from "assets/img/carousel9.jpg";
import image10 from "assets/img/carousel10.jpg";
import image11 from "assets/img/carousel11.jpg";
import image12 from "assets/img/carousel12.jpg";
import image13 from "assets/img/carousel13.jpg";
import image14 from "assets/img/carousel14.jpg";




import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      사랑해 서원굴아!
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src={image2}
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      사랑해 서원굴아!
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image3} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      사랑해 서원굴아!
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image4} alt="Fourth slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      사랑해 서원굴아!
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image5} alt="Fifth slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      사랑해 서원굴아!
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image6} alt="Sixth slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      사랑해 서원굴아!
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image7} alt="Seventh slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Yellowstone National Park, United States
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image8} alt="Eighth slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      사랑해 서원굴아!
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image9} alt="Nineth slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      사랑해 서원굴아!
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image10} alt="Tenth slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      사랑해 서원굴아!
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image11} alt="Eleventh slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      사랑해 서원굴아!
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image12} alt="Twelveth slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      사랑해 서원굴아!
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image13} alt="Thirteenth slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      사랑해 서원굴아!
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image14} alt="Fourteenth slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      사랑해 서원굴아!
                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
