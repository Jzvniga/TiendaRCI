"use client"
import { Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./menu-list";
import ItemMenuMobile from "./Items-menu-mobile";

const Navbar = () => {
    const router = useRouter()

    return ( 
        <div className="relative flex flex-col items-center">
            <h1 className="text-6xl text-center my-4 cursor-pointer" onClick={() => router.push("/")}> Tienda
                <span className="font-bold">RCI</span>
            </h1>
            <div className="relative w-full">
                <div className="hidden sm:flex justify-center">
                    <MenuList />
                </div>
                <div className="flex sm:hidden ml-4">
                   <ItemMenuMobile />   
                </div>
                <div className="absolute right-7 top-0 flex space-x-7">
                    <ShoppingCart strokeWidth="1" 
                        className="cursor-pointer" 
                        onClick={() => router.push("/cart")}/>

                    <Heart strokeWidth="1" 
                        className="cursor-pointer" 
                        onClick={() => router.push("/lover-products")}/>

                    <User strokeWidth={1} className="cursor-pointer" />
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;