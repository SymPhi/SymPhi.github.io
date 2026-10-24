export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  links?: { label: string; href: string }[];
}

// Add entries here, newest first. The page groups them by year.
// Example:
// {
//   title: 'Paper title',
//   authors: 'A. Author, B. Author',
//   venue: 'NeurIPS',
//   year: 2026,
//   links: [
//     { label: 'Paper', href: 'https://arxiv.org/abs/...' },
//     { label: 'Code', href: 'https://github.com/SymPhi/...' },
//   ],
// },
export const publications: Publication[] = [];
