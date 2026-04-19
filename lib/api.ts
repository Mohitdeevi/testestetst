import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useContact = (url: string) => {
  const { data, error } = useSWR(url, fetcher);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
