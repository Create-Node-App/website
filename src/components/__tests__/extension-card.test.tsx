/* eslint-disable import/order */
import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

afterEach(() => cleanup());
import { ExtensionCard } from '../extension-card';
import type { Extension } from '@/lib/schemas';

const mockExtension: Extension = {
  name: 'Tailwind CSS',
  description: 'Add Tailwind CSS to your project.',
  url: 'https://github.com/Create-Node-App/cna-templates/tree/main/extensions/react-tailwindcss',
  type: 'react',
  category: 'UI',
  labels: ['Tailwind', 'CSS', 'Styling', 'Utility'],
  slug: 'tailwind-css',
};

const mockExtensionArrayType: Extension = {
  ...mockExtension,
  type: ['react', 'nextjs'],
  slug: 'tailwind-array',
};

describe('ExtensionCard', () => {
  it('renders extension name and description', () => {
    render(<ExtensionCard extension={mockExtension} />);
    expect(screen.getByText('Tailwind CSS')).toBeDefined();
    expect(screen.getByText('Add Tailwind CSS to your project.')).toBeDefined();
  });

  it('renders category', () => {
    render(<ExtensionCard extension={mockExtension} />);
    expect(screen.getByText('UI')).toBeDefined();
  });

  it('renders labels badges with overflow', () => {
    render(<ExtensionCard extension={mockExtension} />);
    expect(screen.getByText('Tailwind')).toBeDefined();
    expect(screen.getByText('+1 more')).toBeDefined();
  });

  it('renders type string', () => {
    render(<ExtensionCard extension={mockExtension} />);
    expect(screen.getAllByText('react').length).toBeGreaterThan(0);
  });

  it('renders array type correctly', () => {
    render(<ExtensionCard extension={mockExtensionArrayType} />);
    expect(screen.getAllByText('react').length).toBeGreaterThan(0);
    expect(screen.getByText('nextjs')).toBeDefined();
  });

  it('renders compatible types in footer', () => {
    render(<ExtensionCard extension={mockExtension} />);
    expect(screen.getByText('Compatible with:')).toBeDefined();
  });

  it('links to extension detail page', () => {
    render(<ExtensionCard extension={mockExtension} />);
    const link = screen.getByRole('link');
    expect(link.getAttribute('href')).toBe('/extensions/tailwind-css');
  });

  it('links with templateSlug context', () => {
    render(<ExtensionCard extension={mockExtension} templateSlug="my-template" />);
    const link = screen.getByRole('link');
    expect(link.getAttribute('href')).toBe('/templates/my-template/extensions/tailwind-css');
  });
});
