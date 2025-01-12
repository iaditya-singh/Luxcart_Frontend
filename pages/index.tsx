import Image from 'next/image';
import Hero from './components/Hero';
import { mongooseConnect } from '@/lib/mongoose';
import { Product } from '@/models/Product';
import Products from './components/Products';
import Collection from './components/Collection';
import Footer from './components/Footer';

type HomeProps = {
  featuredProduct: {
    _id: string;
    title: string;
    description: string;
    price: number;
    images: [string]
  };
  newProducts:[
    {
      _id: string;
      title: string;
      description: string;
      price: number;
      images: [string]
    }
  ],
  collectionProduct:{
    _id: string;
    title: string;
    description: string;
    price: number;
    images: [string]
  }
};

const Home: React.FC<HomeProps> = ({ featuredProduct, newProducts, collectionProduct}) => {
  // console.log({newProducts});
  return (
    <>
      <Hero {...featuredProduct}/>
      <hr className="my-4 h-px border-0 bg-gray-300" />
      <Products products={newProducts}/>
      <hr className="my-4 h-px border-0 bg-gray-300" />
      <Collection {...collectionProduct}/>
      <Footer/>
    </>
  );
};

export const getServerSideProps = async () => {
  await mongooseConnect();

  const featuredId = '65a148b8ca539cb172bb415b';
  const collectionId = '65a4b084a96925ad3014fc41';

  const featuredProduct = await Product.findById(featuredId);
  const collectionProduct = await Product.findById(collectionId);
  const newProducts = await Product.find({}, null, {sort: {'_id':1},limit:5});
  console.log(newProducts);
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
      collectionProduct: JSON.parse(JSON.stringify(collectionProduct))
    },
  };
};

// getServerSideProps()

export default Home;
