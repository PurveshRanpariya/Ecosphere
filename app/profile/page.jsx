import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Settings,
  Edit,
  Grid,
  ShoppingBag,
  BookmarkIcon,
  MapPin,
  Calendar,
  Mail,
  LinkIcon,
} from "lucide-react"

// Sample user data
const user = {
  name: "Jenny Doe",
  username: "plantenthusiast",
  avatar: "\image/profile.jpeg",
  bio: "Plant collector and urban gardener. Sharing my journey and tips for growing beautiful plants in small spaces.",
  location: "San Francisco, CA",
  joined: "March 2022",
  email: "jane@example.com",
  website: "plantjourney.com",
  followers: 156,
  following: 128,
  posts: 42,
  badges: ["Plant Parent", "Verified", "Top Contributor"],
}

// Sample posts data
const posts = [
  {
    id: 1,
    content: "Just repotted my monstera and it's thriving! Anyone have tips for propagating the cuttings?",
    image: "\image/profile_post.jpg",
    likes: 124,
    comments: 18,
    shares: 5,
    saved: false,
    timeAgo: "2 hours ago",
  },
  {
    id: 2,
    content:
      "My new plant corner is finally complete! Took months to find the perfect shelving unit that gets enough light. What do you think?",
    image: "\image/profile_post_2.jpg",
    likes: 89,
    comments: 32,
    shares: 7,
    saved: true,
    timeAgo: "5 hours ago",
  },
  {
    id: 3,
    content:
      "Help! My succulent is turning yellow at the base. Too much water? Not enough light? Any advice would be appreciated!",
    image: null,
    likes: 45,
    comments: 28,
    shares: 2,
    saved: false,
    timeAgo: "1 day ago",
  },
]

// Sample purchases data
const purchases = [
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
    name: "Ceramic Plant Pot",
    category: "Pots",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=400",
    purchaseDate: "April 28, 2023",
    status: "Delivered",
  },
  {
    id: 3,
    name: "Potting Soil Premium",
    category: "Supplies",
    price: 19.99,
    image: "/placeholder.svg?height=300&width=400",
    purchaseDate: "April 10, 2023",
    status: "Delivered",
  },
]

// Sample wishlist data
const wishlist = [
  {



    id: 1,
    name: "Chinese Money Plant",
    category: "Indoor Plants",
    price: 5.99,
    image: "\image/item_3.jpeg",
    inStock: true,
  },
  {




    id: 2,
    name: "Satin Pothos",
    category: "Indoor Plant",
    price: 3.99,
    image: "\image/item_4.jpeg",
    inStock: true,
  },
  {




    id: 3,
    name: "Ukanda Orange Plant",
    category: "Indoor Plants",
    price: 4.99,
    image: "\image/item_5.jpeg",
    inStock: false,
  },
]

export default function Profile() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-green-50 dark:bg-green-950/20 py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
            <p className="text-muted-foreground">Manage your profile, posts, purchases, and wishlist</p>
          </div>
        </div>
      </div>

      <div className="container px-4 py-6 md:px-6 md:py-8">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col items-center md:items-start gap-4">
                <Avatar className="h-24 w-24 md:h-32 md:w-32">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {user.badges.map((badge, index) => (
                    <Badge key={index} variant="outline" className="text-green-600 border-green-600">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold">{user.name}</h2>
                    <p className="text-muted-foreground">@{user.username}</p>
                  </div>
                  <div className="flex gap-2 justify-center md:justify-end">
                    <Button variant="outline" size="sm" className="gap-1">
                      <Edit className="h-4 w-4" />
                      <span>Edit Profile</span>
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1">
                      <Settings className="h-4 w-4" />
                      <span>Settings</span>
                    </Button>
                  </div>
                </div>

                <p className="mt-4">{user.bio}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{user.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Joined {user.joined}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{user.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <LinkIcon className="h-4 w-4 text-muted-foreground" />
                    <a href={`https://${user.website}`} className="text-sm text-green-600 hover:underline">
                      {user.website}
                    </a>
                  </div>
                </div>

                <div className="flex justify-center md:justify-start gap-8 mt-6">
                  <div className="text-center">
                    <p className="font-semibold">{user.posts}</p>
                    <p className="text-xs text-muted-foreground">Posts</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold">{user.followers}</p>
                    <p className="text-xs text-muted-foreground">Followers</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold">{user.following}</p>
                    <p className="text-xs text-muted-foreground">Following</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="posts">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="posts" className="flex items-center gap-1">
              <Grid className="h-4 w-4 hidden sm:block" />
              Posts
            </TabsTrigger>
            <TabsTrigger value="purchases" className="flex items-center gap-1">
              <ShoppingBag className="h-4 w-4 hidden sm:block" />
              Purchases
            </TabsTrigger>
            <TabsTrigger value="wishlist" className="flex items-center gap-1">
              <BookmarkIcon className="h-4 w-4 hidden sm:block" />
              Wishlist
            </TabsTrigger>
          </TabsList>

          {/* Posts Tab */}
          <TabsContent value="posts" className="space-y-4 mt-6">
            {posts.map((post) => (
              <Card key={post.id}>
                <CardHeader className="p-4 pb-0">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-sm font-semibold">{user.name}</CardTitle>
                      <CardDescription className="text-xs">
                        @{user.username} · {post.timeAgo}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-sm">{post.content}</p>
                  {post.image && (
                    <div className="mt-3 rounded-md overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt="Post image"
                        width={600}
                        height={400}
                        className="w-full object-cover"
                      />
                    </div>
                  )}
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex gap-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 px-2 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
                      >
                        <Heart className="h-4 w-4 mr-1" />
                        <span>{post.likes}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 px-2">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        <span>{post.comments}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 px-2">
                        <Share2 className="h-4 w-4 mr-1" />
                        <span>{post.shares}</span>
                      </Button>
                    </div>
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      <Bookmark className={`h-4 w-4 ${post.saved ? "fill-current" : ""}`} />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>

          {/* Purchases Tab */}
          <TabsContent value="purchases" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {purchases.map((purchase) => (
                <Card key={purchase.id} className="overflow-hidden">
                  <div className="relative">
                    <Image
                      src={purchase.image || "/placeholder.svg"}
                      alt={purchase.name}
                      width={400}
                      height={300}
                      className="object-cover w-full h-48"
                    />
                    <Badge className="absolute top-2 right-2 bg-green-600">{purchase.status}</Badge>
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">{purchase.name}</CardTitle>
                    <CardDescription>{purchase.category}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex justify-between">
                      <p className="font-medium">${purchase.price.toFixed(2)}</p>
                      <p className="text-sm text-muted-foreground">{purchase.purchaseDate}</p>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4">
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Wishlist Tab */}
          <TabsContent value="wishlist" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlist.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="relative">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={400}
                      height={300}
                      className="object-cover w-full h-48"
                    />
                    {!item.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Badge variant="outline" className="text-white border-white">
                          Out of Stock
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                    <CardDescription>{item.category}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="font-medium">${item.price.toFixed(2)}</p>
                  </CardContent>
                  <CardFooter className="p-4">
                    <div className="flex gap-2 w-full">
                      <Button className="flex-1 bg-green-600 hover:bg-green-700" disabled={!item.inStock}>
                        {item.inStock ? "Add to Cart" : "Notify Me"}
                      </Button>
                      <Button variant="outline" size="icon">
                        <Bookmark className="h-4 w-4 fill-current" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

