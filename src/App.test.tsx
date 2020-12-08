import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  let component : RenderResult;

  test('it render successfully', () => {
    component = render(<App />);

    expect(component).toBeTruthy();
  });
});