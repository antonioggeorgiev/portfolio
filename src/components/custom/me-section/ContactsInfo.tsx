"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ContactInfoItem } from "./ContactInfoItem";
import { contactInfo } from "@/lib/contacts";
import { ContactInfoItemIcon } from "./ContactInfoIconItem";

export default function ContactsInfo() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
        <CardDescription>Feel free to reach out</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <ContactInfoItem contactInfo={contactInfo.email} showCopyButton />
          <ContactInfoItem contactInfo={contactInfo.phone} showCopyButton />
          <ContactInfoItem contactInfo={contactInfo.location} />
          <div className="flex items-center gap-2">
            <ContactInfoItemIcon contactInfo={contactInfo.linkedin} />
            <ContactInfoItemIcon contactInfo={contactInfo.instagram} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
