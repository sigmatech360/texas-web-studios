import React from "react";

const ListItem = (props) => {
  return (
    <ul className="packageCardList">
      {props.list.map((listItem, listIndex) => (
        <li key={listIndex}>{listItem}</li>
      ))}
    </ul>
  );
};

export default ListItem;
