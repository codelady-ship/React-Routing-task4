import { useEffect } from 'react';

// Sets document.title for the current page.
export default function useTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | RouteShop` : 'RouteShop | React Router demo';
  }, [title]);
}
