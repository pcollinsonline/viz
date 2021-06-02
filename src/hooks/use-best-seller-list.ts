import React from 'react';
import useFetchBestSellers from '../api/use-fetch-nyt-best-sellers';
import { BestSeller } from '../interfaces';
import usePreloadImages from './use-preload-images';

interface ListResponse {
  status: 'idle' | 'error' | 'loading' | 'success';
  books: BestSeller[] | undefined;
}

const useBestSellerList = (listName = 'hardcover-fiction'): ListResponse => {
  const { status, data } = useFetchBestSellers(listName);

  const imagesToPreload = React.useMemo<string[]>(() => {
    if (data) {
      return data.map(bestSeller => bestSeller.coverUri);
    }
    return [];
  }, [data]);

  const { progress } = usePreloadImages(imagesToPreload);

  let actualStatus = status;
  if (status === 'success' && progress !== 100) {
    actualStatus = 'loading';
  }

  return {
    status: actualStatus,
    books: data,
  };
};

export default useBestSellerList;
