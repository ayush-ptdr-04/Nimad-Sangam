// import React from "react";

// import HelpContactCard from "../components/HelpContactCard";

// function Help() {
//   const contacts = [
//     { id: 1, name: "Mentor 1", position: "Senior Dev", phone: "123-456-7890" },
//     {
//       id: 2,
//       name: "Mentor 2",
//       position: "Project Manager",
//       phone: "098-765-4321",
//     },
//   ];

//   return (
//     <div className="container">
//       <h2>Help Contacts</h2>
//       {contacts.map((contact) => (
//         <HelpContactCard key={contact.id} {...contact} />
//       ))}
//     </div>
//   );
// }

// export default Help;

import React from "react";
import HelpContactCard from "../components/HelpContactCard"; // Import the HelpContactCard component

function Help() {
  return (
    <div>
      <HelpContactCard />
    </div>
  );
}

export default Help;
