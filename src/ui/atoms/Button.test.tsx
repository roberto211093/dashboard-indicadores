import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import '@testing-library/jest-dom';

it('renders button text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
