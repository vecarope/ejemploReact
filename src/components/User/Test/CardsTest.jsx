import React from "react";
import { DataCardTest } from "./DataCardTest";

export default function CardTest(){

    return(
        <>
            {DataCardTest.map((item,index) =>(
            <div key={index} className="w-40 rounded-lg shadow-md hover:shadow-xl lg:max-w-sm p-4 content-center">  
                    <div>
                        {item.icon}
                    </div>         
                    <div>
                        <h4 className="text-md font-semibold text-slate-800 text-center">
                            {item.nameTest}
                        </h4>
                        <h4 className="text-sm py-2 text-center">
                            {item.timeTest}
                        </h4>
                        <button className="px-4 py-2 text-sm text-blue-500 rounded">
                            Empezar Test
                        </button>
                    </div>             
                </div>
                    
                )
                )}

        </>
        
    )
}