import { useCity } from '@hooks/useCity';
import { act, renderHook, waitFor } from '@testing-library/react-native';
import { CityProvider } from '@contexts/CityContext';

describe('Context: CityContext', () => {
  it('should be change selected city', async () => {
    const { result } = renderHook(() => useCity(), { wrapper: CityProvider });

    await waitFor(() =>
      act(() => {
        console.log(result.current);
      }),
    );
  });
});
