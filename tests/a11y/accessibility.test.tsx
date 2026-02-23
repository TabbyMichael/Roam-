
import React from 'react';
import { render } from '../test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import HomePage from '../../pages/HomePage';
import Navbar from '../../components/Navbar';

// Declare Jest globals for TypeScript
/* eslint-disable no-var */
declare var describe: any;
declare var test: any;
declare var expect: any;

expect.extend(toHaveNoViolations);

describe('Accessibility Audit', () => {
  test('Navbar should have no a11y violations', async () => {
    const { container } = render(
      <Navbar 
        onNavigate={() => {}} 
        theme="dark" 
        toggleTheme={() => {}} 
        lang="en" 
        toggleLang={() => {}} 
        onOpenModal={() => {}} 
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('HomePage should have no a11y violations', async () => {
    const { container } = render(<HomePage onNavigate={() => {}} lang="en" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
