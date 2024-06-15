export function fetchLoggedInUser(userId){
return new Promise(async (resolve) => {
  const response=await fetch('https://localhost:8080/users/'+userId)
  const data=await response.json();
  resolve({data})
}
);
}
