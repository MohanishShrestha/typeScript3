import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Heart, MapPin, Search, User } from "lucide-react";

export default function Test() {
  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      {/* FOR TOP NAV KO */}
      <div className="w-full flex items-center justify-between px-12 py-1 border-b pt-3 pb-3">
        {/* Logo YETA */}
        <div className="flex items-center pr-4">
            <img
              src="/cardekho-logo-hd.png"
              alt="CarDekho"
              className="h-10 w-auto object-contain min-w-[100px]" 
            />
          </div>

        {/* Category + Search yeta bata suru */}
        <div className="flex items-center gap-3 w-full max-w-3xl mx-6">
          {/* Category Button dropdown ko lagi */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="rounded-full flex items-center gap-1 px-4 py-2 h-10"
              >
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
          <div className="flex items-center flex-1 border rounded-full bg-white px-4 h-10">
            <Search className="text-gray-500" size={18} />
            <Input
              placeholder="Search or Ask a Question"
              className="ml-2 border-none shadow-none focus-visible:ring-0 bg-transparent"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-800">
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

          <Button variant="ghost" size="icon">
            <Heart size={18} />
          </Button>

          <Button variant="ghost" className="flex items-center gap-1">
            <User size={18} /> Login / Register
          </Button>
        </div>
      </div>

      {/* BOTTOM NAV */}
      <div className="w-full bg-white">
        <div className="w-full flex  gap-8 px-6 py-3 text-sm font-medium text-gray-900 border-b">
          {["NEW CARS", "USED CARS", "NEWS & REVIEWS", "VIDEOS"].map((item) => (
            <Button
              key={item}
              variant="ghost"
              className="flex items-center gap-1 hover:text-orange-600"
            >
              {item} <ChevronDown size={14} />
            </Button>
          ))}

          <div className="text-gray-600 flex-1 flex justify-end">
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
      </div>
    </div>
  );
}
