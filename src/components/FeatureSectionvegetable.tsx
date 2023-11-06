import Productcard from "./Productcard"

const data = [
  {id: 0, img: "product__5.webp", name : "Tomato", price: "₹30" },
  {id: 1, img: "product__2.webp", name : "Crunchy Crisps", price: "₹20" },
  {id: 2, img: "product__3.webp", name : "Jewel Cranberries", price: "₹59" },
  {id: 3, img: "product__4.webp", name : "Almond organic", price: "₹79" },
];

function Featuresctionfruits() {
  return (
    <div>
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-medium">Breakfast & Dairy</h3>
          <p className="text-gray-500 mt-2">
          Buy best quality breakfast online from big-basket stop near you.
          </p>
        </div>

        <div className="space-x-4 mt-8 lg:mt-0">
          <button className="featureBtn">fruits</button>
          <button className="text-gray-600 hover:text-accent">
            Vegetables
          </button>
          <button className="text-gray-600 hover:text-accent">
            Breads & Bakery
          </button>
        </div>
      </div>


<div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
    <img className="w-full h-full" 
    src="/feature__2.webp" 
    alt="Banner" />

{data.map((el) => (
  <Productcard
  key={el.id}  
  img = {el.img} 
  name = {el.name} 
  price = {el.price} 
  /> ))}
  </div>

    </div>

    </div>
  );
}

export default Featuresctionfruits