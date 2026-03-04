
import FoodCardSkeleton from '@/components/skeletons/FoodCartSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6'>
            {
                [...Array(12)].map((_, index) => <FoodCardSkeleton key={index}></FoodCardSkeleton>
            )}
            loading...
        </div>
    );
};

export default loading;