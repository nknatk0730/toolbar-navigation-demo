import { Home, Music, Settings } from "lucide-react"
import { ToolbarButton } from "./toolbar-button"
import { UserMenu } from "./user-menu";

export const ToolBar = () => {
  return (
    <div className="absolute bottom-6 gap-2 left-1/2 -translate-x-1/2 p-2 flex items-center rounded-full border-border/20 shadow-lg bg-muted/45 backdrop-blur">
      <UserMenu />
      <ToolbarButton title="top" href="/" icon={<Home />} />
      <ToolbarButton title="about" href="/about" icon={<Music />} />
      <ToolbarButton title="settings" href="/settings" icon={<Settings />} />
    </div>
  );
}