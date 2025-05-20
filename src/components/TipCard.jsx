import React from 'react';
import { useNavigate } from 'react-router';

const TipCard = ({ tip }) => {
    const { image,
        Title,
        plantType,
        category,
        difficulty
       

    } = tip
   const navigate = useNavigate()

    return (


        <tr className='border-2'>
            <td >
            <div className="font-bold">{ Title}</div>
                </td>
<td>
     <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img
                                src={image}
                                alt={Title}
                            />
                        </div>
                    </div>
                    </td>
                   


                  <td>  <div >
                       
                        <div className="text-sm opacity-50">{plantType
                        }</div>
                    </div>
               
            </td>
            <td>
                {category}
            </td>
            <td>
                <span className="badge badge-ghost badge-sm">{difficulty}</span>
            </td>
           
           <td><button  
            onClick={() => navigate(`/tips/${tip._id}`)}
           className="btn btn-sm  text-amber-500">👁 See More</button></td>
        </tr>
    );
};

export default TipCard;