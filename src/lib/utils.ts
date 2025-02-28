import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { DateField } from "@prismicio/client";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateStr: DateField): string {
  if (!dateStr) return "";
  const date = new Date(dateStr);

  // Options for formatting
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // Format the date
  return new Intl.DateTimeFormat("en-US", options).format(date);
}
