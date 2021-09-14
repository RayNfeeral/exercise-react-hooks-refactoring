// src/context/Provider.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CarsContext from './CarsContext';

const Provider = ({ children }) => {
  const [cars, setCars] = useState({
    red: false,
    blue: false,
    yellow: false,
  });
  const [signal, setSignal] = useState({
    color: 'red',
  });

  const moveCar = (car, side) => {
    setCars({
      ...cars,
      [car]: side,
    });
  };

  const changeSignal = (signalColor) => {
    setSignal({
      ...signal,
      color: signalColor,
    });
  };

  return (
    <CarsContext.Provider value={ { cars, signal, moveCar, changeSignal } }>
      {children}
    </CarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
