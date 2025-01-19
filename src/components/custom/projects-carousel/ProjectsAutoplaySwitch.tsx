import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

type Props = {
  autoplay: boolean;
  setAutoplay: (autoplay: boolean) => void;
};

export default function ProjectsAutoplaySwitch({
  autoplay,
  setAutoplay,
}: Props) {
  return (
    <div className="flex items-center space-x-2 gap-2">
      <Switch
        id="airplane-mode"
        checked={autoplay}
        onCheckedChange={setAutoplay}
      />
      <Label htmlFor="airplane-mode">Autoplay</Label>
    </div>
  );
}
