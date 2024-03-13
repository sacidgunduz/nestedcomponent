import React from "react";
import Title from "../components/Title";
import CardComponent from "../components/Card";

function Person({ user }) {
  return (
    <div>
      <Title title={"Person"} />
      <CardComponent width={13} email={user.email} gender={user.gender} address={user.address} lastName={user.last_name} firstName={user.first_name} avatar={user.avatar}/>

      {/* display the title component with the text PERSON  */}
          {/* display person's info here */}
    </div>
  );
}

export default Person;
