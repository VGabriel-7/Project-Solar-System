import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';
import '../App.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="dad-solar-system">
        <Title headline="Planetas" />
        <div className="solar-system">
          {Planets.map(({ name, image }) => (
            <PlanetCard
              key={ name }
              planetName={ name }
              planetImage={ image }
            />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
