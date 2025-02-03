import { useEffect, useState } from "react";

const Contact = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6843724&lng=77.1211905&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      console.log("Full JSON response:", json);

      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setRestaurantList(restaurants);
      setLoading(false); // Stop loading when data is fetched
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
      setLoading(false); // Stop loading even if there’s an error
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading message while data is being fetched
  }

  return (
    <div className="body">
      <div className="head_util flex">
        {restaurantList.length > 0 ? (
          restaurantList.map((data, index) => (
            <h1 key={index}>{data.info.name}</h1>
          ))
        ) : (
          <p>No restaurants available</p>
        )}
      </div>
      <div className="card_container flex flex-wrap"></div>
    </div>
  );
};

export default Contact;
