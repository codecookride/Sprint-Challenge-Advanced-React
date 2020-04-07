import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from "./Navbar";
import {render} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test ("has header", async () => {

  const { getByText } = render(<Navbar />);

  const header = getByText(/womens world cup/i);

  expect(header).toBeInTheDocument();

});