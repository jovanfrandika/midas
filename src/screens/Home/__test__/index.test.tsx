import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import mockNavigation from '@react-navigation/native';

import Home, { exampleText, nextButtonLabel, nextButtonTestId } from '../index';

jest.mock('@react-navigation/native', () => {
  const navigate = jest.fn();
  return {
    useNavigation: () => ({
      navigate,
    }),
  };
});

describe('<Home />', () => {
  describe('Component test', () => {
    it('should have example text', () => {
      const { queryByText } = render(<Home />);

      expect(queryByText(exampleText)).toBeTruthy();
      expect(queryByText(nextButtonLabel)).toBeTruthy();
    });
  });

  describe('Behaviour test', () => {
    it('should have navigate to Detail screen', async () => {
      const { queryByTestId } = render(<Home />);

      fireEvent.press(queryByTestId(nextButtonTestId)!);

      await waitFor(() =>
        expect(mockNavigation.useNavigation().navigate).toHaveBeenCalledTimes(
          1,
        ),
      );
    });
  });
});
