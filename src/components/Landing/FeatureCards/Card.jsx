import PropTypes from 'prop-types';

const Card = ({ head, pic, text, id }) => {
  return (
    <div className="rounded-lg my-4 text-center py-5 px-6 shadow-lg md:shadow-none bg-white md:bg-transparent w-fit md:w-4/12">
      <div className="flex justify-center">
        <img src={pic} alt="feature images" />
      </div>
      <header className="p-6 font-sans text-2xl pt-4 font-semibold text-dark-purple">
        {head}
      </header>
      <p className="text-base">{text}</p>
    </div>
  );
};

Card.propTypes = {
  head: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default Card;
