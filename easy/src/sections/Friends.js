import React from "react";  // Import the React library
import Title from "../components/Title";  // Import the Title component from the "../components/Title" directory
import CardComponent from "../components/Card";

// The Friends function takes in a "user" prop and returns a JSX element
function Friends({ user }) {

  return (
    <div>
            <Title title={"Friends"} number={user.friends.length}/>

      {/* display the title component with the title FRIENDS and the num of friends */}
      <div className="d-flex">
        {user.friends.map(friend =>
          <CardComponent width={18} birthday={friend.birthday} gender={friend.gender} avatar={friend.avatar} firstName={friend.firstName} phone={friend.phone} />
        )}
      </div>
      {/* display children's info here */}
    </div>
  );
}

export default Friends;  // Export the Friends component
