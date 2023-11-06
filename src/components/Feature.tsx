import FeatureCard from "./FeatureCard"
import {FaShippingFast} from "react-icons/fa"
import {FaRegMoneyBillAlt} from "react-icons/fa"
import {AiFillGift} from "react-icons/ai"
import {BiSolidPhoneCall} from "react-icons/bi"


const data = [
    {
        id : 0,
        title :"Free Shipping" ,
        icon : <FaShippingFast/>,
    },
    {
        id : 1,
        title :"Best Price Guarantee",
        icon : <FaRegMoneyBillAlt/>,
    },
    {
        id : 2,
        title :"Free Curbside Pickup" ,
        icon : <AiFillGift/>,
    },
    {
        id : 3,
        title :"Support 24/7 ",
        icon : <BiSolidPhoneCall/>,
    },
];

function Feature() {
  return (
    <div className="container pt-16">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {data.map((el) => (
                <FeatureCard key = {el.title} title= {el.title} icon = {el.icon} /> 
            )
            )}
        </div>
    </div>
  )
}

export default Feature