import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { InstagramIcon, GithubIcon } from "@/components/icons/custom-icons";

export enum ContactInfoItem {
  Email = "email",
  Phone = "phone",
  Location = "location",
  Linkedin = "linkedin",
  Instagram = "instagram",
  Github = "github",
}

export type ContactInfoItemType = {
  icon?: React.ReactNode;
  value: string;
};

export const contactInfo: Record<ContactInfoItem, ContactInfoItemType> = {
  [ContactInfoItem.Email]: {
    value: "antonio.g.georgiev1998@gmail.com",
    icon: <Mail className="h-5 w-5" />,
  },
  [ContactInfoItem.Phone]: {
    value: "+359878464383",
    icon: <Phone className="h-5 w-5" />,
  },
  [ContactInfoItem.Location]: {
    value: "Sofia, Bulgaria",
    icon: <MapPin className="h-5 w-5" />,
  },
  [ContactInfoItem.Linkedin]: {
    value: "https://www.linkedin.com/in/antonio-georgiev-aa77b0153/",
    icon: <Linkedin className="h-5 w-5" />,
  },
  [ContactInfoItem.Instagram]: {
    value: "https://www.instagram.com/toni.georgiev/",
    icon: <InstagramIcon className="h-5 w-5" />,
  },
  [ContactInfoItem.Github]: {
    value: "https://github.com/antonioggeorgiev",
    icon: <GithubIcon className="h-5 w-5" />,
  },
};
