
import React from 'react';
// Import screen, fireEvent, and waitFor directly to avoid export resolution issues in some environments
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { render } from '../test-utils';
import MobilityAssistant from '../../sections/MobilityAssistant';

// Declare Jest globals for TypeScript
/* eslint-disable no-var */
declare var describe: any;
declare var test: any;
declare var expect: any;
declare var jest: any;

// Mock @google/genai
jest.mock('@google/genai', () => ({
  GoogleGenAI: jest.fn().mockImplementation(() => ({
    models: {
      generateContent: jest.fn().mockResolvedValue({
        text: 'Mocked AI Response: Roam Air has a range of 180km.'
      })
    }
  }))
}));

describe('MobilityAssistant Section', () => {
  test('sends message and displays AI response', async () => {
    render(<MobilityAssistant lang="en" />);
    
    const input = screen.getByPlaceholderText(/Ask about charging/i);
    const sendBtn = screen.getByRole('button');

    fireEvent.change(input, { target: { value: 'How far can it go?' } });
    fireEvent.click(sendBtn);

    // User message should appear immediately
    expect(screen.getByText('How far can it go?')).toBeInTheDocument();
    
    // Typing indicator
    expect(document.querySelector('.animate-pulse')).toBeInTheDocument();

    // AI Response should appear
    await waitFor(() => {
      expect(screen.getByText(/Mocked AI Response/i)).toBeInTheDocument();
    });
  });
});
