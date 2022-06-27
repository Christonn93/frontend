import React from "react";
import { Link } from "react-router-dom";

const cardItems = [
 {
  id: 1,
  title: "Title 1",
  content: "Card content will be displayed here",
  img: "https://images.freeimages.com/images/large-previews/655/colorful-architecture-1-1216925.jpg",
  url: "/details",
 },
 {
  id: 2,
  title: "Title 2",
  content: "Card content will be displayed here",
  img: `https://images.freeimages.com/images/large-previews/a31/colorful-umbrella-1176220.jpg`,
  url: "/details",
 },
 {
  id: 3,
  title: "Title 3",
  content: "Card content will be displayed here",
  img: "https://images.freeimages.com/images/large-previews/315/a-kayak-rider-passing-by-1641874.jpg",
  url: "/details",
 },
 {
  id: 4,
  title: "Title 4",
  content: "Card content will be displayed here",
  img: "https://images.freeimages.com/images/large-previews/25c/abstract-flowers-2-1199959.jpg",
  url: "/details",
 },
];

const CardListItem = (props) => {
 return (
  <li>
   <div className="card-container">
    <div className="card-body">
     <h3>{props.cardItems.title}</h3>
     <div className="image-container" style={{ backgroundImage: `url(${props.cardItems.img})` }}></div>
     <p>{props.cardItems.content}</p>
     <Link to={props.cardItems.url} className="btn">
      View more
     </Link>
    </div>
   </div>
  </li>
 );
};

const CardList = () => {
 return (
  <ul className="card-gallery">
   {cardItems.map((cardItems) => {
    return <CardListItem cardItems={cardItems} key={cardItems.id} />;
   })}
  </ul>
 );
};

export default CardList;
