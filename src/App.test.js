import { render, screen } from '@testing-library/react';
import App from './App';
import {
  BrowserRouter as Router,
  Routes, // Note that Routes is replacing Switch as of v6
  Route,
  NavLink,
} from "react-router-dom";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
