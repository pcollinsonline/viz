declare interface NyTimesApiBestSeller {
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

interface NyTimesBestSellerList {
  results: NyTimesApiBestSeller[]
}
