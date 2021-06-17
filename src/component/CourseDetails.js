import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CourseDetails = ({
  title,
  details,
  requirements,
  difficulty,
  image,
  price,
  check,
  handleAddToFavourite,
  handleRemoveFromFavourite,
}) => {
  const [favourite, setFavourite] = useState(check);
  const eventHandler = e => {
    if (e.target.name === 'Add To Favourites') {
      handleAddToFavourite();
      setFavourite('Remove From Favourites');
    } else {
      handleRemoveFromFavourite();
      setFavourite('Add To Favourites');
    }
  };
  return (
    <>
      <div>
        <div className="singleCourseDetailsContainer">
          <img className="singleCourseDetailsImage" src={image} alt={image} />
          <div className="singleCourseDetailsImageDetails">
            <div className="singleCourseDetailsAuthor">
              <div className="singleCourseDetailsAuthorImage">
                <img className="authorImage" src="https://www.ocf.berkeley.edu/~dblab/blog/wp-content/uploads/2012/01/icon-profile.png" alt={image} />
              </div>
              <div>
                <p className="authorname">
                  Author Name
                </p>
                <p>
                  <span className="fas fa-star starColor" />
                  <span className="fas fa-star starColor" />
                  <span className="fas fa-star starColor" />
                  <span className="fas fa-star starColor" />
                  <span className="fas fa-star" />
                </p>
              </div>
            </div>
            <div className="singleCoursePrice">
              <p>{`${price} $`}</p>
              <p>Per Month</p>
            </div>
          </div>
        </div>
        <div className="singleCourseDetails">
          <h3 className="aboutThisCourse">{title}</h3>
          <div>
            <p className="courseDetailsParagraph">{details}</p>
            <p className="courseDetailsParagraph">
              {`Difficulty => ${difficulty}`}
            </p>
            <p className="courseDetailsParagraph">
              {`Requirements => ${requirements}`}
            </p>
          </div>
        </div>
        <div className="addToFavourites">
          <button
            name={favourite}
            className="addToFavouritesLink"
            type="submit"
            onClick={e => eventHandler(e)}
          >
            {favourite}
          </button>
        </div>
      </div>
    </>
  );
};

CourseDetails.propTypes = {
  title: PropTypes.string,
  check: PropTypes.string,
  details: PropTypes.string,
  requirements: PropTypes.string,
  difficulty: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  handleAddToFavourite: PropTypes.func,
  handleRemoveFromFavourite: PropTypes.func,
};

CourseDetails.defaultProps = {
  title: '',
  check: '',
  details: '',
  requirements: '',
  difficulty: '',
  image: '',
  price: '',
  handleAddToFavourite: '',
  handleRemoveFromFavourite: '',
};

export default CourseDetails;
