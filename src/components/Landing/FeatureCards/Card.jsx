import PropTypes from 'prop-types';

const Card = ({ head, pic, text }) => {
  return (
    <div>
      <img src={pic} alt="feature images" />
      <header>{head}</header>
      <p>{text}</p>
    </div>
  );
};

Card.propTypes = {
  head: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Card;
