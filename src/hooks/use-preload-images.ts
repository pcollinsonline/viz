import React from 'react';

interface ImagePreloadState {
  uri: string;
  status: 'IDLE' | 'LOADED' | 'ERROR';
}

interface ImagePreloadStatus {
  isLoading: boolean;
  progress: number;
  processed: ImagePreloadState[];
  imageUris: string[];
}

const usePreloadImages = (imageUris: string[]): ImagePreloadStatus => {
  const [loaded, setLoaded] = React.useState<ImagePreloadState[]>([]);

  React.useEffect(() => {
    if (!imageUris.length) {
      return () => {};
    }

    let mounted = true;
    let idx = 0;

    const timerId = setInterval(() => {
      if (idx === imageUris.length) {
        clearInterval(timerId);
        return;
      }

      const uri = imageUris[(idx += 1)];
      const img = new Image();

      img.onload = () => {
        if (mounted) {
          setLoaded(prevArr => [...prevArr, { uri, status: 'LOADED' }]);
        }
      };

      img.onerror = () => {
        if (mounted) {
          setLoaded(prevArr => [...prevArr, { uri, status: 'ERROR' }]);
        }
      };

      img.src = uri;
    }, 100);

    return () => {
      clearInterval(timerId);
      setLoaded([]);
      mounted = false;
    };
  }, [imageUris]);

  const progress = !loaded.length
    ? 0
    : Math.min((loaded.length / imageUris.length) * 100, 100);

  return {
    isLoading: loaded.length !== imageUris.length,
    processed: loaded,
    progress,
    imageUris,
  };
};

export default usePreloadImages;
