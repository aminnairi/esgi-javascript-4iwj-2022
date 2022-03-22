const users = [
  {
    id: 1,
    username: "aminnairi",
    language: "JavaScript"
  },
  {
    id: 2,
    username: "quentinhermiteau",
    language: "PHP"
  },
  {
    id: 3,
    username: "lucaslavander",
    language: "JavaScript"
  }
];

const indexedUsers = [];

for (const user of users) {
  
  if (!indexedUsers[user.language]) {
    indexedUsers[user.language] = [];
  } 
  
 indexedUsers[user.language].push(user);

}

console.log(indexedUsers);