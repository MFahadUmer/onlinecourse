import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UserNavbar from './userNavbar';

const CourseDetails = ({
  title,
  uniqueKey,
  userid,
  details,
  requirements,
  difficulty,
  image,
  price,
  check,
  addFavouriteHandler,
  deleteFavouriteHandler,
}) => {
  const [favourite, setFavourite] = useState(check);
  const eventHandler = () => {
    if (favourite === 'Add Favourite') {
      setFavourite('Remove Favourite');
      addFavouriteHandler({
        user_id: userid,
        course_id: uniqueKey,
      });
    } else {
      setFavourite('Add Favourite');
      deleteFavouriteHandler({
        user_id: userid,
        course_id: uniqueKey,
      });
    }
  };
  return (
    <>
      <UserNavbar />
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
  uniqueKey: PropTypes.number,
  userid: PropTypes.number,
  details: PropTypes.string,
  requirements: PropTypes.string,
  difficulty: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  check: PropTypes.string,
  addFavouriteHandler: PropTypes.func,
  deleteFavouriteHandler: PropTypes.func,

};

CourseDetails.defaultProps = {
  title: '',
  uniqueKey: '',
  userid: '',
  details: '',
  requirements: '',
  difficulty: '',
  image: '',
  price: '',
  check: '',
  addFavouriteHandler: '',
  deleteFavouriteHandler: '',
};

export default CourseDetails;
