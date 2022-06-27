// Importing React
import React from "react";

// Populating list
const listItems = [
 {
  id: "1",
  name: "Home",
  url: "/",
 },
 {
  id: "2",
  name: "Contact",
  url: "/contact",
 },
 {
  id: "3",
  name: "About",
  url: "/about",
 },
 {
  id: "4",
  name: "Projects",
  url: "/details",
 },
];

// Creating a props
const ListLinks = (props) => {
 return (
  <li>
   <a href={`${props.listItems.url}`} id={`${props.listItems.id}`}>
    {props.listItems.name}
   </a>
  </li>
 );
};

function List() {
 return (
  <ul className="footer-list">
   {listItems.map((listItems) => {
    return <ListLinks listItems={listItems} key={listItems.id} />;
   })}
  </ul>
 );
}

export default List;
