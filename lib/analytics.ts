
export type AnalyticsEvent = 
  | { type: 'PREORDER_CLICK'; source: string }
  | { type: 'INQUIRY_SUBMIT'; category: string }
  | { type: 'AI_ADVISOR_ENGAGE'; messageCount: number }
  | { type: 'PAGE_VIEW'; path: string }
  | { type: 'THEME_TOGGLE'; theme: 'light' | 'dark' };

class Analytics {
  private static instance: Analytics;
  private isDevelopment = true; // Typically process.env.NODE_ENV === 'development'

  private constructor() {}

  public static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics();
    }
    return Analytics.instance;
  }

  public track(event: AnalyticsEvent) {
    if (this.isDevelopment) {
      console.log(`[Analytics] Track Event:`, event);
    }
    
    // Integration point for Google Analytics or PostHog
    // window.gtag?.('event', event.type, event);
    // window.posthog?.capture(event.type, event);
  }
}

export const analytics = Analytics.getInstance();
