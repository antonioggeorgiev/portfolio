import { Button } from "@/components/ui/button";
import { ContactInfoItemType } from "@/lib/contacts";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  contactInfo: ContactInfoItemType;
  index?: number;
};

export function ContactInfoItemIcon({ contactInfo, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index }}
      className="flex items-center gap-2"
    >
      <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
        <Link href={contactInfo.value} target="_blank">
          {contactInfo.icon}
        </Link>
      </Button>
    </motion.div>
  );
}
