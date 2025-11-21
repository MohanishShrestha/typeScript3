import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type CustomDropdownProps = {
  label: string;
  items: string[];
  variant?: "outline" | "ghost" | "default";
  icon?: React.ReactNode;
  className?: string;
  hover?: boolean; 
};

export default function CustomDropdown({
  label,
  items,
  variant = "ghost",
  icon,
  className = "",
  hover = false, 
}: CustomDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => hover && setOpen(true)}
    //   onMouseLeave={() => {
    //     if (hover) {
    //       setTimeout(() => setOpen(false), 200); // 100ms delay
    //     }
    //   }}
        onMouseLeave={() => hover && setOpen(false)}
      className="inline-block"
    >
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant={variant}
            className={`flex items-center gap-1 ${className} `}
          >
            {icon}
            {label} <ChevronDown size={16} />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="transition-all duration-600 ease-in-out transform opacity-0 scale-95 data-[state=open]:opacity-100 data-[state=open]:scale-100 top-0 mt-0">
          {items.map((item) => (
            <DropdownMenuItem key={item}>{item}</DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
