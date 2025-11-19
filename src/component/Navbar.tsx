import { ChevronDown, Search, Heart, User, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  return (
    <div className="w-full bg-white border-b">
      <div className="w-full flex items-center justify-between px-6 py-2">
        
        <div className="flex items-center">
          <img src="/logo.png" alt="CarDekho" className="h-8 w-auto" />
        </div>

        <div className="flex items-center gap-3 w-full max-w-4xl mx-6">

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="rounded-full flex items-center gap-1 px-4">
                All <ChevronDown size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>All Cars</DropdownMenuItem>
              <DropdownMenuItem>New Cars</DropdownMenuItem>
              <DropdownMenuItem>Used Cars</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Search Bar */}
          <div className="flex items-center flex-1 border rounded-full bg-gray-50 px-4 py-2">
            <Search className="text-gray-400" size={18} />
            <Input
              placeholder="Search or Ask a Question"
              className="ml-2 bg-transparent border-none focus:outline-none focus:ring-0"
            />
          </div>
        </div>

        {/* RIGHT ITEMS */}
        <div className="flex items-center gap-6 text-sm text-gray-800">

          {/* Language */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1">
                English <ChevronDown size={14} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Hindi</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Heart */}
          <Button variant="ghost">
            <Heart size={18} />
          </Button>

          {/* Login */}
          <Button variant="ghost" className="flex items-center gap-1">
            <User size={18} /> Login / Register
          </Button>

          {/* Location */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1">
                <MapPin size={18} /> Bangalore <ChevronDown size={14} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Bangalore</DropdownMenuItem>
              <DropdownMenuItem>Mumbai</DropdownMenuItem>
              <DropdownMenuItem>Delhi</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* ---------------- BOTTOM NAV ---------------- */}
      <div className="w-full border-t bg-white">
        <div className="w-full flex justify-center gap-10 px-6 py-2 text-sm font-medium text-gray-900">

          {["NEW CARS", "USED CARS", "NEWS & REVIEWS", "VIDEOS"].map((item) => (
            <Button
              key={item}
              variant="ghost"
              className="flex items-center gap-1 hover:text-orange-600"
            >
              {item} <ChevronDown size={14} />
            </Button>
          ))}

        </div>
      </div>
    </div>
  );
}
