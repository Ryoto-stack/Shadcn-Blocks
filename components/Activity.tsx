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

const menu = [
  "Dashboard",
  "Assets",
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
  "Users",
  "Analytics",
  "CreateAssets",
  "CreateLicense",
  "CreateAccessories",
  "CreateConsumables",
  "CreateComponent",
  "Settings",
];

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

import React from "react";

export function Activity() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href=""
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <SquareGanttChart className="h-4 w-4 transition-all scale-110" />
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
                        {menu2 === "Users" && (
                          <Users2 className="h-5 w-5" />
                        )}
                        {menu2 === "Analytics" && (
                          <LineChart className="h-5 w-5" />
                        )}
                        {menu2 === "CreateAssets" && (
                          <PackagePlus className="h-5 w-5" />
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
                <MenubarItem>Assets</MenubarItem>
                <MenubarItem>License</MenubarItem>
                <MenubarItem>Accessories</MenubarItem>
                <MenubarItem>Consumables</MenubarItem>
                <MenubarItem>Component</MenubarItem>
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
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-9">
          <div className="grid auto-rows-max items-start gap-9 md:gap-1 lg:col-span-9">
            <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-9 lg:grid-cols-6 xl:grid-cols-6">
              <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
                <CardHeader className="pb-3">
                  <CardTitle>Your Activity</CardTitle>
                  <CardDescription className="max-w-lg text-balance leading-relaxed">
                    Introducing Our Dynamic Activity Dashboard for Seamless
                    Management and Insightful Analysis.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card x-chunk="dashboard-05-chunk-1">
                <CardHeader className="pb-2 flex justify-center items-center">
                  <CardDescription>Approve</CardDescription>
                  <CircleCheck className="h-5 w-5" />
                  <CardTitle className="text-4xl flex justify-center items-center">
                    6
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground flex justify-center items-center">
                    Total of Approve
                  </div>
                </CardContent>
              </Card>
              <Card x-chunk="dashboard-05-chunk-1">
                <CardHeader className="pb-2 flex justify-center items-center">
                  <CardDescription>Decline</CardDescription>
                  <CircleX className="h-5 w-5" />
                  <CardTitle className="text-4xl">2</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground flex justify-center items-center">
                    Total of Decline
                  </div>
                </CardContent>
              </Card>
              <Card x-chunk="dashboard-05-chunk-1">
                <CardHeader className="pb-2 flex justify-center items-center">
                  <CardDescription>Pending</CardDescription>
                  <CircleDotDashed className="h-5 w-5" />
                  <CardTitle className="text-4xl">0</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground flex justify-center items-center">
                    Total of Pending
                  </div>
                </CardContent>
              </Card>
              <Card x-chunk="dashboard-05-chunk-2">
                <CardHeader className="pb-2 flex justify-center items-center">
                  <CardDescription>Total activity</CardDescription>
                  <ReceiptText className="h-5 w-5" />
                  <CardTitle className="text-4xl ">8</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground flex justify-center items-center">
                    Total of Activity
                  </div>
                </CardContent>
              </Card>
            </div>
            <Tabs defaultValue="week">
              <TabsContent value="week">
                <Card x-chunk="dashboard-05-chunk-3">
                  <CardHeader className="px-7">
                    <CardTitle>Activity</CardTitle>
                    <CardDescription>
                      Recent Activity from your Inventory
                    </CardDescription>
                    <div className="flex items-end justify-end">
                      <div className="flex items-end gap-6">
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-7 gap-1 text-sm"
                            >
                              <ListFilter className="h-3.5 w-3.5" />
                              <span className="sr-only sm:not-sr-only">
                                Filter
                              </span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuCheckboxItem checked>
                              All
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem>
                              Approved
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem>
                              Declined
                            </DropdownMenuCheckboxItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-7 gap-1 text-sm"
                        >
                          <Download className="h-3.5 w-3.5" />
                          <span className="sr-only sm:not-sr-only">Export</span>
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Customer</TableHead>
                          <TableHead className="hidden sm:table-cell">
                            Type
                          </TableHead>
                          <TableHead className="hidden sm:table-cell">
                            Status
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            Date
                          </TableHead>
                          <TableHead className="text-right">Item</TableHead>
                          <TableHead className="text-right">Serial</TableHead>
                          <TableHead className="text-right">Remarks</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow className="bg-accent">
                          <TableCell>
                            <div className="font-medium">Mecca Denise</div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Assets
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              Approved
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2024-02-23
                          </TableCell>
                          <TableCell className="text-right">Monitor</TableCell>
                          <TableCell className="text-right">ABCD1234</TableCell>
                          <TableCell className="text-right">
                            For Replace
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Kent Escala</div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Lincense
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="destructive">
                              Declined
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2024-06-24
                          </TableCell>
                          <TableCell className="text-right">
                            Office 365 Personal
                          </TableCell>
                          <TableCell className="text-right">N/A</TableCell>
                          <TableCell className="text-right">
                            For Upgrade
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Orville Montero</div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Assets
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              Approved
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2024-06-24
                          </TableCell>
                          <TableCell className="text-right">Headset</TableCell>
                          <TableCell className="text-right">1234ABCD</TableCell>
                          <TableCell className="text-right">
                            For deploy
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Orville Montero</div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Assets
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              Approved
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2024-06-24
                          </TableCell>
                          <TableCell className="text-right">Monitor</TableCell>
                          <TableCell className="text-right">ASDV3162</TableCell>
                          <TableCell className="text-right">
                            For Replace
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Micah Avance</div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Assets
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="destructive">
                              Decline
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2024-06-25
                          </TableCell>
                          <TableCell className="text-right">
                            Laptop(ASUS)
                          </TableCell>
                          <TableCell className="text-right">QW12QW12</TableCell>
                          <TableCell className="text-right">
                            For Replace
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Micah Avance</div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Assets
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              Approved
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2024-06-25
                          </TableCell>
                          <TableCell className="text-right">
                            Laptop(ASUS)
                          </TableCell>
                          <TableCell className="text-right">QW12QW12</TableCell>
                          <TableCell className="text-right">
                            For Repair
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Kent Escala</div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Consumables
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              Approved
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2024-06-23
                          </TableCell>
                          <TableCell className="text-right">
                            Cloud Storage
                          </TableCell>
                          <TableCell className="text-right">N/A</TableCell>
                          <TableCell className="text-right">
                            For Upgrade
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Rei Tuazon</div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Consumables
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              Approved
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2024-06-26
                          </TableCell>
                          <TableCell className="text-right">
                            Cloud Storage
                          </TableCell>
                          <TableCell className="text-right">N/A</TableCell>
                          <TableCell className="text-right">
                            For Upgrade
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          <div>{/* side pannel */}</div>
        </main>
      </div>
    </div>
  );
}
