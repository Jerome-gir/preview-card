import PropTypes from "prop-types"

export default function Card({
  rounded,
  image,
  alt,
  title,
  description,
  bgColor,
  textButton,
}) {
  return (
    <div
      className={`flex flex-col gap-6 sm:gap-10 ${bgColor} ${rounded} w-80 p-12`}
    >
      <img src={image} alt={alt} width={64} height={40} />
      <h1 className="uppercase text-very-light-gray font-bigShoulders text-3xl sm:text-5xl">
        {title}
      </h1>
      <p className="text-transparent-white font-lexend text-sm sm:text-base sm:mb-12">
        {description}
      </p>
      <button
        className={`bg-very-light-gray w-32 sm:w-40 rounded-full py-2 sm:py-3 ${textButton} text-xs sm:text-base font-lexend sm:hover:text-very-light-gray sm:hover:bg-opacity-0 border-2 border-transparent sm:hover:border-white`}
      >
        Learn More
      </button>
    </div>
  )
}

Card.propTypes = {
  rounded: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  textButton: PropTypes.string,
}
