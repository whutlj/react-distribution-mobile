import React from 'react';
import PropTypes from 'prop-types';

export default class SvgIcon extends React.Component {
  render() {
    const { icon } = this.props;
    const iconId = `#${icon}`;
    return (
      <svg>
        <use xlinkHref={iconId} />
      </svg>
    );
  }
}

SvgIcon.propTypes = {
  icon: PropTypes.string.isRequired
};
