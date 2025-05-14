import { render, screen } from '@testing-library/react-native';
import { Input } from '.';

describe('Component: Input', () => {
  it('should be render without activity indicator', () => {
    render(<Input />);
    const activityIndicator = screen.queryByTestId('activity-indicator');
    expect(activityIndicator).toBeNull()
  });

  it('should be render with activity indicator if isLoading props is true', () => {
      render(<Input isLoading />);

      const activityIndicator = screen.getByTestId('activity-indicator');
      expect(activityIndicator).toBeTruthy();
  })
});
