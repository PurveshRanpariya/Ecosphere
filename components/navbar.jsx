"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Home, ShoppingBasket, Users, User, Menu, Search, ShoppingCart } from "lucide-react"

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()

  const routes = [
    {
      name: "Home",
      path: "/",
      icon: <Home className="h-4 w-4 mr-2" />,
    },
    {
      name: "Marketplace",
      path: "/marketplace",
      icon: <ShoppingBasket className="h-4 w-4 mr-2" />,
    },
    {
      name: "Community",
      path: "/community",
      icon: <Users className="h-4 w-4 mr-2" />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <User className="h-4 w-4 mr-2" />,
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                  <span className="text-green-600">🌱</span> Ecosphere
                </Link>
                <div className="grid gap-3">
                  {routes.map((route) => (
                    <Link
                      key={route.path}
                      href={route.path}
                      className={cn(
                        "flex items-center gap-2 text-muted-foreground",
                        pathname === route.path && "text-foreground font-medium",
                      )}
                    >
                      {route.icon}
                      {route.name}
                    </Link>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <span className="text-green-600">🌱</span> Ecosphere
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              {routes.map((route) => (
                <NavigationMenuItem key={route.path}>
                  <Link href={route.path} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        pathname === route.path && "bg-accent text-accent-foreground",
                      )}
                    >
                      {route.icon}
                      {route.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <div className="flex items-center gap-2">
          {isSearchOpen ? (
            <div className="relative">
              <Input
                type="search"
                placeholder="Search plants, posts, users..."
                className="w-[200px] sm:w-[300px]"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
              <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>
          <Button variant="outline" asChild className="hidden sm:flex">
            <Link href="/login">Sign In</Link>
          </Button>
          <Button asChild className="hidden sm:flex">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

