import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Filter, Search, SlidersHorizontal } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

// Sample product data
const products = [
  {
    id: 1,
    name: "Aloe vera",
    category: "Indoor Plants",
    price: 4.99,
    rating: 4.8,
    reviews: 42,
    image: "\image/item_1.jpg",
    badge: "Popular",
  },
  {
    id: 2,
    name: "Lucky Bamboo",
    category: "Indoor Plants",
    price: 2.99,
    rating: 4.7,
    reviews: 36,
    image: "\image/item_2.jpg",
    badge: "Easy Care",
  },
  {
    id: 3,
    name: "Chinese Money Plant",
    category: "Indoor Plants",
    price: 5.99,
    rating: 4.5,
    reviews: 28,
    image: "\image/item_3.jpeg",
    badge: "Trending",
  },
  {
    id: 4,
    name: "Satin Pothos",
    category: "Indoor Plants",
    price: 3.99,
    rating: 4.6,
    reviews: 31,
    image: "\image/item_4.jpeg",
    badge: "Air Purifying",
  },
  {
    id: 5,
    name: "Ukanda Orange Plant",
    category: "Indoor Plants",
    price: 4.99,
    rating: 4.9,
    reviews: 54,
    image: "\image/item_5.jpeg",
    badge: "Organic",
  },
  {
    id: 6,
    name: "Arrowhead Plant",
    category: "Indoor Plants",
    price: 4.99,
    rating: 4.7,
    reviews: 39,
    image: "\image/item_6.jpeg",
    badge: "Handmade",
  },
  {
    id: 7,
    name: "Chrysanthemum",
    category: "Indoor Plants",
    price: 3.99,
    rating: 4.8,
    reviews: 47,
    image: "\image/item_7.jpeg",
    badge: "Set of 3",
  },
  {
    id: 8,
    name: "Lilac",
    category: "Indoor Plants",
    price: 4.99,
    rating: 4.6,
    reviews: 33,
    image: "\image/item_8.jpeg",
    badge: "Essential",
  },
]

// Filter categories
const categories = [
  { id: "indoor", label: "Indoor Plants" },
  { id: "outdoor", label: "Outdoor Plants" },
  { id: "succulents", label: "Succulents & Cacti" },
  { id: "pots", label: "Pots & Planters" },
  { id: "tools", label: "Tools" },
  { id: "soil", label: "Soil & Fertilizers" },
  { id: "seeds", label: "Seeds" },
]

export default function Marketplace() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-green-50 dark:bg-green-950/20 py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tight">Marketplace</h1>
            <p className="text-muted-foreground">Discover and shop for plants, seeds, tools, and more</p>
          </div>
        </div>
      </div>

      <div className="container px-4 py-6 md:px-6 md:py-8">
        <div className="flex flex-col gap-6 md:flex-row">
          {/* Filters - Desktop */}
          <div className="hidden md:flex flex-col w-64 gap-6">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <h2 className="font-semibold">Filters</h2>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-sm font-medium">Search</h3>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search products..." className="pl-8" />
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-medium">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center space-x-2">
                      <Checkbox id={category.id} />
                      <label
                        htmlFor={category.id}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {category.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-medium">Price Range</h3>
                <Slider defaultValue={[0, 100]} max={200} step={1} className="py-4" />
                <div className="flex items-center justify-between">
                  <span className="text-sm">$0</span>
                  <span className="text-sm">$200+</span>
                </div>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="care-level">
                  <AccordionTrigger className="text-sm font-medium">Care Level</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2 pt-1">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="beginner" />
                        <label htmlFor="beginner" className="text-sm">
                          Beginner Friendly
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="intermediate" />
                        <label htmlFor="intermediate" className="text-sm">
                          Intermediate
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="expert" />
                        <label htmlFor="expert" className="text-sm">
                          Expert
                        </label>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="light">
                  <AccordionTrigger className="text-sm font-medium">Light Requirements</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2 pt-1">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="low-light" />
                        <label htmlFor="low-light" className="text-sm">
                          Low Light
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="medium-light" />
                        <label htmlFor="medium-light" className="text-sm">
                          Medium Light
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="bright-light" />
                        <label htmlFor="bright-light" className="text-sm">
                          Bright Light
                        </label>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Button className="w-full bg-green-600 hover:bg-green-700">Apply Filters</Button>
            </div>
          </div>

          {/* Mobile Filters */}
          <div className="md:hidden mb-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Filter className="h-4 w-4" /> Filters
                  </span>
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                  <SheetDescription>Narrow down your product search</SheetDescription>
                </SheetHeader>
                <div className="space-y-4 py-4">
                  <div>
                    <h3 className="mb-2 text-sm font-medium">Search</h3>
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input type="search" placeholder="Search products..." className="pl-8" />
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 text-sm font-medium">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category.id} className="flex items-center space-x-2">
                          <Checkbox id={`mobile-${category.id}`} />
                          <label
                            htmlFor={`mobile-${category.id}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {category.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 text-sm font-medium">Price Range</h3>
                    <Slider defaultValue={[0, 100]} max={200} step={1} className="py-4" />
                    <div className="flex items-center justify-between">
                      <span className="text-sm">$0</span>
                      <span className="text-sm">$200+</span>
                    </div>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700">Apply Filters</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <p className="text-sm text-muted-foreground">Showing {products.length} products</p>
              </div>
              <div className="flex items-center gap-2">
                <Select defaultValue="featured">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest Arrivals</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden">
                  <div className="relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="object-cover w-full h-48"
                    />
                    {product.badge && <Badge className="absolute top-2 right-2 bg-green-600">{product.badge}</Badge>}
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <CardDescription>{product.category}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex justify-between">
                      <p className="font-medium">${product.price.toFixed(2)}</p>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★★★★★</span>
                        <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4">
                    <Button className="w-full bg-green-600 hover:bg-green-700">Add to Cart</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="flex items-center justify-center mt-8">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="icon" disabled>
                  <span className="sr-only">Previous page</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </Button>
                <Button variant="outline" size="sm" className="bg-green-600 text-white hover:bg-green-700">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="icon">
                  <span className="sr-only">Next page</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

