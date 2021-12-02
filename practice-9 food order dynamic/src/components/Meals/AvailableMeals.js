import { useEffect, useState } from 'react';
import useHttp from '../../hooks/use-http';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const [loadMealItem, setLoadMealItem] = useState([]);
  const { isError, isLoading, sendRequest: fetchAPI } = useHttp();

  useEffect(() => {
    const loadApiData = (data) => {
      const loadedTasks = [];

      for (const taskKey in data) {
        loadedTasks.push({
          id: taskKey,
          description: data[taskKey].description,
          name: data[taskKey].name,
          price: data[taskKey].price,
        });
      }
      setLoadMealItem(loadedTasks);
    };

    fetchAPI(
      {
        url: 'https://food-app-2315-default-rtdb.firebaseio.com/meals.json',
      },
      loadApiData
    );
  }, [fetchAPI]);

  const mealsList = loadMealItem.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        {isLoading && <p>Loading</p>}
        {isError ? <p>Fail to Load</p> : <ul>{mealsList}</ul>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
