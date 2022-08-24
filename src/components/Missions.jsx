import React from 'react';
import Title from './Title';
import Missoes from '../data/missions';
import MissionCard from './MissionCard';
import '../App.css';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="pai">
        <Title headline="Missões" />
        <div className="missions">
          {Missoes.map(({ name, year, country, destination }) => (
            <MissionCard
              key={ name }
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
