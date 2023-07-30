import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main element', () => {
  render(<App />);
  const mainElement: HTMLElement = screen.getByTestId("app-main");
  expect(mainElement).toBeInTheDocument();
});
