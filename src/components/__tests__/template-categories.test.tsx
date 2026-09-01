/* eslint-disable import/order */
import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

afterEach(() => cleanup());
import { TemplateCategories } from '../template-categories';
import type { Category } from '@/lib/schemas';

const mockCategories: Category[] = [
  {
    slug: 'frontend-applications',
    name: 'Frontend Applications',
    description: 'Client-side starters',
    details: 'Details for frontend',
    labels: ['Frontend', 'UI'],
  },
  {
    slug: 'backend-applications',
    name: 'Backend Applications',
    description: 'API starters',
    details: 'Details for backend',
    labels: ['Backend'],
  },
];

describe('TemplateCategories', () => {
  it('renders categories names and descriptions', () => {
    render(<TemplateCategories categories={mockCategories} />);
    expect(screen.getByText('Frontend Applications')).toBeDefined();
    expect(screen.getByText('Backend Applications')).toBeDefined();
    expect(screen.getByText('Client-side starters')).toBeDefined();
  });

  it('renders details', () => {
    render(<TemplateCategories categories={mockCategories} />);
    expect(screen.getByText('Details for frontend')).toBeDefined();
  });

  it('renders View Templates links with correct href', () => {
    render(<TemplateCategories categories={mockCategories} />);
    const links = screen.getAllByRole('link', { name: /View Templates/ });
    expect(links).toHaveLength(2);
    expect(links[0].getAttribute('href')).toBe('/templates?category=frontend-applications');
    expect(links[1].getAttribute('href')).toBe('/templates?category=backend-applications');
  });

  it('renders nothing for empty categories', () => {
    const { container } = render(<TemplateCategories categories={[]} />);
    expect(container.textContent).toBe('');
  });
});
