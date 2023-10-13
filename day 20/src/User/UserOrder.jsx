import React from 'react'
import { useSelector } from 'react-redux'
import { getOrder } from '../Redux/Redux'
import './Order.css'

export const UserOrder = () => {
    const order=useSelector(getOrder);
    console.log(order);
  return (
    <div>
        <h2>UserOrder</h2>
        {
            order.map((orders)=>(
                <div key={orders.product.id} className="ordercontainer">
                    {/* <h4>{orders.totalAmount}</h4> */}
                    <h4>{orders.product.name}</h4>
                </div>
        ))}
    </div>
  )
}
