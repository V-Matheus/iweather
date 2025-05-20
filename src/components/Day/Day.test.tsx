import { render } from '@testing-library/react-native';
import { Day } from '@components/Day';

import clearDay from '@assets/icons/clear-day.svg';

describe('Component: Day', () => {
  it('should be render day', () => {
    const { screen } = render(
      <Day
        data={{
          day: '18/07',
          min: '30ºc',
          max: '35ºc',
          icon: clearDay,
          weather: 'Céu limpo',
        }}
      />,
    );

    
  });
});
