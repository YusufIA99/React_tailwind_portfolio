import { render } from '@testing-library/react';
import PropTypes from 'prop-types';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../pages/themecontext.jsx';

export const renderWithProviders = (ui, { route = '/', withTheme = true } = {}) => {
  const Wrapper = ({ children }) => {
    const wrappedWithTheme = withTheme ? <ThemeProvider>{children}</ThemeProvider> : children;
    return <MemoryRouter initialEntries={[route]}>{wrappedWithTheme}</MemoryRouter>;
  };
  Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return render(ui, { wrapper: Wrapper });
};
