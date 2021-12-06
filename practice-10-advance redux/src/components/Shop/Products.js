import ProductItem from './ProductItem';
import classes from './Products.module.css';

const productItems = [
  {
    id: 'p1',
    title: 'Computer Book',
    price: 16,
    description: 'Sem-1',
  },
  {
    id: 'p2',
    title: 'Maths Book',
    price: 20,
    description: 'Sem-2',
  },
  {
    id: 'p3',
    title: 'Drawing Book',
    price: 10,
    description: 'Sem-1',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productItems.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
