import { CAROUSEL } from "../../constants";

const { ONE_SLIDE, TWO_SLIDES, THREE_SLIDES, FOUR_SLIDES, FIVE_SLIDES } = CAROUSEL


export const slidesByWidthPage = (widthPage) => {
  let numberOfSlides = 1;

  switch (true) {
    case widthPage >= 2200:
      numberOfSlides = FIVE_SLIDES
      break;

    case widthPage >= 1800 && widthPage < 2200:
      numberOfSlides = FOUR_SLIDES
      break;

    case widthPage >= 1420 && widthPage < 1800:
      numberOfSlides = THREE_SLIDES
      break;

    case widthPage >= 920 && widthPage < 1420:
      numberOfSlides = TWO_SLIDES
      break;

    default:
      numberOfSlides = ONE_SLIDE
      break;
  }

  return numberOfSlides
}