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
import { useRouter } from "next/navigation";

export default function ContactsInfo() {
  const router = useRouter();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
        <CardDescription>Feel free to reach out</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <ContactInfoItem
            contactInfo={contactInfo.email}
            showCopyButton
            index={0}
          />
          <ContactInfoItem
            contactInfo={contactInfo.github}
            showCopyButton
            index={1}
            onClick={() => {
              router.push(contactInfo.github.value);
            }}
          />
          <ContactInfoItem contactInfo={contactInfo.location} index={2} />
          <div className="flex items-center gap-2">
            <ContactInfoItemIcon contactInfo={contactInfo.linkedin} index={3} />
            <ContactInfoItemIcon
              contactInfo={contactInfo.instagram}
              index={4}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
