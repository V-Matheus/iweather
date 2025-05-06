import { render, screen } from '@testing-library/react-native';
import { Input } from '.';

describe('Component: Input', () => {
  it('should be render without activity indicator', () => {
    render(<Input />);
    const activityIndicator = screen.queryByTestId('activity-indicator');
    expect(activityIndicator).toBeNull()
  });
});
