import { IIngredients } from 'interfaces/IIngredients';
import React from 'react';
import { Card, Header, ImageContainer } from './styled';
import { FaMinus } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import Motion from 'components/motion';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const MOTION_DELAY = 0.2; // seconds

const BurgerItem: React.FC<{
  ingredients: IIngredients;
  items: IIngredients[];
  appendItem: (item: IIngredients) => void;
  removeItem: (item: IIngredients, key: 'id' | 'uuid') => void;
}> = ({ ingredients, items, appendItem, removeItem }) => {
  const { name, src } = ingredients;
  const handleIncrement = () => appendItem(ingredients);
  const handleDecrement = () => removeItem(ingredients, 'id');

  return (
    <Motion delay={ingredients.id * MOTION_DELAY}>
      <Card>
        <Header>
          <h3>{name}</h3>
          <div className="counter-container">
            <button disabled={!items.length} className="counter-btn" onClick={handleDecrement}>
              <FaMinus fontSize={10} />
            </button>
            <div className="counter-text">{items.length}</div>
            <button className="counter-btn" onClick={handleIncrement}>
              <FaPlus fontSize={10} />
            </button>
          </div>
        </Header>
        <ImageContainer>
          <img src={`${BASE_URL}/img/${src}`} width="100%" />
        </ImageContainer>
      </Card>
    </Motion>
  );
};

export default BurgerItem;
