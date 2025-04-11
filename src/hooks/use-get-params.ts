import { useSearchParams } from 'react-router-dom';

export const useGetParams = (params: string | string[]) => {
  const [searchParams] = useSearchParams();

  if (typeof params === 'string') {
    const value = searchParams.get(params);
    return [value] as string[];
  } else {
    const values = params.map((param) => searchParams.get(param));
    return values as string[];
  }
};
