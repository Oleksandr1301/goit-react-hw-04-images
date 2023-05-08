import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { LoaderBox } from './loader.styled';
export const Loader = () => {
  return (
    <LoaderBox>
      <RotatingLines
        className='loader'
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </LoaderBox>
  );
};
