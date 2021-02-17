import React from 'react';
import { render, screen } from '@testing-library/react';

import EmptyLibrary, { EmptyLibraryMessage } from "./EmptyLibrary";

it('renders empty library message', () => {
  render(<EmptyLibrary />);
  expect(screen.getByText(EmptyLibraryMessage)).toBeInTheDocument();
});
