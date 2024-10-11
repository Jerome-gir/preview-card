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
    <div className={`flex flex-col gap-10 ${bgColor} ${rounded} w-80 p-12`}>
      <img src={image} alt={alt} width={64} height={40} />
      <h1 className="uppercase text-very-light-gray font-bigShoulders text-5xl">
        {title}
      </h1>
      <p className="text-transparent-white font-lexend mb-12">{description}</p>
      <button
        className={`bg-very-light-gray w-40 rounded-full py-3 ${textButton} font-lexend hover:text-very-light-gray hover:bg-opacity-0 border-2 border-transparent hover:border-white`}
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
