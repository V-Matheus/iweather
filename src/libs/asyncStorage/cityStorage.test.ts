import { CityProps } from '@services/getCityByNameService';
import { getStorageCity, saveStorageCity } from './cityStorage';

describe('Storage: CityStorage', () => {
  it('should be return null when don´t have city storaged', async () => {
    const response = await getStorageCity();
    expect(response).toBeNull();
  });

  it('should be return a city when have city storaged', async () => {
    const newCity: CityProps = {
      id: '1',
      name: 'São Paulo',
      latitude: 123,
      longitude: 456,
    };

    await saveStorageCity(newCity);
    const response = await getStorageCity();

    expect(response).toEqual(newCity);
  });
});
