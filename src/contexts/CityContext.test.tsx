import { useCity } from '@hooks/useCity';
import { renderHook } from '@testing-library/react-native';
import { CityProvider } from '@contexts/CityContext';

describe('Context: CityContext', () => {
  it('should be change selected city', async () => {
    const { result } = renderHook(() => useCity(), { wrapper: CityProvider });

    console.log(result.current);
    
  });
});
