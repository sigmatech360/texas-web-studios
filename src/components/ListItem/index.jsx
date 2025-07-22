import React from "react";

const ListItem = (props) => {
  return (
    <ul className="packageCardList" data-aos="fade-up" data-aos-delay="300">
      {props.list.map((listItem, listIndex) => (
        <li key={listIndex}>{listItem}</li>
      ))}
    </ul>
  );
};

export default ListItem;
