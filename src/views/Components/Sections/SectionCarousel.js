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
import image7 from "assets/img/carousel7.jpg";
import image8 from "assets/img/carousel8.jpg";
import image10 from "assets/img/carousel10.jpg";
import image11 from "assets/img/carousel11.jpg";
import image12 from "assets/img/carousel12.jpg";
import image13 from "assets/img/carousel13.jpg";
import image14 from "assets/img/carousel14.jpg";
import image15 from "assets/img/carousel15.jpg";
import image17 from "assets/img/carousel17.jpg";
import image18 from "assets/img/carousel18.jpg";
import image19 from "assets/img/carousel19.jpg";
import image20 from "assets/img/carousel20.jpg";
import image21 from "assets/img/carousel21.jpg";
import bg4 from "assets/img/bg4.jpg";
// 19 17 18 16 10 1 2 11 7 8 12 13 14 15 9

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
    autoplay: true,
    draggable: true,
    fade: true,
    swipeToSlide: true,
    adaptiveHeight: true,
    // variableWidth: true,
    centerMode: true
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
              
                <div>
                  <img src={image19} alt="Nineteenth slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      사랑해 서원굴아!
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image21} alt="Twenty first slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      사랑해 서원굴아!
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image18} alt="Eighteenth slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      사랑해 서원굴아!
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image17} alt="Seventeenth slide" className="slick-image" />
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
                  <img src={bg4} alt="bg4 slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      사랑해 서원굴아!
                    </h4>
                  </div>
                </div>
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
                  <img src={image7} alt="Seventh slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      사랑해 서원굴아!
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
                  <img src={image20} alt="Twentieth slide" className="slick-image" />
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
                <div>
                  <img src={image15} alt="Fifteenth slide" className="slick-image" />
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
                
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
