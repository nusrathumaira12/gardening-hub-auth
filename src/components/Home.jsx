import React from 'react';
import { useLoaderData } from 'react-router';
import TipCard from './TipCard';
import FeaturedGardeners from './FeaturedGardeners';

const Home = () => {
    const tips = useLoaderData()
    console.log(tips)
    return (
        <div>
          <FeaturedGardeners></FeaturedGardeners>
          <div className="overflow-x-auto border-2 border-amber-600">


<table className="table w-full ">
        <thead>
          <tr>

            <th>Title</th>
            <th>image</th>
            <th>Plant Type</th>
            <th>Category</th>
            <th>Difficulty</th>
            <th><button>See More</button></th>
          </tr>
        </thead>
           
            <tbody >
                {
                    tips.map(tip => <TipCard key={tip._id} tip={tip}></TipCard>)
                }
          </tbody>
          </table>
        </div>
        </div>
    );
};

export default Home;