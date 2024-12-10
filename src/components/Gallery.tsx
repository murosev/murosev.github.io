import React, { useState } from 'react';
import './Gallery.css';

import dog1 from '../assets/dog_1.jpg';
import dog2 from '../assets/dog_2.jpg';
import dog3 from '../assets/dog_3.jpg';
import dog4 from '../assets/dog_4.jpg';
import dog5 from '../assets/dog_5.jpg';

const initialImages = [
  { id: 1, src: dog1, alt: 'Dog 1' },
  { id: 2, src: dog2, alt: 'Dog 2' },
  { id: 3, src: dog3, alt: 'Dog 3' },
  { id: 4, src: dog4, alt: 'Dog 4' },
  { id: 5, src: dog5, alt: 'Dog 5' },
];

function Gallery() {
  const [images, setImages] = useState(initialImages);
  const [draggedImage, setDraggedImage] = useState<number | null>(null);

  const handleDragStart = (id: number) => {
    setDraggedImage(id);
  };

  const handleDrop = (id: number) => {
    if (draggedImage === null || draggedImage === id) return;

    const draggedIndex = images.findIndex((img) => img.id === draggedImage);
    const droppedIndex = images.findIndex((img) => img.id === id);

    const updatedImages = [...images];
    const [draggedItem] = updatedImages.splice(draggedIndex, 1);
    updatedImages.splice(droppedIndex, 0, draggedItem);

    setImages(updatedImages);
    setDraggedImage(null);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <main className="gallery">
      <h1>Tala Gallery</h1>
      <div className="image-container">
        {images.map((image) => (
          <div
            key={image.id}
            className="image-wrapper"
            draggable
            onDragStart={() => handleDragStart(image.id)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(image.id)}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Gallery;
