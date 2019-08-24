import React from 'react';

import brick from 'assets/images/brick.svg';
import plate from 'assets/images/plate.svg';
import aggregate from 'assets/images/aggregate.svg';
import pot from 'assets/images/pot.svg';

import { Product } from 'components';

import OfferHeading from './OfferHeading';
import OfferBlock from './OfferBlock';

const Products = () => (
  <div>
    <OfferHeading>Produkty</OfferHeading>
    <OfferBlock>
      <Product icon={brick}>Kostka brukowa</Product>
      <Product icon={plate}>Płyty tarasowe</Product>
      <Product icon={aggregate}>Kruszywa</Product>
      <Product icon={pot}>Dodatki ogrodowe</Product>
    </OfferBlock>
  </div>
);

export default Products;
