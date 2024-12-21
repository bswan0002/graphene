import { useState } from "react";

/**
 * Run a function once on render without managing useEffect or its dependencies
 */
export function useOnRender(callback: () => void) {
  const [isInitialRender, setIsInitialRender] = useState(true);
  if (isInitialRender) {
    setIsInitialRender(false);
    callback();
  }
}
