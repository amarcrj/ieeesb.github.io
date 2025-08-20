// Dynamic component usage tracker
// This tracks which components are used across different pages

export interface PageComponentUsage {
  pageName: string;
  components: string[];
}

// Static analysis of component usage across pages
// In a real implementation, this could be generated during build time
export const pageComponentUsage: PageComponentUsage[] = [
  {
    pageName: 'home',
    components: [
      'Header', 'Footer', 'ImageCarousel', 'AboutSection', 'ImportantDates', 
      'CallForPapers', 'KeynoteSpeakers', 'ProgramSchedule', 'VenueLocation', 
      'Sponsors', 'FeaturedBoard'
    ]
  },
  {
    pageName: 'about',
    components: ['Header', 'Footer']
  },
  {
    pageName: 'events', 
    components: ['Header', 'Footer']
  },
  {
    pageName: 'team',
    components: ['Header', 'Footer']
  },
  {
    pageName: 'alumni',
    components: ['Header', 'Footer']
  },
  {
    pageName: 'contact',
    components: ['Header', 'Footer']
  }
];

/**
 * Get components that are used ONLY on the home page
 */
export function getHomeOnlyComponents(): string[] {
  const homeComponents = pageComponentUsage.find(page => page.pageName === 'home')?.components || [];
  const otherPagesComponents = new Set<string>();
  
  // Collect all components used on other pages
  pageComponentUsage
    .filter(page => page.pageName !== 'home')
    .forEach(page => {
      page.components.forEach(comp => otherPagesComponents.add(comp));
    });
  
  // Return components that are only on home page
  return homeComponents.filter(comp => !otherPagesComponents.has(comp));
}

/**
 * Check if a component is used on pages other than home
 */
export function isUsedElsewhere(componentName: string): boolean {
  return pageComponentUsage
    .filter(page => page.pageName !== 'home')
    .some(page => page.components.includes(componentName));
}

/**
 * Add component usage to a page (for dynamic updates)
 */
export function addComponentToPage(componentName: string, pageName: string): void {
  const page = pageComponentUsage.find(p => p.pageName === pageName);
  if (page && !page.components.includes(componentName)) {
    page.components.push(componentName);
  } else if (!page) {
    pageComponentUsage.push({
      pageName,
      components: [componentName]
    });
  }
}

/**
 * Remove component usage from a page
 */
export function removeComponentFromPage(componentName: string, pageName: string): void {
  const page = pageComponentUsage.find(p => p.pageName === pageName);
  if (page) {
    page.components = page.components.filter(comp => comp !== componentName);
  }
}

/**
 * Get usage summary for a component
 */
export function getComponentUsageSummary(componentName: string): {
  usedInPages: string[];
  isHomeOnly: boolean;
} {
  const usedInPages = pageComponentUsage
    .filter(page => page.components.includes(componentName))
    .map(page => page.pageName);
  
  return {
    usedInPages,
    isHomeOnly: usedInPages.length === 1 && usedInPages[0] === 'home'
  };
}