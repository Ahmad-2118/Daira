import React, { useEffect } from 'react';

interface MobileViewportProps {
  children?: React.ReactNode;
}

export default function MobileViewport({ children }: MobileViewportProps) {
  useEffect(() => {
    // Set viewport meta tag for proper mobile scaling
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover';
      document.head.appendChild(meta);
    } else {
      viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover');
    }

    // Add mobile-specific meta tags
    const addMetaTag = (name: string, content: string) => {
      if (!document.querySelector(`meta[name="${name}"]`)) {
        const meta = document.createElement('meta');
        meta.name = name;
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    // Mobile optimizations
    addMetaTag('mobile-web-app-capable', 'yes');
    addMetaTag('apple-mobile-web-app-capable', 'yes');
    addMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');
    addMetaTag('apple-mobile-web-app-title', 'Daira');
    addMetaTag('format-detection', 'telephone=no');

    // Theme color for mobile browsers
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (!themeColorMeta) {
      const meta = document.createElement('meta');
      meta.name = 'theme-color';
      meta.content = '#141310';
      document.head.appendChild(meta);
    }

    // Prevent zoom on input focus (iOS)
    const preventZoom = () => {
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover');
      }
    };

    // Add event listeners for input focus
    document.addEventListener('focusin', (e) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        preventZoom();
      }
    });

    // Cleanup function
    return () => {
      document.removeEventListener('focusin', preventZoom);
    };
  }, []);

  return <>{children}</>;
} 