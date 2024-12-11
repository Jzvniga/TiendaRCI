"use client"

import { useGetCategories } from "@/api/getProducts";


const ChooseCategory = () => {
    const{} = useGetCategories()
    return ( 
        <p>From Choose Category</p>
     );
}
 
export default ChooseCategory;