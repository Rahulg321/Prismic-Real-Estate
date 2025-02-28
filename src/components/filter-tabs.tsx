"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FilterTabs() {
  return (
    <div className="w-full max-w-5xl mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Properties Select */}
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="All Properties" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Property Types</SelectLabel>
              <SelectItem value="apartments">Apartments</SelectItem>
              <SelectItem value="townhouses">Townhouses</SelectItem>
              <SelectItem value="villas">Villas</SelectItem>
              <SelectItem value="studio">Studio Apartments</SelectItem>
              <SelectItem value="penthouses">Penthouses</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* Configurations Select */}
        <Select>
          <SelectTrigger className="w-full border-purple-500 text-purple-700 data-[placeholder]:text-purple-700">
            <SelectValue placeholder="All Configurations" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>BHK Options</SelectLabel>
              <SelectItem value="1bhk">1 BHK</SelectItem>
              <SelectItem value="2bhk">2 BHK</SelectItem>
              <SelectItem value="3bhk">3 BHK</SelectItem>
              <SelectItem value="4bhk">4 BHK</SelectItem>
              <SelectItem value="5bhk">5 BHK</SelectItem>
              <SelectItem value="5bhk-plus">5 BHK+</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* Localities Select */}
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="All Localities" />
          </SelectTrigger>
          <SelectContent className="max-h-[300px]">
            <SelectGroup>
              <SelectLabel>Dubai Areas</SelectLabel>
              <SelectItem value="jvc">Jumeirah Village Circle</SelectItem>
              <SelectItem value="jvt">Jumeirah Village Triangle</SelectItem>
              <SelectItem value="marina">Dubai Marina</SelectItem>
              <SelectItem value="nas">Nad Al Sheba</SelectItem>
              <SelectItem value="dubai-south">Dubai South</SelectItem>
              <SelectItem value="bluwaters">Bluwaters Island</SelectItem>
              <SelectItem value="jlt">Jumeirah Lake Towers</SelectItem>
              <SelectItem value="emirates-hills">Emirates Hills</SelectItem>
              <SelectItem value="damac-hills">Damac Hills</SelectItem>
              <SelectItem value="motor-city">Motor City</SelectItem>
              <SelectItem value="damac-hills-2">Damac Hills 2</SelectItem>
              <SelectItem value="business-bay">Business Bay</SelectItem>
              <SelectItem value="valley">The Valley By Emaar</SelectItem>
              <SelectItem value="downtown">Downtown Dubai</SelectItem>
              <SelectItem value="jumeirah">Jumeirah</SelectItem>
              <SelectItem value="dubai-hills">Dubai Hills Estate</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
