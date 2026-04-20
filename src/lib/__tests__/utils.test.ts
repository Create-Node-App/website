import { describe, it, expect } from 'vitest';
import { cn, validateTemplate, validateExtension, isCompatible } from '../utils';

describe('cn', () => {
  it('should merge class names', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  it('should handle conditional classes', () => {
    const condition = true;
    expect(cn(condition && 'active')).toBe('active');
  });
});

describe('validateTemplate', () => {
  it('should return null for invalid data', () => {
    const invalidData = { name: 'Test' };
    expect(validateTemplate(invalidData)).toBeNull();
  });

  it('should return data for valid template', () => {
    const validData = {
      name: 'React Vite Starter',
      description: 'A fast React boilerplate.',
      url: 'https://github.com/Create-Node-App/cna-templates/tree/main/templates/react-vite-starter',
      type: 'react',
      category: 'frontend-applications',
      labels: ['React', 'Vite'],
      slug: 'react-vite-starter',
    };
    const result = validateTemplate(validData);
    expect(result).not.toBeNull();
    expect(result?.name).toBe('React Vite Starter');
  });
});

describe('validateExtension', () => {
  it('should return null for invalid data', () => {
    const invalidData = { name: 'Test' };
    expect(validateExtension(invalidData)).toBeNull();
  });

  it('should return data for valid extension', () => {
    const validData = {
      name: 'Tailwind CSS',
      description: 'Add Tailwind CSS.',
      url: 'https://github.com/Create-Node-App/cna-templates/tree/main/extensions/react-tailwindcss',
      type: 'react',
      category: 'UI',
      labels: ['Tailwind'],
      slug: 'tailwind-css',
    };
    const result = validateExtension(validData);
    expect(result).not.toBeNull();
    expect(result?.name).toBe('Tailwind CSS');
  });
});

describe('isCompatible', () => {
  it('should return true when extension type matches template type', () => {
    const template = { type: 'react' } as any;
    const extension = { type: 'react' } as any;
    expect(isCompatible(template, extension)).toBe(true);
  });

  it('should return true when extension type array includes template type', () => {
    const template = { type: 'react' } as any;
    const extension = { type: ['react', 'nextjs'] } as any;
    expect(isCompatible(template, extension)).toBe(true);
  });

  it('should return false when extension type does not match', () => {
    const template = { type: 'react' } as any;
    const extension = { type: 'nextjs' } as any;
    expect(isCompatible(template, extension)).toBe(false);
  });
});
