interface NyTimesApiBestSellerListResponse {
  weeks_on_list: number;
  published_date: string;
  rank: number;
  amazon_product_url: string;
  list_name: string;
  book_details: [
    {
      title: string;
      description: string;
      author: string;
      publisher: string;
      primary_isbn10: string;
      primary_isbn13: string;
    }
  ];
}

interface NyTimesApiListNameResponse {
  display_name: string;
  list_name_encoded: string;
}

interface BestSellerListName {
  displayName: string;
  apiName: string;
}

interface BestSellersList {
  lists: BestSellerListName[];
}

interface BestSeller {
  readonly title: string;
  readonly description: string;
  readonly author: string;
  readonly publisher: string;
  readonly rank: number;
  readonly weeksOnList: number;
  readonly publishDate: string;
  readonly amazonProductUrl: string;
  readonly isbn13: string;
  readonly isbn10: string;
  readonly coverUri: string;
  readonly listName: string;
}

// eslint-disable-next-line import/prefer-default-export
export type {
  NyTimesApiBestSellerListResponse,
  NyTimesApiListNameResponse,
  BestSeller,
  BestSellersList,
  BestSellerListName,
};
