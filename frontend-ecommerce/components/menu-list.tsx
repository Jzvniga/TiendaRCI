"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const MenuList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-xl">Calzado</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  className="text-2xl"
                >
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/pantalones" legacyBehavior passHref>
            <NavigationMenuLink className={`text-xl ${navigationMenuTriggerStyle()}`}>
              Pantalones
            </NavigationMenuLink>
          </Link>
          <Link href="/polerones" legacyBehavior passHref>
            <NavigationMenuLink className={`text-xl ${navigationMenuTriggerStyle()}`}>
              Polerones
            </NavigationMenuLink>
          </Link>
          <Link href="/poleras" legacyBehavior passHref>
            <NavigationMenuLink className={`text-xl ${navigationMenuTriggerStyle()}`}>
              Poleras
            </NavigationMenuLink>
          </Link>
          <Link href="/chaquetas" legacyBehavior passHref>
            <NavigationMenuLink className={`text-xl ${navigationMenuTriggerStyle()}`}>
              Chaquetas
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default MenuList;

const components: { title: string; href: string; description: string }[] = [
    {
      title: "Zapatos",
      href: "/category/zapatos",
      description:""
    },
    {
      title: "Zapatillas",
      href: "/category/zapatillas",
      description:
        "",
    },
  ]

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

