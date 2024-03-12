import RestaurantCard,{withPromotedLabel}from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import {Link} from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus.js";
// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index

const Body = () => {
  //local State variable - Super Powerful
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");
  //whenever the state variable updates,react triggers reconciliation algorithm(re-render the component)

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

    setListOfRestaurants(
      //Optional Chaining
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      //Optional Chaining
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false){
    return(
      <h1>Looks like you are offline!!Check your network connection..</h1>
    )
  }

  //Conditional rendering - (Ternaray Operator (condition ? true : false))
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body ">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button 
           className="bg-green-200 py-2 px-2 m-4 rounded-lg"
            onClick={() => {
              //filter the restaurants and update the UI
              console.log(searchText);
              const filteredRestaurants = listOfRestaurants.filter((res) =>res.info.name.toLowerCase().includes(searchText.toLowerCase()));

              setFilteredRestaurants(filteredRestaurants);
            }} 
          >
            search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
        <button
          className="bg-gray-100 px-4 py-2 rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
           setFilteredRestaurants(filteredList);
          }}
        >
          TOP RATED RESTAURANTS
        </button>
        </div>
      </div>
      <div className="flex flex-wrap ">
        {filteredRestaurants.map((restaurant) => (
         <Link key={restaurant.info.id} to={"/restaurants/" +restaurant.info.id}>

         {restaurant.info.promoted ? (
          <RestaurantCardPromoted resData={restaurant} />
         ) : (
          <RestaurantCard resData={restaurant} />
         )}
          </Link> 
        ))}
      </div>
    </div>
  );
};

export default Body;
