"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { meInfo } from "@/lib/me";
import ContactsInfo from "./ContactsInfo";

export default function MeInfo() {
  return (
    <div className="space-y-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Antonio Georgiev</CardTitle>
          <CardDescription>Software Engineer</CardDescription>
        </CardHeader>
        <CardContent>
          <TypewriterEffect text={meInfo} className="mb-4 text-lg" />
        </CardContent>
      </Card>
      <ContactsInfo />
    </div>
  );
}
