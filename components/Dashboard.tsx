import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  BarChart,
  Barcode,
  CircleUser,
  CreditCard,
  DollarSign,
  Droplets,
  FileIcon,
  FilePlusIcon,
  Inbox,
  Keyboard,
  Menu,
  Package2,
  Save,
  Search,
  Users,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

import Barchart from "@/app/component/index";

export function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
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
                  <a href="/createassets">Assets</a>
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
              <Menu className="h-5 w-5" />
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
              <DropdownMenuItem> <a href="/settings"> Settings</a></DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <a href="/">Logout</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-1 md:grid-cols-2 md:gap-4 lg:grid-cols-6">
          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Assets</CardTitle>
              <Barcode className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <Button variant="link" className="text-xs">
                View All
              </Button>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Licenses</CardTitle>
              <FileIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">34</div>
              <Button variant="link" className="text-xs">
                View All
              </Button>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Accessories</CardTitle>
              <Keyboard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">56</div>
              <Button variant="link" className="text-xs">
                View All
              </Button>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Consumables</CardTitle>
              <Droplets className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78</div>
              <Button variant="link" className="text-xs">
                View All
              </Button>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Component</CardTitle>
              <Inbox className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">90</div>
              <Button variant="link" className="text-xs">
                View All
              </Button>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <div>
              <div className="text-2xl font-bold pl-5">123</div>
              <a href="/users" className="pl-5 text-sm underline-offset-8 underline text-primary" >View All</a>
            </div>
          </Card>
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Activity</CardTitle>
                <CardDescription>
                  Recent Activity from your Inventory
                </CardDescription>
              </div>
              <Button asChild size="sm" className="ml-auto gap-1">
                <Link href="/activity">
                  View All
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Item</TableHead>
                    <TableHead className="text-right">Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Kent Escala</div>
                    </TableCell>
                    <TableCell>Asset</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="text-xs">
                        Approved
                      </Badge>
                    </TableCell>
                    <TableCell>Laptop</TableCell>
                    <TableCell className="text-right">06/05/2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Orville Montero</div>
                    </TableCell>
                    <TableCell>License</TableCell>
                    <TableCell>
                      <Badge className="text-xs" variant="destructive">
                        Declined
                      </Badge>
                    </TableCell>
                    <TableCell>Software</TableCell>
                    <TableCell className="text-right">05/05/2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Mecca Dagami</div>
                    </TableCell>
                    <TableCell>Asset</TableCell>
                    <TableCell>
                      <Badge className="text-xs" variant="destructive">
                        Declined
                      </Badge>
                    </TableCell>
                    <TableCell>PC</TableCell>
                    <TableCell className="text-right">04/05/2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Justin Tuazon</div>
                    </TableCell>
                    <TableCell>Consumables</TableCell>
                    <TableCell>
                      <Badge className="text-xs" variant="secondary">
                        Approved
                      </Badge>
                    </TableCell>
                    <TableCell>Licenses</TableCell>
                    <TableCell className="text-right">03/05/2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Micah Avance</div>
                    </TableCell>
                    <TableCell>Accessory</TableCell>
                    <TableCell>
                      <Badge className="text-xs" variant="destructive">
                        Declined
                      </Badge>
                    </TableCell>
                    <TableCell>Keyboard</TableCell>
                    <TableCell className="text-right">02/05/2024</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-5">
            <CardHeader>
              <CardTitle>Asset By Status</CardTitle>
            </CardHeader>
            <CardContent>
              <Barchart />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
