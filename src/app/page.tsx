import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Card, CardContent } from "@/components/ui/card";
import { Music, Search, Calendar, MapPin } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center gap-4">
        <Link className="flex items-center justify-center" href="#">
          <Music className="h-6 w-6 text-neutral-900 dark:text-neutral-50" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium text-neutral-900 dark:text-neutral-50 hover:underline underline-offset-4"
            href="#">
            Concerts
          </Link>
          <Link
            className="text-sm font-medium text-neutral-900 dark:text-neutral-50 hover:underline underline-offset-4"
            href="#">
            Venues
          </Link>
          <Link
            className="text-sm font-medium text-neutral-900 dark:text-neutral-50 hover:underline underline-offset-4"
            href="#">
            About
          </Link>
          <Link
            className="text-sm font-medium text-neutral-900 dark:text-neutral-50 hover:underline underline-offset-4"
            href="#">
            Contact
          </Link>
        </nav>
        <ModeToggle />
      </header>
      <main className="flex-1 ">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Get Your Tickets to the Hottest Concerts
                </h1>
                <p className="mx-auto max-w-[700px] text-neutral-400  md:text-xl">
                  {
                    "Don't miss out on your favorite artists. Book your tickets now and experience the magic of live music."
                  }
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Search for concerts or artists"
                    type="text"
                  />
                  <Button type="submit">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-neutral-100 dark:bg-neutral-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 ">
              Featured Concerts
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Rock Fest 2023",
                  date: "July 15, 2023",
                  location: "Central Park, NY",
                  image: "/placeholder.svg",
                },
                {
                  name: "Jazz Night",
                  date: "August 5, 2023",
                  location: "Blue Note, Chicago",
                  image: "/placeholder.svg",
                },
                {
                  name: "Pop Extravaganza",
                  date: "September 2, 2023",
                  location: "Hollywood Bowl, LA",
                  image: "/placeholder.svg",
                },
              ].map((concert, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <Image
                      width={600}
                      height={400}
                      alt={concert.name}
                      src={concert.image}
                      className="object-cover w-full h-60 rounded-md"
                      style={{ aspectRatio: "200/200", objectFit: "cover" }}
                    />
                    <h3 className="text-2xl font-bold mt-4">{concert.name}</h3>
                    <div className="flex items-center mt-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm text-gray-500">{concert.date}</span>
                    </div>
                    <div className="flex items-center mt-2">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm text-gray-500">{concert.location}</span>
                    </div>
                    <Button className="w-full mt-4" asChild>
                      <Link href="checkout">Buy Tickets</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Never Miss a Beat
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl">
                  Sign up for our newsletter to get the latest concert announcements and exclusive
                  presale codes.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row gap-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t dark:border-neutral-800">
        <p className="text-xs text-gray-500">© 2023 Concert Tickets Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
