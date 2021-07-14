import React from 'react';
import PropTypes from 'prop-types';

export const ShowIncrement = ({increment}) => {
  console.log('Me volvi a generar');
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={ () => {
          increment(5);
        }}
      >
        Incrementar
      </button>
    </div>
  )
}

ShowIncrement.propTypes = {
  increment: PropTypes.func.isRequired
}