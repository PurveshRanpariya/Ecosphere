import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  MoreHorizontal,
  ImageIcon,
  Smile,
  TrendingUp,
  Clock,
  Users,
  Leaf,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Sample posts data
const posts = [
  {
    id: 1,
    user: {
      name: "Jessica Green",
      username: "plantmom",
      avatar: "\image/comm_1_avatar.jpeg",
    },
    timeAgo: "2 hours ago",
    content: "Just repotted my monstera and it's thriving! Anyone have tips for propagating the cuttings?",
    image: "\image/comm_1.jpeg",
    likes: 124,
    comments: 18,
    shares: 5,
    saved: false,
    isVerified: true,
  },
  {
    id: 2,
    user: {
      name: "Michael Chen",
      username: "urbanjungle",
      avatar: "\image/comm_4_avatar.jpeg",
    },
    timeAgo: "5 hours ago",
    content:
      "My new plant corner is finally complete! Took months to find the perfect shelving unit that gets enough light. What do you think?",
    image: "\image/comm_2.jpeg",
    likes: 89,
    comments: 32,
    shares: 7,
    saved: true,
    isVerified: false,
  },
  {
    id: 3,
    user: {
      name: "Sophia Rodriguez",
      username: "succulentlover",
      avatar: "\image/comm_2_avatar.jpeg",
    },
    timeAgo: "1 day ago",
    content:
      "Help! My succulent is turning yellow at the base. Too much water? Not enough light? Any advice would be appreciated!",
    image: null,
    likes: 45,
    comments: 28,
    shares: 2,
    saved: false,
    isVerified: true,
  },
  {
    id: 4,
    user: {
      name: "Alex Johnson",
      username: "gardenexpert",
      avatar: "\image/comm_3_avatar.jpeg",
    },
    timeAgo: "2 days ago",
    content:
      "Just harvested the first tomatoes from my balcony garden! Nothing beats homegrown produce. Started these from seeds just 3 months ago.",
    image: "\image/comm_3.jpeg",
    likes: 215,
    comments: 42,
    shares: 18,
    saved: false,
    isVerified: true,
  },
]

