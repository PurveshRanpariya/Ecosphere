import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Leaf, ShieldCheck, Sprout, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge
                  variant="outline"
                  className="border-green-500 text-green-600 dark:border-green-400 dark:text-green-400"
                >
                  Join the Plant Revolution
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Connect, Share & Grow with Ecosphere
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  The ultimate social platform for plant enthusiasts to share knowledge, showcase collections, and shop
                  for all your gardening needs.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <Link href="/signup">Join Ecosphere</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/marketplace">Explore Marketplace</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="\image/hero section photo.webp"
                alt="Hero Image of Plants"
                width={550}
                height={550}
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Join Ecosphere?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Discover the benefits of being part of our growing community of plant lovers.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 pt-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-2 border-green-100 dark:border-green-900">
              <CardHeader className="pb-2">
                <Users className="h-12 w-12 text-green-600" />
                <CardTitle className="text-xl">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Connect with like-minded plant enthusiasts, share tips, and grow together.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-green-100 dark:border-green-900">
              <CardHeader className="pb-2">
                <ShieldCheck className="h-12 w-12 text-green-600" />
                <CardTitle className="text-xl">Trusted Sellers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Shop with confidence from verified sellers with quality plants and products.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-green-100 dark:border-green-900">
              <CardHeader className="pb-2">
                <Sprout className="h-12 w-12 text-green-600" />
                <CardTitle className="text-xl">Plant Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Access expert advice and resources to help your plants thrive.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-green-100 dark:border-green-900">
              <CardHeader className="pb-2">
                <Leaf className="h-12 w-12 text-green-600" />
                <CardTitle className="text-xl">Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Support eco-friendly practices and sustainable gardening methods.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50 dark:bg-green-950/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Plants</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Explore our curated selection of beautiful plants for your home or garden.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 pt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="relative">
                  <Image
                    src={`\image/item_1.jpg`}
                    alt={`Featured Plant ${i}`}
                    width={400}
                    height={300}
                    className="object-cover w-full h-48"
                  />
                  <Badge className="absolute top-2 right-2 bg-green-600">New</Badge>
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">Aloe vera</CardTitle>
                  <CardDescription>Indoor Plant</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex justify-between">
                    <p className="font-medium">$4.99</p>
                    <div className="flex items-center">
                      <span className="text-yellow-500">★★★★★</span>
                      <span className="text-xs text-muted-foreground ml-1">(42)</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4">
                  <Button className="w-full bg-green-600 hover:bg-green-700">Add to Cart</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link href="/marketplace" className="flex items-center gap-2">
                View All Products <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Community Highlights */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Community Highlights</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                See what our community members are sharing and discussing.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 pt-12 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="relative">
                  <Image
                    src={`\image/comm_high_1.jpg`}
                    alt={`Community Post ${i}`}
                    width={400}
                    height={300}
                    className="object-cover w-full h-48"
                  />
                </div>
                <CardHeader className="p-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src="\image/comm_2_avatar.jpeg"
                      alt="User Avatar"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="text-sm">@plantlover{i}</CardTitle>
                      <CardDescription className="text-xs">2 hours ago</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm">
                    Just repotted my monstera and it's thriving! Anyone have tips for propagating the cuttings?
                  </p>
                </CardContent>
                <CardFooter className="p-4 flex justify-between">
                  <div className="flex gap-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
                    >
                      ❤ 24
                    </Button>
                    <Button variant="ghost" size="sm">
                      💬 8
                    </Button>
                  </div>
                  <Button variant="ghost" size="sm">
                    Share
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link href="/community" className="flex items-center gap-2">
                Join the Conversation <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to start your plant journey?
                </h2>
                <p className="max-w-[600px] text-green-50 md:text-xl">
                  Join thousands of plant enthusiasts on Ecosphere today and transform your space into a green paradise.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-white text-green-600 hover:bg-green-50">
                  <Link href="/signup">Sign Up Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-green-700">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="\image/comm_high_3.jpg"
                alt="Plant Collection"
                width={500}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

