import FoodCard from '@/components/card/FoodCard';
import CartItems from './CartItems';
import SearchInput from '@/components/SearchInput';


const getFoods = async (search) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${encodeURIComponent(search)}`,
    { cache: "no-store" }
  );

  const data = await res.json();

  await new Promise(resolve => setTimeout(resolve, 1000));

  return data.foods || [];
}

export const metadata = {
  title: "All Foods",
  description: "Explore a wide variety of cuisines, read reviews, and order your favorite meals with ease.",
};

const FoodPage = async ({ searchParams }) => {

  const { search = "" } = searchParams;

  const foods = await getFoods(search);

  return (
    <div className="p-6">
      <h1 className='text-2xl font-bold'>
        Total <span className='text-red-600'>{foods.length}</span> Found
      </h1>

      <SearchInput />

      <div className="flex gap-5">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {foods.map(food => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>

        <div className='w-[300px] border-2 rounded-2xl p-4'>
          <h2 className='text-xl font-bold mb-3'>Cart Items</h2>
          <hr />
          <CartItems></CartItems>
        </div>

      </div>
    </div>
  );
};

export default FoodPage;