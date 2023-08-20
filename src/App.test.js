import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import Table from './Table';
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

test('changing dpopdown options', () => {
  render(<App />);

  const selector = document.getElementById("dropdown");
  fireEvent.click(selector)

  const optionAfterClick = screen.getByText('project-details');
  fireEvent.click(optionAfterClick);

  expect(optionAfterClick).toBeInTheDocument()
});