export default function Community() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-green-50 dark:bg-green-950/20 py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tight">Community</h1>
            <p className="text-muted-foreground">
              Connect with plant enthusiasts, share your journey, and learn from others
            </p>
          </div>
        </div>
      </div>

      <div className="container px-4 py-6 md:px-6 md:py-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {/* Sidebar - Desktop */}
          <div className="hidden md:block space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Profile</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center text-center">
                <Avatar className="h-20 w-20 mb-4">
                  <AvatarImage src="\image/profile.jpeg" alt="Profile" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg">Jane Doe</h3>
                <p className="text-sm text-muted-foreground">@plantenthusiast</p>
                <div className="flex gap-2 mt-2">
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    Plant Parent
                  </Badge>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    Verified
                  </Badge>
                </div>
                <div className="grid grid-cols-3 gap-4 w-full mt-4">
                  <div className="text-center">
                    <p className="font-semibold">42</p>
                    <p className="text-xs text-muted-foreground">Posts</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold">156</p>
                    <p className="text-xs text-muted-foreground">Followers</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold">128</p>
                    <p className="text-xs text-muted-foreground">Following</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <Link href="/profile">View Profile</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Trending Topics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <div>
                    <Link href="#" className="font-medium hover:underline">
                      #MonstersMonday
                    </Link>
                    <p className="text-xs text-muted-foreground">1.2k posts</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <div>
                    <Link href="#" className="font-medium hover:underline">
                      #PropagationTips
                    </Link>
                    <p className="text-xs text-muted-foreground">856 posts</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <div>
                    <Link href="#" className="font-medium hover:underline">
                      #PlantRescue
                    </Link>
                    <p className="text-xs text-muted-foreground">643 posts</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <div>
                    <Link href="#" className="font-medium hover:underline">
                      #UrbanJungle
                    </Link>
                    <p className="text-xs text-muted-foreground">512 posts</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Suggested Users</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={`\image/comm_2_avatar.jpeg`} alt={`User ${i}`} />
                        <AvatarFallback>U{i}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">Plant Lover {i}</p>
                        <p className="text-xs text-muted-foreground">@plantlover{i}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="h-8 text-xs">
                      Follow
                    </Button>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="w-full text-green-600">
                  View More
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 lg:col-span-3 space-y-6">
            {/* Create Post */}
            <Card>
              <CardContent className="p-4 space-y-4">
                <div className="flex gap-4">
                  <Avatar>
                    <AvatarImage src="\image/profile.jpeg" alt="Profile" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <Textarea placeholder="Share your plant journey..." className="resize-none" />
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="h-8 gap-1">
                          <ImageIcon className="h-4 w-4" />
                          <span className="hidden sm:inline">Photo</span>
                        </Button>
                        <Button variant="outline" size="sm" className="h-8 gap-1">
                          <Smile className="h-4 w-4" />
                          <span className="hidden sm:inline">Feeling</span>
                        </Button>
                      </div>
                      <Button size="sm" className="h-8 bg-green-600 hover:bg-green-700">
                        Post
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feed Tabs */}
            <Tabs defaultValue="for-you">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="for-you" className="flex items-center gap-1">
                  <Leaf className="h-4 w-4 hidden sm:block" />
                  For You
                </TabsTrigger>
                <TabsTrigger value="following" className="flex items-center gap-1">
                  <Users className="h-4 w-4 hidden sm:block" />
                  Following
                </TabsTrigger>
                <TabsTrigger value="trending" className="flex items-center gap-1">
                  <TrendingUp className="h-4 w-4 hidden sm:block" />
                  Trending
                </TabsTrigger>
                <TabsTrigger value="recent" className="flex items-center gap-1">
                  <Clock className="h-4 w-4 hidden sm:block" />
                  Recent
                </TabsTrigger>
              </TabsList>

              <TabsContent value="for-you" className="space-y-4 mt-4">
                {posts.map((post) => (
                  <Card key={post.id}>
                    <CardHeader className="p-4 pb-0">
                      <div className="flex justify-between items-start">
                        <div className="flex gap-2">
                          <Avatar>
                            <AvatarImage src={post.user.avatar} alt={post.user.name} />
                            <AvatarFallback>{post.user.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-1">
                              <CardTitle className="text-sm font-semibold">{post.user.name}</CardTitle>
                              {post.isVerified && (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="text-green-600"
                                >
                                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                                  <path d="m9 12 2 2 4-4" />
                                </svg>
                              )}
                            </div>
                            <CardDescription className="text-xs">
                              @{post.user.username} · {post.timeAgo}
                            </CardDescription>
                          </div>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">More options</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Save Post</DropdownMenuItem>
                            <DropdownMenuItem>Follow @{post.user.username}</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Report</DropdownMenuItem>
                            <DropdownMenuItem>Block User</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
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
                    <CardFooter className="p-4 pt-0 flex flex-col">
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

                      {/* Comment input */}
                      <div className="flex items-center gap-2 mt-4 w-full">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Your Avatar" />
                          <AvatarFallback>YA</AvatarFallback>
                        </Avatar>
                        <Input placeholder="Add a comment..." className="flex-1" />
                        <Button size="sm" className="h-8 bg-green-600 hover:bg-green-700">
                          Post
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="following" className="space-y-4 mt-4">
                <Card className="p-8 text-center">
                  <p className="text-muted-foreground">Follow more plant enthusiasts to see their posts here.</p>
                  <Button className="mt-4 bg-green-600 hover:bg-green-700">Discover Users</Button>
                </Card>
              </TabsContent>

              <TabsContent value="trending" className="space-y-4 mt-4">
                <Card className="p-8 text-center">
                  <p className="text-muted-foreground">Trending posts will appear here.</p>
                </Card>
              </TabsContent>

              <TabsContent value="recent" className="space-y-4 mt-4">
                <Card className="p-8 text-center">
                  <p className="text-muted-foreground">Recent posts will appear here.</p>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

