import React, { use, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const LatesCollection = () => {

    const {products} = React.useContext(ShopContext);
    const [latestProducts, setLatestProducts] = React.useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 10));
    }, []);

  return (
    <div className='my-10'>
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Forever believes that each person is a unique individual. Gu Thiet Ke
          was born to break the boredom, bring products 'one-of-a-kind', smart
          design for travel and express passion, where fashion goes beyond
          limits.
        </p>
      </div>
      

    </div>
  );
}

export default LatesCollection