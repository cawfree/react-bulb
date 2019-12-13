import React from 'react';
import PropTypes from 'prop-types';

const Bulb = ({ size, color, style }) => (
  <svg
    style={{
      ...style,
      width: size * 2,
      height: size * 2,
    }}
  >
    <defs>
      <radialGradient
        id="grad1"
        cx="0%"
        cy="0%"
        r="100%"
        fx="30%"
        fy="30%"
      >
        <stop
          offset="0%"
          style={{
            stopColor:'white',
            stopOpacity: 0.4,
          }}
        />
        <stop
          offset="90%"
          style={{
            stopColor: color,
            stopOpacity: 0,
          }}
        />
      </radialGradient>
      <radialGradient
        id="grad2"
        cx="150%"
        cy="150%"
        r="200%"
        fx="100%"
        fy="100%"
      >
        <stop
          offset="0%"
          style={{
            stopColor:'black',
            stopOpacity: 0.45,
          }}
        />
        <stop
          offset="100%"
          style={{
            stopColor: color,
            stopOpacity: 0.2,
          }}
        />
      </radialGradient>
    </defs>
    <circle
      cx={size}
      cy={size}
      r={size}
      fill={color}
    />
    <circle
      cx={size}
      cy={size}
      r={size}
      fill="url(#grad1)"
    />
    <circle
      cx={size}
      cy={size}
      r={size}
      fill="url(#grad2)"
    />
  </svg>
);

Bulb.propTypes = {
  style: PropTypes.shape({}),
  size: PropTypes.number,
  color: PropTypes.string,
};

Bulb.defaultProps = {
  style: Object.freeze({}),
  size: 40,
  color: 'red',
};

export default Bulb;
