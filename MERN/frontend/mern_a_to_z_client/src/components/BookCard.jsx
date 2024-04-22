import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../App.css';

const BookCard = ({book}) => {

  return (
    <div className='card-container'>
      <img
        src='https://images.unsplash.com/photo-1495446815901-a7297e633e8d'
        alt='Books'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={`/show-book/${book._id}`}>{book.title}</Link>
        </h2>
        <h3>{book.author}</h3>
        <p>{book.description}</p>
      </div>
    </div>
  );
};


BookCard.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookCard;