import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/registry/new-york/ui/button"
import { UserAuthForm } from "../components/user-auth-form"

import { PlusCircledIcon } from "@radix-ui/react-icons"
import { Button } from "../registry/new-york/ui/button"
import { ScrollArea, ScrollBar } from "../registry/new-york/ui/scroll-area"
import { Separator } from "../registry/new-york/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../registry/new-york/ui/tabs"

import { AlbumArtwork } from "../components/album-artwork"
import { Menu } from "../components/menu"
import { PodcastEmptyPlaceholder } from "../components/podcast-empty-placeholder"
import { Sidebar } from "../components/sidebar"
import { listenNowAlbums, madeForYouAlbums } from "../data/albums"
import { playlists } from "../data/playlists"
import React from 'react';

export const metadata: Metadata = {
  title: "Music App",
  description: "Example music app using the components.",
}

export default function MusicPage() {
  return (

<div>
<div className="md:hidden">
        <Image
          src="/registry/new-york/example/authentication-light.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <Image
          src="/registry/new-york/example/authentication-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/examples/authentication"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Login
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
						<image string="https://altosaex.sakura.ne.jp/1220/logo.png"
						width={200}
						height={50}
						className="logo"></image>
            Acme Inc
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This library has saved me countless hours of work and
                helped me deliver stunning designs to my clients faster than
                ever before.&rdquo;
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>


        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

      <div className='md:hidden'>
        <Image src="https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80"
          width={1280}
          height={1114}
          alt="Unsplash Image"
          className="block dark:hidden"
					/>
				<div className='hidden dark:block'>
        <Image src="https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80"
          width={1280}
          height={1114}
          alt="Unsplash Image"
        />
				</div>
      </div>
      <div className="hidden md:block">
			<Menu />
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <Sidebar playlists={playlists} className="hidden lg:block" />
              <div className="col-span-3 lg:col-span-4 lg:border-l">
                <div className="h-full px-4 py-6 lg:px-8">
                  <Tabs defaultValue="music" className="h-full space-y-6">
                    <div className="space-between flex items-center">
                      <TabsList>
                        <TabsTrigger value="music" className="relative">
                          Music
                        </TabsTrigger>
                        <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
                        <TabsTrigger value="live" disabled>
                          Live
                        </TabsTrigger>
                      </TabsList>
                      <div className="ml-auto mr-4">
                        <Button>
                          <PlusCircledIcon className="mr-2 h-4 w-4" />
                          Add music
                        </Button>
                      </div>
                    </div>
                    <TabsContent
                      value="music"
                      className="border-none p-0 outline-none"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            Listen Now
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Top picks for you. Updated daily.
                          </p>
                        </div>
                      </div>
                      <Separator className="my-4" />
											<div className="relative">
											<ScrollArea>
                          <div className="flex space-x-4 pb-4">
														
											<iframe width="330" height="330" src="https://www.youtube.com/embed/Ji13IAKZnNo?si=7K1fhbLaiNCa_mLi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

											<iframe width="330" height="330" src="https://www.youtube.com/embed/tT9Eh8wNMkw?si=ptZHXbjySHPnKFAr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

											<iframe width="330" height="330" src="https://www.youtube.com/embed/x6zypc_LhnM?si=hH7phdZMhSUMfFkh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                            {/* {listenNowAlbums.map((album) => (
                              <AlbumArtwork
                                key={album.name}
                                album={album}
                                className="w-[250px]"
                                aspectRatio="portrait"
                                width={250}
                                height={330}
                              />
                            ))} */}
                          </div>
                          {/* <ScrollBar orientation="horizontal" /> */}
                        </ScrollArea>
                      </div>
                      <div className="mt-6 space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">
                          Made for You
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Your personal playlists. Updated daily.
                        </p>
                      </div>
                      <Separator className="my-4" />
                      <div className="relative">
                        <ScrollArea>
                          <div className="flex space-x-4 pb-4">

													<iframe width="200" height="200" src="https://www.youtube.com/embed/oRh0hxV1_SU?si=gULSvb9w9WtFptl8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

													<iframe width="200" height="200" src="https://www.youtube.com/embed/VNiKaRzDFMA?si=JTZpfKlcfxBaTW7f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

													<iframe width="200" height="200" src="https://www.youtube.com/embed/L4gajOxeNmo?si=62KdqNk4ctXqzgur" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

													<iframe width="200" height="200" src="https://www.youtube.com/embed/oRh0hxV1_SU?si=gULSvb9w9WtFptl8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

													<iframe width="200" height="200" src="https://www.youtube.com/embed/_kkAjW3-IS0?si=0UcQ2ZrT7w2GSYg7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

													<iframe width="200" height="200" src="https://www.youtube.com/embed/r-Z8KuwI7Gc?si=fUmyjtEija86sKsu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

													<iframe width="200" height="200" src="https://www.youtube.com/embed/4y9C1tQW3HY?si=5AnoMOAFAqqa4KE8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

													<iframe width="200" height="200" src="https://www.youtube.com/embed/f2w9JwQaT4U?si=pg9od0BCLr4W8iBg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                            {/* {madeForYouAlbums.map((album) => (
                              <AlbumArtwork
                                key={album.name}
                                album={album}
                                className="w-[150px]"
                                aspectRatio="square"
                                width={150}
                                height={150}
                              />
                            ))} */}
                          </div>
                          <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                      </div>
                    </TabsContent>


                      {/* </div> */}
                      <div className="mt-6 space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">
                          BengieMan
                        </h2>
                        <p className="text-sm text-muted-foreground">
												Someone more beloved than anyone else.
                        </p>
                      </div>
                      <Separator className="my-4" />
                      <div className="relative">
                        <ScrollArea>
                          <div className="flex space-x-4 pb-4">
										<div className="flex items-center gap-2 my-1">
			<div>
      <video width="450" height="650" controls className="mx-3">
        <source src="https://altosaex.sakura.ne.jp/1220/ben.mp4" type="video/mp4"/>
        hogehoge
      </video>
    </div>
		<div>
      <video width="450" height="650" controls className="mx-3">
        <source src="https://altosaex.sakura.ne.jp/1220/ben2.mp4" type="video/mp4"/>
        hogehoge
      </video>
    </div>
		<div>
      <video width="450" height="650" controls className="mx-3">
        <source src="https://altosaex.sakura.ne.jp/1220/ben3.mp4" type="video/mp4"/>
        hogehoge
      </video>
    </div>
		<div>
      <video width="450" height="650" controls className="mx-3">
        <source src="https://altosaex.sakura.ne.jp/1220/ben4.mp4" type="video/mp4"/>
        hogehoge
      </video>
    </div>
		<div>
      <video width="450" height="650" controls className="mx-3">
        <source src="https://altosaex.sakura.ne.jp/1220/ben5.mp4" type="video/mp4"/>
        hogehoge
      </video>
    </div>
		<div>
      <video width="450" height="650" controls className="mx-3 gap-7">
        <source src="https://altosaex.sakura.ne.jp/1220/ben6.mp4" type="video/mp4"/>
        hogehoge
      </video>
    </div>
		</div>
										</div>


                          <ScrollBar orientation="horizontal" />
                        </ScrollArea>
												</div>
                    {/* </TabsContent> */}



                    <TabsContent
                      value="podcasts"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            New Episodes
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Your favorite podcasts. Updated daily.
                          </p>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <PodcastEmptyPlaceholder />
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
        </div>
				<Menu />
        </div>
				</div>
				</div>
);
}