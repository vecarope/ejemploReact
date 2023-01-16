import React from "react";
import {AiFillStar} from "react-icons/ai"

export default function Habilities(){

    const HabilitiesData=[
        {
            title:'html',
            icon: <AiFillStar className='text-yellow-400 text-md'/>
        },
        {
            title:'css',
            icon: ''
        },
        {
            title:'react',
            icon: ''
        },
        {
            title:'javascript',
            icon: ''
        },

    ]
    return (
        <div className=" flex pb-5 gap-3">
            {HabilitiesData.map((item, index)=>(
            <div
                key={index}
                className="badge badge-outline border-light-purple p-1 pt-1 pb-1 rounded-md"
                >
                {item.title}{item.icon}
            </div>                
            ))}

        </div>
    )
}