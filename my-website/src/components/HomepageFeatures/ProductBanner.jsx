import React from 'react';

const ProductBanner = ({ images }) => {
  return (
    <div style={{
      display: 'flex',
      gap: '1rem',
      overflowX: 'auto',
      padding: '1rem 0',
      justifyContent: 'center',
    }}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Produit ${index + 1}`}
          style={{
            height: '100px',
            objectFit: 'cover',
            borderRadius: '8px',
            boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.2)',
          }}
        />
      ))}
    </div>
  );
};

export default ProductBanner;
