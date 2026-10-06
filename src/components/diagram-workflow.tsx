interface DiagramWorkflowProps {
  workflow: 'contribution' | 'deployment';
  title?: string;
  className?: string;
}

const steps = {
  contribution: [
    'Fork the repository',
    'Create a template or extension',
    'Add an entry to templates.json',
    'Test locally',
    'Open a pull request',
    'Complete the review process',
    'Merge the contribution',
  ],
  deployment: [
    'Developer pushes code',
    'CI/CD pipeline starts',
    'Install dependencies',
    'Build the application',
    'Deploy to staging',
    'Run integration tests',
    'Decide whether the tests pass',
  ],
} as const;

export function DiagramWorkflow({ workflow, title, className = '' }: DiagramWorkflowProps) {
  const isDeployment = workflow === 'deployment';
  const workflowSteps = steps[workflow];

  return (
    <section aria-label={title ?? 'Workflow'} className={`overflow-hidden rounded-lg border bg-card ${className}`}>
      {title && (
        <div className="border-b bg-muted/50 px-4 py-2">
          <h3 className="font-medium">{title}</h3>
        </div>
      )}
      <div className="p-4 sm:p-6">
        <ol aria-label={`${title ?? 'Workflow'} steps`} className="mx-auto max-w-xl space-y-2">
          {workflowSteps.map((step, index) => (
            <li key={step}>
              <div className="flex items-center gap-3 rounded-md border bg-background px-4 py-3">
                <span
                  aria-hidden="true"
                  className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground"
                >
                  {index + 1}
                </span>
                <span className="font-medium">{step}</span>
              </div>
              {isDeployment && index === 2 && (
                <>
                  <div aria-hidden="true" className="py-1 text-center text-muted-foreground">
                    ↓
                  </div>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="rounded-md border bg-background px-4 py-3 text-center font-medium">Run linting</div>
                    <div className="rounded-md border bg-background px-4 py-3 text-center font-medium">Run tests</div>
                  </div>
                  <div aria-hidden="true" className="py-1 text-center text-muted-foreground">
                    ↓
                  </div>
                </>
              )}
              {index < workflowSteps.length - 1 && (
                <div aria-hidden="true" className="py-1 text-center text-muted-foreground">
                  ↓
                </div>
              )}
            </li>
          ))}
        </ol>
        {isDeployment && (
          <div className="mx-auto mt-4 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-md border border-primary/40 bg-primary/5 px-4 py-3">
              <p className="font-semibold">Yes: deploy to production</p>
            </div>
            <div className="rounded-md border bg-muted/50 px-4 py-3">
              <p className="font-semibold">No: notify the team and fix issues</p>
              <p className="mt-1 text-sm text-muted-foreground">Push the fixes to run the pipeline again.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
