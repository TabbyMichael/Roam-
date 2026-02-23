
import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

// Declare Jest globals for TypeScript environment
/* eslint-disable no-var */
declare var jest: any;

// Mocking Analytics for all tests
if (typeof jest !== 'undefined') {
  jest.mock('../lib/analytics', () => ({
    analytics: {
      track: jest.fn(),
    },
  }));
}

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="dark">
      {children}
    </div>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

// Re-export everything from @testing-library/react
export * from '@testing-library/react';

// Export the customized render method
export { customRender as render };
