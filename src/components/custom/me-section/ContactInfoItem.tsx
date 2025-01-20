import { ContactInfoItemType } from "@/lib/contacts";
import { motion } from "framer-motion";
import { CopyButton } from "../CopyButton";

type Props = {
  index?: number;
  contactInfo: ContactInfoItemType;
  showCopyButton?: boolean;
};

export function ContactInfoItem({
  contactInfo,
  index = 0,
  showCopyButton = false,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index }}
      className="flex items-center gap-2"
    >
      <div className="flex items-center gap-2">
        {contactInfo.icon}
        {contactInfo.value}
      </div>
      {showCopyButton && <CopyButton value={contactInfo.value} />}
    </motion.div>
  );
}
