import React from 'react';
import { IIngredients } from 'interfaces/IIngredients';
import { BurgerContainer, Card, CardBody, ImageContainer } from './styled';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const Burger: React.FC<{
  ingredients: IIngredients[];
  removeItem: (item: IIngredients, key: 'id' | 'uuid') => void;
}> = ({ ingredients, removeItem }) => {
  const handleDecrement = (item: IIngredients) => removeItem(item, 'uuid');
  return (
    <BurgerContainer>
      <Card>
        <CardBody>
          <img src={`${BASE_URL}/img/bun_top.png`} width="100%" />
          {ingredients.map((x) => (
            <ImageContainer onClick={() => handleDecrement(x)} key={x.uuid}>
              <img alt={x.name} src={`${BASE_URL}/img/${x.src}`} width="100%" />
            </ImageContainer>
          ))}
          <img src={`${BASE_URL}/img/bun_bottom.png`} width="100%" />
        </CardBody>
      </Card>
    </BurgerContainer>
  );
};

export default Burger;
