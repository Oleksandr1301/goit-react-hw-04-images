import { useState, useEffect } from 'react';

import { Notify } from 'notiflix';

import { Searchbar } from './searchbar/searchbar';
import { ImageGallery } from './imageGallery/imageGallery';
import { Button } from './buttonLoadMore/buttonLoadMore';
import { Loader } from './loader/loader';
import { Modal } from './modal/modal';
import { fetchHitsByQuery } from './fetchImg/fetchImg';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    setQuery(e.target.search.value);
    setImages([]);
    setPage(1);
  };

  const onNextPage = () => {
    setPage(prevState => prevState + 1);
    setIsLoading(true);
  };

  const onClickImage = url => {
    setShowModal(true);
    setLargeImageURL(url);
  };

  const onModalClose = () => {
    setShowModal(false);
    setLargeImageURL('');
  };

  useEffect(() => {
    if (!query) return;

    const fetchGallery = async searchQuery => {
      try {
        const response = await fetchHitsByQuery(searchQuery, page);
        setImages(prevState => [...prevState, ...response]);
        if (response.length < 12) {
          setShowBtn(false);
        }
        if (response.length === 12) {
          setShowBtn(true);
        }
        if (response.length === 0) {
          Notify.failure('No matches found!');
        }
      } catch (error) {
        console.log('Error');
      } finally {
        setIsLoading(false);
      }
    };
    fetchGallery(query, page);
  }, [page, query]);

  return (
    <div>
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery images={images} onClickImage={onClickImage} />
      {isLoading && <Loader />}
      {showBtn && !isLoading && <Button onClick={onNextPage} />}
      {showModal && (
        <Modal largeImageURL={largeImageURL} onModalClose={onModalClose} />
      )}
    </div>
  );
};
