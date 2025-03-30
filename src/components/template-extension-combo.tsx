import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { Extension, Template } from "@/lib/schemas"

interface TemplateExtensionComboProps {
  template: Template
  extension: Extension
}

export function TemplateExtensionCombo({ template, extension }: TemplateExtensionComboProps) {
  return (
    <div className="relative">
      <Card className="bg-background/50 backdrop-blur-sm border-primary/10 overflow-hidden">
        <CardContent className="p-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-md bg-gradient-to-br from-primary/20 to-indigo-500/20 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">T</span>
                </div>
                <div>
                  <h3 className="text-sm font-medium">{template.name}</h3>
                  <p className="text-xs text-muted-foreground">{template.type}</p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-md bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                  <span className="text-sm font-semibold text-indigo-500">E</span>
                </div>
                <div>
                  <h3 className="text-sm font-medium">{extension.name}</h3>
                  <p className="text-xs text-muted-foreground">{extension.category}</p>
                </div>
              </div>
            </div>

            <div className="bg-muted rounded-md p-3 font-mono text-xs overflow-x-auto">
              <p className="text-green-500">$ npx create-awesome-node-app \</p>
              <p className="pl-4">--template {template.slug} \</p>
              <p className="pl-4">--addons {extension.slug}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-primary/20 via-indigo-500/20 to-purple-500/20 -z-10 animate-pulse"></div>
    </div>
  )
}

