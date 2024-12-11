import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Popover } from "./ui/popover";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

const ItemMenuMobile = () => {
    return ( 
        <Popover>
            <PopoverTrigger>
                <MenuIcon />
            </PopoverTrigger>
            <PopoverContent>
                <Link href="/categories/Calzado" className="block">Calzado</Link>
                <Link href="/categories/Pantalones" className="block">Pantalones</Link>
                <Link href="/categories/Polerones" className="block">Polerones</Link>
                <Link href="/categories/Poleras" className="block">Poleras</Link>
                <Link href="/categories/Chaquetas" className="block">Chaquetas</Link>
            </PopoverContent>
        </Popover>

     );
}
 
export default ItemMenuMobile;