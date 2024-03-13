import React from "react";  // Import the React library
import Title from "../components/Title";  // Import the Title component from the "../components/Title" directory
import CardComponent from "../components/Card";

function Children({ user }) {
  return (
    <div>
      <Title title={"Children"} number={user.children.length} />
      {/* display the title component with the title CHILDREN and the num of children */}
      <div className="d-flex">
        {user.children.map(child =>
         <CardComponent width={18} avatar={child.avatar} firstName={child.firstName} gender={child.gender} birthday={child.birthday} />
        )}
      </div>
     {/* display children's info here */}
    </div>
  );
}

export default Children;
