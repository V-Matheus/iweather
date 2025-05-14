import { mocCityApiResponse } from '@__tests__/mocks/mockCityApiResponse';
import { api } from './api';
import { getCityByNameService } from './getCityByNameService';

describe('API: getCityByNameService', () => {
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
