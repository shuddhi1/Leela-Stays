import City1 from '../media/garden1.jpeg';
import City2 from '../media/cozy3.jpg';
import City3 from '../media/Room2.jpeg'
import City4 from '../media/garden7.jpeg';
import Mountain1 from "../media/mountain1.jpeg";
import Garden from "../media/garden1.jpeg";
import Garden2 from "../media/garden2.jpeg";
import Garden3 from "../media/garden7.jpeg";
import Garden4 from "../media/garden5.jpeg";
import cozy from "../media/cozy1.jpeg";
import cozy1 from "../media/cozy3.jpg";
import grand from "../media/grand6.jpeg";
import grand2  from "../media/grand4.jpeg" 
import grand3 from "../media/grand2.jpeg";
import Mountain2 from "../media/mountain2.jpeg"
import Mountain3 from "../media/mountain3.jpeg"
import Mountain4 from "../media/mountain4.jpeg"
const sampleRooms = [
  {
    id: "scenic-city",
    category: "Scenic",
    name: "City",
    pricePerNight: "₹3,900",
    area: "250 sq.ft",
    amenities: ["WiFi", "Breakfast", "City View","Carpeted Floors","Smart Speaker","Spacious"],
   images: [
    Mountain1,Mountain2,Mountain3,Mountain4
  ],
    
  },
  
  {
    id: "scenic-garden-city",
    category: "Scenic",
    name: "Garden & City",
    pricePerNight: "₹3,500",
    area: "300 sq.ft",
    amenities: ["Garden View","Wifi", "King Bed"],
  images: [
Garden,Garden2,Garden3 ,Garden4
  ],
  },
  {
    id: "comfort-cozy",
    category: "Comfort",
    name: "Cozy",
    pricePerNight: "₹2,500",
    area: "200 sq.ft",
    amenities: ["Heater", "WiFi"],
  images: [
    cozy,cozy1
  ],
  },
  {
    id: "comfort-grand",
    category: "Comfort",
    name: "Grand",
    pricePerNight: "₹3,000",
    area: "330 sq.ft",
    amenities: ["Spacious", "Balcony", "Premium Bedding","Wifi"],
    images: [
grand2,grand3,grand
  ],
  },
];
export default sampleRooms;