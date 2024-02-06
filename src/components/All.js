import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantsMenu = () => {
  const[resInfo,setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu()
  },[])

  const fetchMenu = async() =>{
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0826802&lng=80.2707184&restaurantId=377176&catalog_qa=undefined&submitAction=ENTER");
   
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo==null) return <Shimmer/>

 const {name , costForTwoMessage, Cuisines } = 
 resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

return (
  <div>
    <h1>{name}</h1>
    <h2>{Cuisines.join(",")}</h2>
    <h2>Menu</h2>
    <ul>
      <li>Biriyani</li>
      <li>Burger</li>
    </ul>
  </div>
)};
export default RestaurantsMenu;