// CLSX imports
import { ClassValue, clsx } from "clsx";

// Tailwind imports
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using clsx and then merges them intelligently using twMerge.
 * This function is useful when you need to dynamically generate class names with conditional
 * logic and then ensure that the resulting Tailwind classes do not conflict.
 *
 * @param {...ClassValue[]} inputs - An array of class values that can be strings, objects, or arrays.
 * @returns {string} A single, merged string of class names that resolves any potential conflicts
 * between Tailwind utility classes.
 */
export function cn(...inputs: ClassValue[]): string {
  // Use clsx to combine class names based on conditions and inputs.
  const combinedClasses = clsx(inputs);
  // Use twMerge to intelligently merge Tailwind CSS classes and resolve conflicts.
  return twMerge(combinedClasses);
}
