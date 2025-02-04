import React from 'react';

import ItemList from "./item-list.js";
import Item from './item.js';

export default function Page(){


    

    return(
   
    <main>
        return(
          <ItemList>
          <section className="bg-pink-200 p-4 m-4">
              <p className="font-bold text-blue-900">Name: {props.name}</p>
              <p>Quantity: {props.quantity}</p>
              <p><span className="font-bold">Salary:</span> {props.category}</p>
              </section>;
              </ItemList>
          )
        </main>  

    );
}
