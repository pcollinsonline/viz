import React from 'react';
import BookDisplay from './book-display';
import BookLink from './book-link';
import { BestSeller } from '../interfaces';

interface BookListProps {
  listName: string;
  books: BestSeller[];
}

const BookList = ({ listName, books }: BookListProps): JSX.Element => {
  return (
    <>
      <h2 className="tc mt0 fw5 moon-gray">{listName}</h2>
      <div>
        {books &&
          books.map(bestSeller => {
            const { title, author, description, amazonProductUrl } = bestSeller;
            return (
              <article
                data-testid="nyt-best-seller"
                className="flex ph3 ph5-ns pv5 w-70 ml-auto mr-auto mw8 bb bw1 bw0-l b--silver"
                key={author}
              >
                <div className="cf">
                  <section className="fl w-100 w-40-l mb3 pr5-l mb0-l flex items-center justify-center-l relative">
                    <BookDisplay book={bestSeller} />
                  </section>
                  <section className="fl w-100 w-60-l relative mt3-m">
                    <header className="w-100">
                      <h3 className="f3 lh-title fw9 mb1 mt0 pt3 bt-l bw2-l b--light-gray mw6">
                        {title}
                      </h3>
                      <h4 className="f4 fw3 silver lh-title mt0">{author}</h4>
                    </header>
                    <p
                      className="f5 lh-copy measure mt4"
                      style={{ marginBottom: '2.5rem' }}
                    >
                      {description}
                    </p>
                    <BookLink href={amazonProductUrl} target="_new">
                      Get the Book
                    </BookLink>
                  </section>
                </div>
              </article>
            );
          })}
      </div>
    </>
  );
};

export default BookList;
