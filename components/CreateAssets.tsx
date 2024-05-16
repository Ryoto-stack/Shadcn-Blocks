<<<<<<< HEAD
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  Users2,
  KeyboardIcon,
  Droplets,
  InboxIcon,
  FilePlusIcon,
  PackagePlusIcon,
} from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

=======
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
>>>>>>> e674c7bbdbb028b774b5e3c868beb2b0397c5f20
import { Label } from "@/components/ui/label";

const menu = [
  "Dashboard",
  "Assets",
  "Users",
  "Analytics",
  "CreateLicense",
  "CreateAccessories",
  "CreateConsumables",
  "CreateComponent",
  "Settings",
];
const menu2 = [
  "Dashboard",
  "Assets",
  "Users",
  "Analytics",
  "CreateLicense",
  "CreateAccessories",
  "CreateConsumables",
  "CreateComponent",
  "Settings",
];

import React from "react";
import Nav from "./SideNav/Nav";
import Side from "./SideNav/Side";

export function CreateAssets() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Nav/>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
<<<<<<< HEAD
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                </Link>
                {menu2.map((menu2: string, index: number) => {
                  return (
                    <div key={index}>
                      <Link
                        href={`/${menu2.toLowerCase()}`}
                        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                      >
                        {menu2 === "Dashboard" && <Home className="h-5 w-5" />}
                        {menu2 === "Assets" && <Package className="h-5 w-5" />}
                        {menu2 === "Users" && <Users2 className="h-5 w-5" />}
                        {menu2 === "Analytics" && (
                          <LineChart className="h-5 w-5" />
                        )}
                        {menu2 === "CreateLicense" && (
                          <FilePlusIcon className="h-5 w-5" />
                        )}
                        {menu2 === "CreateAccessories" && (
                          <KeyboardIcon className="h-5 w-5" />
                        )}
                        {menu2 === "CreateConsumables" && (
                          <Droplets className="h-5 w-5" />
                        )}
                        {menu2 === "CreateComponent" && (
                          <InboxIcon className="h-5 w-5" />
                        )}
                        {menu2 === "Settings" && (
                          <Settings className="h-5 w-5" />
                        )}
                      </Link>
                    </div>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Recent Activity</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger className="py-3">Create New</MenubarTrigger>
              <MenubarContent>
                <MenubarItem><a href="/createassets">Assets</a></MenubarItem>
                <MenubarItem><a href="/createlicense">License</a></MenubarItem>
                <MenubarItem><a href="/createaccesories">Accessories</a></MenubarItem>
                <MenubarItem><a href="/createconsumables">Consumables</a></MenubarItem>
                <MenubarItem><a href="/createcomponent">Component</a></MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <Image
                  src="/cat.png"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <a href="/">Logout</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
=======
        <Side/>
>>>>>>> e674c7bbdbb028b774b5e3c868beb2b0397c5f20
        <main className="flex items-center justify-center flex-col py-4">
          <div className="flex items-center justify-center py-5">
            <div className="mx-auto grid w-[600px] gap-6">
              <div className="grid gap-2 text-center">
                <h1 className="text-3xl font-bold">Create New Assets</h1>
              </div>
              <div className="grid gap-4 flex-row">
                <div className="grid gap-2">
                  <Label>Example</Label>
                  <Input id="example" type="example" placeholder="...." />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Sample</Label>
                  </div>
                  <Input id="password" type="password" placeholder="...." />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Sample</Label>
                  </div>
                  <Input id="password" type="password" placeholder="...." />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Sample</Label>
                  </div>
                  <Input id="password" type="password" placeholder="...." />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Sample</Label>
                  </div>
                  <Input id="password" type="password" placeholder="...." />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Sample</Label>
                  </div>
                  <Input id="password" type="password" placeholder="...." />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Sample</Label>
                  </div>
                  <Input id="password" type="password" placeholder="...." />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Sample</Label>
                  </div>
                  <Input id="password" type="password" placeholder="...." />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Sample</Label>
                  </div>
                  <Input id="password" type="password" placeholder="...." />
                </div>
                <div className="flex items-end justify-end">
                  <a href="#">
                    <Button type="submit" className="w-[200px] py-2 flex">
                      Create
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
