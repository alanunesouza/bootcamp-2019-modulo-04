import React from 'react';
import Proptypes from 'prop-types';

function TechItem({tech, onDelete}) {
  return (
    <li key={tech}>
      {tech}
      <button onClick={() => onDelete(tech)} type="button">Remover</button>  
    </li>
  )
}

TechItem.defaultProps = {
  tech: 'Oculto',
};

TechItem.propTypes = {
  tech: Proptypes.string,
  onDelete: Proptypes.func.isRequired
}

export default TechItem;