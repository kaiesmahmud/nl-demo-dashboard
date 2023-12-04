import { fetchAllProductsData } from "./fetchAllProductsData";

export const fetchAfterDeleteProduct = async( p_id)=>{
    const url = "https://api.prowebmasters.nl/delete_product.php?p_id="+p_id ;
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
    const response = await fetch(url,requestOptions)
    const data = await response.json()
    if(data.status){ 
      console.log(data.message)
      console.log(data)
      fetchAllProductsData()
      return true
    }else{
      console.log("Error - ", data)
    }
    
}