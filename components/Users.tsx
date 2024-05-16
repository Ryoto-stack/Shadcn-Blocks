import Image from "next/image";
import {
  File,
  ListFilter,
<<<<<<< HEAD
  Package,
  Package2,
  PackageIcon,
  PackagePlusIcon,
  PanelLeft,
   SaveIcon,
  Search,
  Settings,
  SettingsIcon,
  SquareGanttChartIcon,
  Users2,
  Users2Icon,
=======
>>>>>>> e674c7bbdbb028b774b5e3c868beb2b0397c5f20
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

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
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
<<<<<<< HEAD
import { Tabs, TabsContent} from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
=======
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
>>>>>>> e674c7bbdbb028b774b5e3c868beb2b0397c5f20

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

import Nav from "./SideNav/Nav";
import Side from "./SideNav/Side";

export function Users() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
<<<<<<< HEAD
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href=""
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Users2Icon className="h-4 w-4 transition-all scale-110" />
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
                        {menu === "Assets" && <PackageIcon className="h-5 w-5" />}
                        {menu === "Activity" && (
                          <SquareGanttChartIcon className="h-5 w-5" />
                        )}
                        {menu === "Users" && <Users2 className="h-5 w-5" />}
                        {menu === "Analytics" && (
                          <LineChart className="h-5 w-5" />
                        )}
                        {menu === "CreateAssets" && (
                          <PackagePlusIcon className="h-5 w-5" />
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
                  href="/"
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
                          <Users2Icon className="h-5 w-5" />
                        )}
                        {menu2 === "Activity" && <SquareGanttChartIcon className="h-5 w-5" />}
                        {menu2 === "Analytics" && (
                          <LineChart className="h-5 w-5" />
                        )}
                        {menu2 === "CreateLicense" && (
                          <SaveIcon className="h-5 w-5" />
                        )}
                        {menu2 === "CreateAccessories" && (
                          <KeyboardIcon className="h-5 w-5" />
                        )}
                        {menu2 === "CreateConsumables" && (
                          <DropletsIcon className="h-5 w-5" />
                        )}
                        {menu2 === "CreateComponent" && (
                          <InboxIcon className="h-5 w-5" />
                        )}
                        {menu2 === "Settings" && (
                          <SettingsIcon className="h-5 w-5" />
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
                <BreadcrumbLink asChild>
                  <Link href="#">Users</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>All Users</BreadcrumbPage>
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
              <DropdownMenuItem>
                <a href="/settings">Settings</a>
              </DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <a href="/">Logout</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
=======
      <Nav/>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Side/>
>>>>>>> e674c7bbdbb028b774b5e3c868beb2b0397c5f20
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="all">
            <div className="flex items-center">
              <div className="ml-auto flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <ListFilter className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Filter
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <Badge variant="default">Position</Badge>
                    <DropdownMenuCheckboxItem>
                      IT Support
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      IT Asset Manager
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Intern</DropdownMenuCheckboxItem>
                    <Badge variant="default">Branch</Badge>
                    <DropdownMenuCheckboxItem>
                      Pampanga
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Pasig</DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <File className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Export
                  </span>
                </Button>
              </div>
            </div>
            <TabsContent value="all">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>Users</CardTitle>
                  <CardDescription>
                    Manage your users and view their information.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="hidden w-[100px] sm:table-cell">
                          <span className="sr-only">Image</span>
                        </TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Username</TableHead>
                        <TableHead>Position</TableHead>
                        <TableHead>Branch</TableHead>
                        <TableHead>Created at</TableHead>
                        <TableHead>
                          <span className="sr-only">Actions</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                          <Image
                            alt="Product image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src="/cat.png"
                            width="64"
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          Mecca Denise Dagami
                        </TableCell>
                        <TableCell className="font-medium">
                          m.dagami@uas.ph
                        </TableCell>
                        <TableCell className="font-medium">Mecca</TableCell>
                        <TableCell className="hidden md:table-cell">
                          Intern
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Pampanga
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2023-07-12 10:42 AM
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                          <Image
                            alt="Product image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src="/cat.png"
                            width="64"
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          Orville Mon
                        </TableCell>
                        <TableCell className="font-medium">
                          o.mon@uas.ph
                        </TableCell>
                        <TableCell className="font-medium">Orville</TableCell>
                        <TableCell className="hidden md:table-cell">
                          Intern
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Pampanga
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2023-10-18 03:21 PM
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                          <Image
                            alt="Product image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src="/cat.png"
                            width="64"
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          Kile Santiago
                        </TableCell>
                        <TableCell className="font-medium">
                          k.santiago@uas.ph
                        </TableCell>
                        <TableCell className="font-medium">Kile</TableCell>
                        <TableCell className="hidden md:table-cell">
                          IT Asset Manager
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Pampanga
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2023-11-29 08:15 AM
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                          <Image
                            alt="Product image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src="/cat.png"
                            width="64"
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          Kent Escala
                        </TableCell>
                        <TableCell className="font-medium">
                          k.escala@uas.ph
                        </TableCell>
                        <TableCell className="font-medium">Kent</TableCell>
                        <TableCell className="hidden md:table-cell">
                          Intern
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Pampanga
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2023-12-25 11:59 PM
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                          <Image
                            alt="Product image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src="/cat.png"
                            width="64"
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          Ask Ketchum
                        </TableCell>
                        <TableCell className="font-medium">
                          a.ketchum@uas.ph
                        </TableCell>
                        <TableCell className="font-medium">Ash</TableCell>
                        <TableCell className="hidden md:table-cell">
                          IT Support
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Pasig
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2024-01-01 12:00 AM
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                          <Image
                            alt="Product image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src="/cat.png"
                            width="64"
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          Coco Martin
                        </TableCell>
                        <TableCell className="font-medium">
                          c.martin@uas.ph
                        </TableCell>
                        <TableCell className="font-medium">Coco</TableCell>
                        <TableCell className="hidden md:table-cell">
                          IT Support
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Pasig
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2024-02-14 02:14 PM
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                    products
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
