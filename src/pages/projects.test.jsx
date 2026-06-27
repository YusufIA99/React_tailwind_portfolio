import { screen } from '@testing-library/react';
import Projects from './projects.jsx';
import { projects } from '../data/projects.js';
import { renderWithProviders } from '../test/renderWithProviders.jsx';

describe('Projects page', () => {
  it('renders all projects from the data source', () => {
    renderWithProviders(<Projects />);

    expect(screen.getByRole('heading', { name: /see my work/i })).toBeInTheDocument();
    projects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    });
    expect(document.querySelectorAll('a[target="_blank"]')).toHaveLength(projects.length);
  });
});
