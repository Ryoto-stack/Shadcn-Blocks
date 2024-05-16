import Image from "next/image";
import {
  File,
  ListFilter,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const menu = [
  "Dashboard",
  "Assets",
  "Activity",
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
      <Nav/>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Side/>
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
