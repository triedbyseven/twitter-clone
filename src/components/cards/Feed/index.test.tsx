import { render, screen } from '@testing-library/react';
import sum from './sum';
import Feed from '.';

test('adds 1 + 4 to equal 5', () => {
  const result: number = sum(1, 4);

  expect(result).toBe(5);
});

test('renders list of nodes without crashing', () => {
  render(<Feed />);

  const customNode = screen.getByTestId('custom-element');

  expect(customNode).toBeTruthy();
});

test('renders a list of four nodes', () => {
  render(<Feed />);

  const customNode = screen.getByTestId('custom-element');

  const nodeListLength = customNode.children.length;

  expect(nodeListLength).toBe(4);
});