import React, { useState } from 'react';
import products from '@site/src/data/products';

const ProductTable = ({ category }) => {
  const [search, setSearch] = useState('');

  // Filtrer les produits par catégorie, puis par recherche dans la description et le détail
  const filteredProducts = products
    .filter(product => product.category === category) // Filtre par catégorie
    .filter(product =>
      product.description.toLowerCase().includes(search.toLowerCase()) ||
      product.détail.toLowerCase().includes(search.toLowerCase())
    ); // Filtre de recherche

  return (
    <div style={{ width: '100%' }}>
      {/* Barre de recherche */}
      <input
        type="text"
        placeholder="Rechercher un produit..."
        style={{
          padding: '8px',
          marginBottom: '1rem',
          width: '100%',
          borderRadius: '4px',
          border: '1px solid #ddd'
        }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Tableau des produits filtrés */}
      <table style={{
        width: '100%',
        tableLayout: 'fixed',
        borderCollapse: 'collapse',
        fontFamily: 'Arial, sans-serif',
        fontSize: '1rem',
        color: '#333',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        overflow: 'hidden',
      }}>
        <thead>
          <tr style={{ backgroundColor: '#2e42b3', color: '#fff' }}>
            <th style={{ padding: '12px', fontWeight: 'bold', borderBottom: '2px solid #ddd', width: '10%' }}>Référence</th>
            <th style={{ padding: '12px', fontWeight: 'bold', borderBottom: '2px solid #ddd', width: '25%' }}>Description</th>
            <th style={{ padding: '12px', fontWeight: 'bold', borderBottom: '2px solid #ddd', width: '1000px' }}>Détail</th>
            <th style={{ padding: '12px', fontWeight: 'bold', borderBottom: '2px solid #ddd', width: '1%' }}>Prix HT (€)</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <tr
            key={index}
            style={{
              backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9f9f9',
              transition: 'background-color 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e6f7ff'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = index % 2 === 0 ? '#ffffff' : '#f9f9f9'}
          >
              <td style={{ padding: '12px', borderBottom: '1px solid #ddd', whiteSpace: 'nowrap' }}>{product.reference}</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>
                {product.description}
              </td>
              <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>
                {product.détail}
              </td>
              <td style={{
                padding: '12px',
                borderBottom: '1px solid #ddd',
                fontWeight: 'bold',
                color: '#009900',
                textAlign: 'right',
                whiteSpace: 'nowrap',
              }}>
                {product.price.toFixed(2)} €
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
