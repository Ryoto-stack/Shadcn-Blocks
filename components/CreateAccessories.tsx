
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

export function CreateAccessories() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Nav/>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Side/>
        <main className="flex items-center justify-center flex-col py-4">
          <div className="flex items-center justify-center py-5">
            <div className="mx-auto grid w-[600px] gap-6">
              <div className="grid gap-2 text-center">
                <h1 className="text-3xl font-bold">Create New Accessories</h1>
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
