import { fireEvent, render } from '@testing-library/react';
import App from './App';
import TableData from './TableData';

test('renders dropdown', () => {
  render(<App />);
  const dropdown = document.getElementById("dropdown");
  expect(dropdown).toBeInTheDocument();
});

test('renders first table', () => {
  render(<TableData />);
  const table = document.getElementById("table");
  expect(table).toBeInTheDocument();
});

test('changing dpopdown options is enabled', () => {
  render(<App />);
  const selector = document.getElementById("dropdown");
  fireEvent.click(selector)
  expect(selector).not.toBeDisabled()
});
