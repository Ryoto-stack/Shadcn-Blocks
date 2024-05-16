import Link from "next/link";
import {
  Home,
  LineChart,
  Package,
  Settings,
  Users2,
  ActivityIcon,
  PackagePlus,
  KeyboardIcon,
  Droplets,
  InboxIcon,
  FilePlusIcon,
} from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

const menu = [
  "Activity",
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
  "Activity",
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

import React from 'react'

export default function Side() {
  return (
    <div>
           <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex bg-yellow-300">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5 ">
          <Link
            href="/dashboard"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Home className="h-4 w-4 transition-all scale-110" />
          </Link>
          {menu.map((menu: string, index: number) => {
            return (
              <div key={index}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={`/${menu.toLowerCase()}`}
                        className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8"
                      >
                        {menu === "Activity" && <ActivityIcon className="h-5 w-5" />}
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
    </div>
  )
}
