"use client"

import React from "react";

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
  PackagePlus,
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

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Label } from "./ui/label";
import { Calendar as CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const menu = [
  "Dashboard",
  "Assets",
  "Activity",
  "Users",
  "Analytics",
  "CreateAssets",
  "CreateLicense",
  "CreateAccessories",
  "CreateConsumables",
  "CreateComponent",
  "Settings",
];
const menu2 = [
  "Dashboard",
  "Assets",
  "Activity",
  "Users",
  "Analytics",
  "CreateAssets",
  "CreateLicense",
  "CreateAccessories",
  "CreateConsumables",
  "CreateComponent",
  "Settings",
];
export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>()
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[600px] justify-start text-left font-normal py-2 pl-3",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-6 w-6" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
export default function CreateComponent() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <PackagePlusIcon className="h-4 w-4 transition-all scale-110" />
          </Link>
          {menu.map((menu: string, index: number) => {
            return (
              <div key={index}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={`/${menu.toLowerCase()}`}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                      >
                        {menu === "Dashboard" && <Home className="h-5 w-5" />}
                        {menu === "Assets" && <Package className="h-5 w-5" />}
                        {menu === "Users" && <Users2 className="h-5 w-5" />}
                        {menu === "Analytics" && (
                          <LineChart className="h-5 w-5" />
                        )}
                        {menu === "CreateAssets" && (
                          <PackagePlus className="h-5 w-5" />
                        )}
                        {menu === "CreateLicense" && (
                          <FilePlusIcon className="h-5 w-5" />
                        )}
                        {menu === "CreateAccessories" && (
                          <KeyboardIcon className="h-5 w-5" />
                        )}
                        {menu === "CreateConsumables" && (
                          <Droplets className="h-5 w-5" />
                        )}
                        {menu === "CreateComponent" && (
                          <InboxIcon className="h-5 w-5" />
                        )}
                        {menu === "Settings" && (
                          <Settings className="h-5 w-5" />
                        )}
                        <span className="sr-only">{menu}</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">{menu}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            );
          })}
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
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
        <main className="flex items-center justify-center flex-col py-4 bg-slate-100">
          <div className="flex items-center justify-center py-5">
            <div className="mx-auto grid w-[600px] gap-6">
              <div className="grid gap-2 text-center">
                <h1 className="text-3xl font-bold">Create New Component</h1>
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
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label>Purchase Date</Label>
                  </div>
                  <DatePickerDemo />
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
