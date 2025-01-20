import { Button } from "@/components/ui/button";
import { ContactInfoItemType } from "@/lib/contacts";
import Link from "next/link";

type Props = {
  contactInfo: ContactInfoItemType;
};

export function ContactInfoItemIcon({ contactInfo }: Props) {
  return (
    <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
      <Link href={contactInfo.value} target="_blank">
        {contactInfo.icon}
      </Link>
    </Button>
  );
}
