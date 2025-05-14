import { api } from './api';
import { getCityByNameService } from './getCityByNameService';

describe('API: getCityByNameService', () => {
  it('should be return city details', async () => {
    const data = {
      id: '1',
      name: 'São Paulo',
      sys: {
        country: 'BR',
      },
      coord: {
        lat: 123,
        lon: 456,
      },
    };

    jest.spyOn(api, 'get').mockResolvedValue({
      data,
    });

    const response = await getCityByNameService('São Paulo');
    expect(response).toEqual([
      { id: '1', latitude: 123, longitude: 456, name: 'São Paulo, BR' },
    ]);
  });
});
