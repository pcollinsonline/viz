import React from 'react';
import BookList from './components/book-list';
import useBestSellerList from './hooks/use-best-seller-list';
import FadeIn from './components/fade-in';
import LoadingIndicator from './components/loading-indicator';

const WaitState = () => (
  <>
    <div className="flex justify-center flex-column mt4 w-100">
      <h1 className="tc mb1">NYT Best Sellers</h1>
    </div>
    <div className="mt5 flex justify-center w-100">
      <LoadingIndicator />
    </div>
    <p className="h6 moon-gray tc">loading...</p>
  </>
);

const Uhoh = () => <div>Uh oh....</div>;

const App: React.FC = () => {
  const { status, books } = useBestSellerList();

  if (status === 'loading') {
    return <WaitState />;
  }

  if (status === 'error') {
    return <Uhoh />;
  }

  if (books) {
    return (
      <>
        <div className="flex justify-center flex-column mt4 w-100">
          <h1 className="tc mb1">NYT Best Sellers</h1>
        </div>
        <FadeIn duration={500}>
          <BookList listName={books[0].listName} books={books} />
        </FadeIn>
      </>
    );
  }

  throw Error('invalid state');
};

export default App;
