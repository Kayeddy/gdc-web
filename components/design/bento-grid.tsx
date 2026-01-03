// Utils imports
import { cn } from "@/utils/cn";

/**
 * A container component that sets up a responsive grid layout. It uses the `cn` utility function
 * to combine predefined and custom class names for styling. This grid is typically used to organize
 * child components (like BentoGridItems) in a structured and visually appealing manner.
 *
 * @param {object} props - Component props.
 * @param {string} [props.className] - Optional custom CSS class to apply to the grid container for additional styling.
 * @param {React.ReactNode} [props.children] - Child components to be rendered within the grid layout.
 * @returns {React.ReactElement} A div element styled as a grid containing child elements.
 */
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

/**
 * Represents a single grid item within a BentoGrid. This component is flexible, allowing for
 * the inclusion of a header, icon, title, and description. It also responds to hover interactions
 * by applying a shadow effect, enhancing the user interface experience.
 *
 * @param {object} props - Component props.
 * @param {string} [props.className] - Optional custom CSS class to apply for additional styling.
 * @param {string | React.ReactNode} [props.title] - The title of the grid item, which can be a string or any React node.
 * @param {string | React.ReactNode} [props.description] - Optional description for the grid item, providing more detail.
 * @param {React.ReactNode} [props.header] - Optional header content, which can be used to place more prominent information or images.
 * @param {React.ReactNode} [props.icon] - An optional icon to appear alongside the title and description.
 * @returns {React.ReactElement} A styled div element representing the grid item with optional interactive elements.
 */
export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:bg-opacity-70 bg-white dark:border-white/[0.2] border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
