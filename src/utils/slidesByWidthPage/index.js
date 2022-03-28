import { CAROUSEL } from "../../constants";


export const slidesByWidthPage = (widthPage) => {
  let numberOfSlides = 1;

  switch (widthPage) {
    case (widthPage >= 1200):
      numberOfSlides = CAROUSEL.MORE_THAN_1200PX
      break;

    default:
      numberOfSlides = 4
      break;
  }

  return numberOfSlides
}