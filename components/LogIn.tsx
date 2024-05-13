import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LogIn() {
  return (
    <Card className="mx-auto max-w-sm h-full">
      <CardHeader>
        <CardTitle className="text-xl">Log In</CardTitle>
        <CardDescription>
          Enter your information to Log In
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">

          <div className="grid grid-cols-1 gap-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@uas.com.ph"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <a href="/dashboard"><Button type="submit" className="w-full py-2">
            Log in
          </Button></a>
        </div>
        <div className="mt-4 text-center text-sm">
          Dont have an account yet?{" "}
          <a href="/" className="underline">
            Sign Up
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
