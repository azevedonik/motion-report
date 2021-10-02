import React, { FunctionComponent } from 'react';
import { ImageMap } from '@qiuz/react-image-map';

interface ImageMapGeneratorProps {}

const ImageMapGenerator: FunctionComponent<ImageMapGeneratorProps> = () => {
  return <ImageMap src='Stand.jpeg' />;
};

export default ImageMapGenerator;
