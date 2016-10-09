/* eslint-disable semi, quotes */
import React, { Component } from 'react';
import Btn from './Btn';
import Map from './Map';
import * as api from '../api/api';

const styles = {
  mainContainer: {
    textAlign: 'center',
    display: 'block',
    marginTop:  '3em',
    marginLeft: '10em',
    marginTop: '1em',
    backgroundColor: 'transparent',
    marginTop: '-925px',
    position: 'relative',
    zIndex: '2'
  },
  button: {
    marginTop: '0.25em',
    width: '6em'
  },
  destination: {
    width: '60em'
  }
};

export default class MapView extends Component {
  constructor () {
    super();
    this.state = {
      startingPoint: '',
      endingPoint: '',
    };
  }

  componentDidMount () {
    api.getCenterCoord()
      .then(center => {
        this.setState({startingPoint: [center.lon, center.lat]});
    });
  }

  buttonOnClick() {

    api.getRoute()
      .then(response => {
        const routeSteps = response.legs[0].steps
<<<<<<< HEAD

        console.log("our steps:", routeSteps)

=======
        console.log("here's our steps:", routeSteps)
>>>>>>> c07877d4348c074402e8379220c35d8e9bbdce33
        return routeSteps
      })
      .catch(err => console.warn('Error in buttonOnClick:', err))
  }

  updateText (destination) {
    this.setState({endingPoint: destination})
  }

  render() {
    return (
      <div>
        <Map />
        <div style={styles.mainContainer} >
          <div style={styles.destination} >
            <textarea className={styles.destination} onChange={e => this.updateText(e.target.value)} type='text' placeholder='Destination' />
            <div style={styles.button} >
              <Btn onClick={this.buttonOnClick()} text="Get Directions" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
