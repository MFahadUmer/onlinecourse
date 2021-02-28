import React from 'react';
import UserNavbar from './userNavbar';

const CourseDetails = ({
  // eslint-disable-next-line react/prop-types
  title,
  // eslint-disable-next-line no-unused-vars,react/prop-types
  uniqueKey,
  // eslint-disable-next-line no-unused-vars,react/prop-types
  userid,
  // eslint-disable-next-line react/prop-types
  details,
  // eslint-disable-next-line react/prop-types
  requirements,
  // eslint-disable-next-line react/prop-types
  difficulty,
  // eslint-disable-next-line react/prop-types
  image,
  // eslint-disable-next-line react/prop-types
  price,
  // eslint-disable-next-line react/prop-types
  check,
  // eslint-disable-next-line react/prop-types
  addFavouriteHandler,
}) => (
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
          onClick={() => addFavouriteHandler({
            user_id: userid,
            course_id: uniqueKey,
          })}
        >
          {check}
        </button>
      </div>
    </div>
  </>
);

export default CourseDetails;
