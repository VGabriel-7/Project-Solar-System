import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card" className={ `planet ${planetName}` }>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
        <p data-testid="planet-name">{ planetName }</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
}.isRiquired;

export default PlanetCard;
