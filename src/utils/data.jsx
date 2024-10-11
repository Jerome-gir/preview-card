import imgSedans from "../assets/icon-sedans.svg"
import imgSuvs from "../assets/icon-suvs.svg"
import imgLuxury from "../assets/icon-luxury.svg"

export const cardsData = [
  {
    rounded: "sm:rounded-l-lg rounded-t-lg sm:rounded-none ",
    image: imgSedans,
    alt: "icon",
    title: "sedans",
    description:
      "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip",
    bgColor: "bg-bright-orange",
    textButton: "text-bright-orange",
  },
  {
    image: imgSuvs,
    alt: "icon",
    title: "suvs",
    description:
      "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures",
    bgColor: "bg-dark-cyan",
    textButton: "text-dark-cyan",
  },
  {
    rounded: "sm:rounded-r-lg rounded-b-lg sm:rounded-none",
    image: imgLuxury,
    alt: "icon",
    title: "luxury",
    description:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style",
    bgColor: "bg-very-dark-cyan",
    textButton: "text-very-dark-cyan",
  },
]
