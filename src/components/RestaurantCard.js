import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  const {resList} = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    costForTwo,
    avgRating,
  } = resList?.info; 

  return(
    <div className="m-4 p-4 w-[250] bg-gray-50 rounded-lg hover:p-6 bg-gray-100 ">
      <img className="rounded-lg w-40 flex align-middle" src = {CDN_URL + cloudinaryImageId} alt="res logo"/>
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{areaName}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) =>{
return(props) =>{
  return(
    <div>
    <label>promoted</label>
    <RestaurantCard {...props}/>
    </div>
  )
}
}
export default RestaurantCard;