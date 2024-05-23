export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter,sort,pagination) {
  // filter = {"category":["smartphone,"laptops"]}
  //sort ={_sort:"price",_roder="desc"}
  //pagination={_page:1,limit=10}
  // TODO : on server we will support multi values
  let queryString = "";
  for (let key in filter) {
    const categoryValues=filter[key]
    if(categoryValues.length){
      const lastCategoryValue=categoryValues[categoryValues.length-1]
      queryString += `${key}=${filter[lastCategoryValue]}&`;
    }
    
  }
  for(let key in sort){
    queryString+=`${key}=${sort[key]}&`
  }
  for(let key in pagination){
    queryString+=`${key}=${pagination[key]}&`
  }

  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch(
      "http://localhost:8080/products?" + queryString
    );
    const data = await response.json();
    const totalItems=await response.headers.get('X-Total-Count')
    resolve({ data:{products:data,totalItems:+totalItems} })
  });
}
