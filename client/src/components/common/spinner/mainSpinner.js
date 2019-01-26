import React from 'react';
import PropTypes from 'prop-types';

const Spinner = (props) => {
  const { height } = props;
  return (
    <tr>
      <td>
        <img style={{ width: 'auto', height: `${height}px` }} alt="spinner" src="../../client/public/assests/icons/spinner.svg" />
      </td>
    </tr>
  );
};

Spinner.propTypes = {
  height: PropTypes.number,
};
Spinner.defaultProps = {
  height: 32,
};

export default Spinner;
