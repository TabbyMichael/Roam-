
import React from 'react';
// Import screen, fireEvent, and waitFor directly to avoid export resolution issues in some environments
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { render } from '../test-utils';
import { analytics } from '../../lib/analytics';
// Import LeadModal to resolve "Cannot find name 'LeadModal'" errors
import LeadModal from '../../components/LeadModal';

// Declare Jest globals for TypeScript
/* eslint-disable no-var */
declare var describe: any;
declare var test: any;
declare var expect: any;
declare var beforeEach: any;
declare var jest: any;

describe('LeadModal Component', () => {
  const mockOnSave = jest.fn().mockResolvedValue(true);
  const defaultProps = {
    isOpen: true,
    onClose: jest.fn(),
    onSave: mockOnSave,
    type: 'preorder' as const,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders step 1 initially', () => {
    render(<LeadModal {...defaultProps} />);
    expect(screen.getByText(/Step 1 of 2/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Full Name/i)).toBeInTheDocument();
  });

  test('validates required fields before moving to step 2', () => {
    render(<LeadModal {...defaultProps} />);
    const nextBtn = screen.getByText(/NEXT STEP/i);
    
    // Attempt to click without data
    fireEvent.click(nextBtn);
    expect(screen.getByText(/Step 1 of 2/i)).toBeInTheDocument(); // Still on step 1
  });

  test('successfully submits the full form', async () => {
    render(<LeadModal {...defaultProps} />);
    
    // Fill Step 1
    fireEvent.change(screen.getByPlaceholderText(/Full Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText(/you@example.com/i), { target: { value: 'john@example.com' } });
    fireEvent.click(screen.getByText(/NEXT STEP/i));

    // Fill Step 2
    expect(await screen.findByText(/Step 2 of 2/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/FINALIZE REQUEST/i));

    // Verify Success State
    expect(screen.getByText(/SAVING.../i)).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText(/SUCCESS\./i)).toBeInTheDocument();
    });

    expect(mockOnSave).toHaveBeenCalledWith(expect.objectContaining({
      name: 'John Doe',
      email: 'john@example.com'
    }));
  });

  test('handles persistence failure gracefully', async () => {
    const errorMock = jest.fn().mockRejectedValue(new Error('Network error'));
    render(<LeadModal {...defaultProps} onSave={errorMock} />);
    
    // Advance to step 2 and submit
    fireEvent.change(screen.getByPlaceholderText(/Full Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText(/you@example.com/i), { target: { value: 'john@example.com' } });
    fireEvent.click(screen.getByText(/NEXT STEP/i));
    fireEvent.click(await screen.findByText(/FINALIZE REQUEST/i));

    // Should stay on form and not show success
    await waitFor(() => {
      expect(screen.queryByText(/SUCCESS\./i)).not.toBeInTheDocument();
      expect(screen.getByText(/FINALIZE REQUEST/i)).toBeInTheDocument();
    });
  });
});
