import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { afterEach, vi } from 'vitest';

afterEach(() => {
  cleanup();
  document.body.className = '';
  localStorage.clear();
  vi.restoreAllMocks();
});
