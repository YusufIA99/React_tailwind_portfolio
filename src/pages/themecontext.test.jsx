import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useTheme, THEMES } from '../context/theme.js';
import { renderWithProviders } from '../test/renderWithProviders.jsx';

function ThemeConsumer() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <span>{theme}</span>
      <button onClick={toggleTheme} type="button">
        Toggle theme
      </button>
    </>
  );
}

describe('ThemeProvider', () => {
  it('uses dark theme by default and applies matching body classes', () => {
    renderWithProviders(<ThemeConsumer />);

    expect(screen.getByText(THEMES.DARK)).toBeInTheDocument();
    expect(document.body).toHaveClass('from-gray-900');
    expect(localStorage.getItem('theme')).toBe(THEMES.DARK);
  });

  it('reads initial theme from localStorage', () => {
    localStorage.setItem('theme', THEMES.LIGHT);

    renderWithProviders(<ThemeConsumer />);

    expect(screen.getByText(THEMES.LIGHT)).toBeInTheDocument();
    expect(document.body).toHaveClass('from-gray-200');
  });

  it('toggles theme and persists updated value', async () => {
    const user = userEvent.setup();
    renderWithProviders(<ThemeConsumer />);

    await user.click(screen.getByRole('button', { name: /toggle theme/i }));

    expect(screen.getByText(THEMES.LIGHT)).toBeInTheDocument();
    expect(document.body).toHaveClass('from-gray-200');
    expect(localStorage.getItem('theme')).toBe(THEMES.LIGHT);
  });
});
