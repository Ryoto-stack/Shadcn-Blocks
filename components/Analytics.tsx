import React from "react";

import Image from "next/image";
import Link from "next/link";
import {
  Droplets,
  DropletsIcon,
  FilePlusIcon,
  Home,
  InboxIcon,
  KeyboardIcon,
  LineChart,
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
  Users2Icon,
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
import BarChart from "@/app/component/barchart";
import { App } from "@/app/component/pie";

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

export default function Analytics() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Nav/>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Side/>
        <h1 className="text-3xl font-bold ml-5">Analytics</h1>
        <main className="px-5 py-5 flex-row flex"> 
            <Card
              x-chunk="analytics-02-chunk-3"
              className="flex h-[450px] w-[550px] flex-col"
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  Asset By Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <BarChart />
              </CardContent>
            </Card>
            <Card
              x-chunk="analytics-02-chunk-3"
              className="flex h-[550px] w-[500px] flex-col"
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  Asset By Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <App />
              </CardContent>
            </Card>
        </main>
      </div>
    </div>
  );
};
