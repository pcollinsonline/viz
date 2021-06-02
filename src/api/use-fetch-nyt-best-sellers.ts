/* eslint-disable @typescript-eslint/naming-convention */
import { useQuery, UseQueryResult } from 'react-query';
import { BestSeller, NyTimesApiBestSellerListResponse } from '../interfaces';

const BASE_URL = 'https://api.nytimes.com/svc/books/v3/';

// this is for dev only
// this would be added by
// server side api or lamda function, etc.
const API_KEY = process.env.REACT_APP_NYT_API_KEY;

function useFetchBestSellers(
  list = 'hardcover-fiction'
): UseQueryResult<BestSeller[], Error> {
  return useQuery(list, async () => {
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');

    const response = await fetch(
      `${BASE_URL}lists.json?api-key=${API_KEY}&list=${list}`,
      {
        headers,
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch!');
    }

    return response
      .json()
      .then(res => {
        return res.results;
      })
      .then(results => {
        return results.map((result: NyTimesApiBestSellerListResponse) => {
          const {
            weeks_on_list,
            published_date,
            rank,
            amazon_product_url,
            book_details,
            list_name,
          } = result;

          const {
            title,
            description,
            author,
            publisher,
            primary_isbn10,
            primary_isbn13,
          } = book_details[0];

          return {
            title,
            description,
            author,
            publisher,
            rank,
            weeksOnList: weeks_on_list,
            publishDate: published_date,
            amazonProductUrl: amazon_product_url,
            isbn10: primary_isbn10,
            isbn13: primary_isbn13,
            listName: list_name,
            coverUri: `http://covers.openlibrary.org/b/isbn/${primary_isbn13}-L.jpg`,
          } as BestSeller;
        });
      });
  });
}

export default useFetchBestSellers;
