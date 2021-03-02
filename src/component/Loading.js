import React from 'react';
import PropTypes from 'prop-types';
import ClipLoader from 'react-spinners/ClipLoader';

const Loading = ({ color, loading }) => (
  <div className="loading">
    <ClipLoader color={color} loading={loading} size={150} />
  </div>
);

Loading.propTypes = {
  color: PropTypes.string,
  loading: PropTypes.bool,
};

Loading.defaultProps = {
  color: '',
  loading: false,
};

export default Loading;
