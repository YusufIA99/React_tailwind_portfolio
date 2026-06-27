import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navigation from './navigation.jsx';
import { renderWithProviders } from '../test/renderWithProviders.jsx';

describe('Navigation', () => {
  it('renders route links and marks the active route', () => {
    renderWithProviders(<Navigation />, { route: '/projects' });

    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /projects/i })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
  });

  it('toggles theme through the theme switch button', async () => {
    const user = userEvent.setup();
    renderWithProviders(<Navigation />);

    const toggleButton = screen.getByRole('button', { name: /switch to light theme/i });
    await user.click(toggleButton);

    expect(document.body).toHaveClass('from-gray-200');
    expect(screen.getByRole('button', { name: /switch to dark theme/i })).toBeInTheDocument();
  });
});
