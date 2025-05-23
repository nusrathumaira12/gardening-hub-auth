import React from 'react';
import { useNavigate } from 'react-router';

const TipCard = ({ tip }) => {
    const navigate = useNavigate()
    const {
        _id,
        image,
        Title,
        plantType,
        category,
        difficulty
       

    } = tip
  

    return (


        <tr className="hover:bg-amber-100 transition">
            <td >
            <div className="font-bold">{ Title}</div>
                </td>
<td>
     <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img
                                src={image || '/placeholder.jpg'}
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
            onClick={() => navigate(`/tips/${_id}`)}
           className="btn btn-sm border border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white transition">
            👁 See More</button></td>
        </tr>
    );
};

export default TipCard;