/* eslint-disable import/order */
import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

afterEach(() => cleanup());
import { TemplateCard } from '../template-card';
import type { Template } from '@/lib/schemas';

const mockTemplate: Template = {
  name: 'React Vite Starter',
  description: 'A fast React boilerplate with Vite.',
  url: 'https://github.com/Create-Node-App/cna-templates/tree/main/templates/react-vite-starter',
  type: 'react',
  category: 'frontend-applications',
  labels: ['React', 'Vite', 'TypeScript', 'ESLint'],
  slug: 'react-vite-starter',
};

describe('TemplateCard', () => {
  it('renders template name and description', () => {
    render(<TemplateCard template={mockTemplate} />);
    expect(screen.getByText('React Vite Starter')).toBeDefined();
    expect(screen.getByText('A fast React boilerplate with Vite.')).toBeDefined();
  });

  it('renders category and type', () => {
    render(<TemplateCard template={mockTemplate} />);
    expect(screen.getByText('frontend-applications')).toBeDefined();
    expect(screen.getByText('Type: react')).toBeDefined();
  });

  it('renders labels badges (first 3 + overflow)', () => {
    render(<TemplateCard template={mockTemplate} />);
    expect(screen.getByText('React')).toBeDefined();
    expect(screen.getByText('Vite')).toBeDefined();
    expect(screen.getByText('TypeScript')).toBeDefined();
    expect(screen.getByText('+1 more')).toBeDefined();
  });

  it('renders exactly 3 badges when labels >3', () => {
    const manyLabels = { ...mockTemplate, labels: ['A', 'B', 'C', 'D', 'E'] };
    render(<TemplateCard template={manyLabels} />);
    expect(screen.getByText('+2 more')).toBeDefined();
  });

  it('renders no overflow badge when <=3 labels', () => {
    const fewLabels = { ...mockTemplate, labels: ['A', 'B'] };
    render(<TemplateCard template={fewLabels} />);
    expect(screen.queryByText(/more/)).toBeNull();
  });
});
