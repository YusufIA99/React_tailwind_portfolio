import { projects } from './projects.js';

describe('projects data integrity', () => {
  it('contains unique ids', () => {
    const ids = projects.map((project) => project.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('contains required fields for each project', () => {
    projects.forEach((project) => {
      expect(typeof project.title).toBe('string');
      expect(project.title.length).toBeGreaterThan(0);
      expect(typeof project.description).toBe('string');
      expect(project.description.length).toBeGreaterThan(0);
      expect(typeof project.link).toBe('string');
      expect(project.link.length).toBeGreaterThan(0);
      expect(Array.isArray(project.icons)).toBe(true);
      expect(project.icons.length).toBeGreaterThan(0);
    });
  });
});
