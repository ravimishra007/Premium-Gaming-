const links: Record<string, string> = {
    casino123: 'https://coding-platform-bice.vercel.app',
    betworld: 'https://mediverse-ui.vercel.app/',
  };
  
  export const getTargetUrl = (id: string): string | null => {
    return links[id] ?? null;
  };
  