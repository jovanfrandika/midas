import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import mockNavigation from '@react-navigation/native';

import Detail, {
  exampleText,
  backButtonLabel,
  backButtonTestId,
} from '../index';

jest.mock('@react-navigation/native', () => {
  const navigate = jest.fn();
  return {
    useNavigation: () => ({
      navigate,
    }),
  };
});

describe('<Detail />', () => {
  describe('Component test', () => {
    it('should have example text', () => {
      const { queryByText } = render(<Detail />);

      expect(queryByText(exampleText)).toBeTruthy();
      expect(queryByText(backButtonLabel)).toBeTruthy();
    });
  });

  describe('Behaviour test', () => {
    it('should have navigate to Home screen', async () => {
      const { queryByTestId } = render(<Detail />);

      fireEvent.press(queryByTestId(backButtonTestId)!);

      await waitFor(() =>
        expect(mockNavigation.useNavigation().navigate).toHaveBeenCalledTimes(
          1,
        ),
      );
    });
  });
});
