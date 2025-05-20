import { render, screen } from '@testing-library/react-native';
import { NextDays } from '@components/NextDays';

import clearDay from '@assets/clear_day.svg';

describe('Component: NextDays', () => {
  it('should be render day', () => {
    render(
      <NextDays
        data={[
          {
            day: '18/07',
            min: '30ºc',
            max: '35ºc',
            icon: clearDay,
            weather: 'Céu limpo',
          },
           {
            day: '19/07',
            min: '31ºc',
            max: '35ºc',
            icon: clearDay,
            weather: 'Nublado',
          },
           {
            day: '20/07',
            min: '32ºc',
            max: '35ºc',
            icon: clearDay,
            weather: 'Céu limpo',
          },
           {
            day: '21/07',
            min: '33ºc',
            max: '35ºc',
            icon: clearDay,
            weather: 'Chuva',
          },
           {
            day: '22/07',
            min: '34ºc',
            max: '35ºc',
            icon: clearDay,
            weather: 'Céu limpo',
          },
        ]}
      />,
    );

    expect(screen.getByText('18/07')).toBeTruthy();
  });
});
