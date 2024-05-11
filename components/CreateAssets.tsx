import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  ReceiptText,
  Download,
  CircleDotDashed,
  CircleX,
  CircleCheck,
  Home,
  LineChart,
  ListFilter,
  MoreVertical,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  SquareGanttChart,
  Truck,
  User2,
  Users2,
  ActivityIcon,
  PackagePlus,
  KeyboardIcon,
  SaveAllIcon,
  Save,
  Droplet,
  Droplets,
  InboxIcon,
  FilePlusIcon,
  CircleUser,
  CircleUserIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
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
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

const menu = [
  "Dashboard",
  "Assets",
  "Users",
  "Analytics",
  "Create Assets",
  "Create License",
  "Create Accessories",
  "Create Consumables",
  "Create Component",
  "Settings",
];
const menu2 = [
  "Dashboard",
  "Assets",
  "Users",
  "Analytics",
  "Create Assets",
  "Create License",
  "Create Accessories",
  "Create Consumables",
  "Create Component",
  "Settings",
];

import React from "react";

export function CreateAssets() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Link
            href="#"
            className="text-foreground transition-colors hover:text-foreground"
          >
            Dashboard
          </Link>
          <Link
            href="/activity"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Activity
          </Link>
          <Link
            href="/assets"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Assets
          </Link>
          <Link
            href="/users"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Users
          </Link>
          <Link
            href="/settings"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Settings
          </Link>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Create New</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  Assets
                  </MenubarItem>
                <MenubarItem>License</MenubarItem>
                <MenubarItem>Accessories</MenubarItem>
                <MenubarItem>Consumables</MenubarItem>
                <MenubarItem>Component</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link href="/Dashboard" className="hover:text-foreground">
                Dashboard
              </Link>
              <Link
                href="/activity"
                className="text-muted-foreground hover:text-foreground"
              >
                Activity
              </Link>
              <Link
                href="/assets"
                className="text-muted-foreground hover:text-foreground"
              >
                Assets
              </Link>
              <Link
                href="/users"
                className="text-muted-foreground hover:text-foreground"
              >
                Users
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Analytics
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Lookup assets"
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
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
        </div>
      </header>
  );
}
