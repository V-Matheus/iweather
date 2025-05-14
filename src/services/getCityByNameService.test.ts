import { mocCityApiResponse } from '@__tests__/mocks/api/mockCityApiResponse';
import { api } from './api';
import { getCityByNameService } from './getCityByNameService';

describe('Service: getCityByNameService', () => {
  it('should be return city details', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({
      data: mocCityApiResponse,
    });

    const response = await getCityByNameService('São Paulo');
    expect(response).toEqual([
      { id: '1', latitude: 123, longitude: 456, name: 'São Paulo, BR' },
    ]);
  });
});
