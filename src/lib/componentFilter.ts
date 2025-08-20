// Utility to track and filter components based on page usage
export interface ComponentUsage {
  name: string;
  component: React.ComponentType;
  usedInPages: string[];
}

// Registry of all main components and their usage
export const componentRegistry: ComponentUsage[] = [
  {
    name: 'FeaturedBoard',
    component: () => null, // Will be replaced with actual import
    usedInPages: ['home']
  },
  {
    name: 'ImageCarousel', 
    component: () => null,
    usedInPages: ['home']
  },
  {
    name: 'AboutSection',
    component: () => null,
    usedInPages: ['home']
  },
  {
    name: 'KeynoteSpeakers',
    component: () => null,
    usedInPages: ['home']
  },
  {
    name: 'ImportantDates',
    component: () => null,
    usedInPages: ['home']
  },
  {
    name: 'VenueLocation',
    component: () => null,
    usedInPages: ['home']
  },
  {
    name: 'CallForPapers',
    component: () => null,
    usedInPages: ['home']
  },
  {
    name: 'Sponsors',
    component: () => null,
    usedInPages: ['home']
  },
  {
    name: 'ProgramSchedule',
    component: () => null,
    usedInPages: ['home']
  }
];

/**
 * Filter components that should be shown on home page
 * Excludes components that are used on other pages
 */
export function getHomePageComponents(): ComponentUsage[] {
  return componentRegistry.filter(comp => {
    // Only show components that are ONLY used on home page
    return comp.usedInPages.length === 1 && comp.usedInPages.includes('home');
  });
}

/**
 * Check if a component is used on pages other than home
 */
export function isComponentUsedElsewhere(componentName: string): boolean {
  const component = componentRegistry.find(comp => comp.name === componentName);
  if (!component) return false;
  
  return component.usedInPages.some(page => page !== 'home');
}

/**
 * Update component usage when adding to a new page
 */
export function updateComponentUsage(componentName: string, pageName: string): void {
  const component = componentRegistry.find(comp => comp.name === componentName);
  if (component && !component.usedInPages.includes(pageName)) {
    component.usedInPages.push(pageName);
  }
}