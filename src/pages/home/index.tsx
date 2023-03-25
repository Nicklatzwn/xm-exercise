import { ingredientsApi } from 'api/http/ingredients';
import Burger from 'components/burger';
import BurgerItem from 'components/burgerItem';
import Spinner from 'components/spinner';
import { IIngredients } from 'interfaces/IIngredients';
import { isEmpty, maxBy } from 'lodash';
import React, { useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import { BurgerContent, BurgerList, H2, Home, SpinnerContainer } from './styled';

const HomePage: React.FC = () => {
  const [elements, setElements] = useState<IIngredients[]>([]);
  const { data, isLoading } = useQuery('ingredients', () => ingredientsApi().then((res) => res.data), {
    refetchOnWindowFocus: false,
    refetchOnMount: 'always',
  });

  const appendItem = (item: IIngredients) =>
    setElements([{ ...item, uuid: (maxBy(elements, 'uuid')?.uuid || 0) + 1 }, ...elements]);

  const removeItem = (item: IIngredients, key: 'id' | 'uuid') => {
    const element = elements.find((x) => x[key] === item[key]);
    if (!isEmpty(element)) {
      setElements([...elements.filter((x) => x.uuid !== element.uuid)]);
    }
  };
  const getBurgerItems = useCallback(
    (item: IIngredients) => (elements || []).filter((x) => x.id === item.id),
    [elements],
  );

  return (
    <Home>
      <H2>Burger ingredients</H2>
      {isLoading ? (
        <SpinnerContainer>
          <Spinner size={50} />
        </SpinnerContainer>
      ) : (
        <BurgerList>
          {(data || []).map((x) => (
            <BurgerItem
              appendItem={appendItem}
              removeItem={removeItem}
              items={getBurgerItems(x)}
              key={x.id}
              ingredients={x}
            />
          ))}
        </BurgerList>
      )}
      {(data || []).length > 0 && (
        <BurgerContent>
          <H2>Burger</H2>
          <Burger ingredients={elements} removeItem={removeItem}></Burger>
        </BurgerContent>
      )}
    </Home>
  );
};

export default HomePage;
