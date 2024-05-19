export function fetchAllProducts(){
return new Promise(async (resolve) => {
  const response=await fetch('https://localhost:8080/products')
  const data=await response.json();
  resolve({data})
}
);
}
