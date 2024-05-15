import { useState, useEffect } from "react";

// Define the shape of the window size data
interface WindowSize {
  width: number;
  height: number;
}

/**
 * A custom React hook to get the current window size and update it upon window resizing.
 * This hook ensures that components using it can react to changes in the window's dimensions,
 * which is particularly useful for responsive designs.
 *
 * @returns {WindowSize} The current window width and height.
 */
export const useWindowSize = (): WindowSize => {
  // Initialize state with width and height using the window object if available
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    // Function to update state to the current window width and height
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set up event listener for window resize
    window.addEventListener("resize", handleResize);
    // Call handleResize immediately to set the initial size
    handleResize();

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array ensures this effect runs only on mount and unmount

  return windowSize;
};
