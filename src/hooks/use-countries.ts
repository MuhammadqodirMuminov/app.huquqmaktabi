import { useAppStore } from '@/store/app';
import { useGetCountriesQuery } from '@/services/tours';

export const useCountries = (code?: string) => {
  const { countryCode } = useAppStore();
  const { data: countries, isLoading } = useGetCountriesQuery();

  let foundedCountry;
  if (code) {
    foundedCountry = countries?.content?.find(
      (country) => country.code === code,
    );
  } else {
    foundedCountry = countries?.content?.find(
      (country) => country.code === countryCode,
    );
  }

  return { countries, isLoading, foundedCountry };
};
