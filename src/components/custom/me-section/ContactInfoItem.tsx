import { ContactInfoItemType } from "@/lib/contacts";
import { motion } from "framer-motion";
import { CopyButton } from "../CopyButton";
import { cn } from "@/lib/utils";

type Props = {
  index?: number;
  contactInfo: ContactInfoItemType;
  showCopyButton?: boolean;
  onClick?: () => void;
};

export function ContactInfoItem({
  contactInfo,
  index = 0,
  showCopyButton = false,
  onClick,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index }}
      className="flex items-center gap-2"
    >
      <div
        className={cn("flex items-center gap-2", onClick && "cursor-pointer")}
        onClick={onClick}
      >
        {contactInfo.icon}
        {contactInfo.value}
      </div>
      {showCopyButton && <CopyButton value={contactInfo.value} />}
    </motion.div>
  );
}
