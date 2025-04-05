import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PricingTable() {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {/* Starter Plan */}
      <div className="relative rounded-xl border bg-background p-6 shadow-sm transition-all duration-300 hover:shadow-md">
        <div className="mb-4">
          <h3 className="text-lg font-medium">Starter</h3>
          <div className="mt-2 flex items-baseline text-gray-900">
            <span className="text-3xl font-bold tracking-tight">$49</span>
            <span className="ml-1 text-sm text-muted-foreground">/month</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-6">
          Perfect for small businesses just getting started with AI support.
        </p>
        <ul className="space-y-3 text-sm mb-6">
          <li className="flex items-center">
            <Check className="mr-2 h-4 w-4 text-primary" />
            <span>Up to 1,000 conversations/month</span>
          </li>
          <li className="flex items-center">
            <Check className="mr-2 h-4 w-4 text-primary" />
            <span>Basic document processing</span>
          </li>
          <li className="flex items-center">
            <Check className="mr-2 h-4 w-4 text-primary" />
            <span>Email support</span>
          </li>
          <li className="flex items-center">
            <Check className="mr-2 h-4 w-4 text-primary" />
            <span>1 team member</span>
          </li>
        </ul>
        <Button className="w-full">Get Started</Button>
      </div>

      {/* Professional Plan */}
      <div className="relative rounded-xl border bg-gradient-to-b from-background to-primary/5 p-6 shadow-md">
        <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
          Most Popular
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-medium">Professional</h3>
          <div className="mt-2 flex items-baseline text-gray-900">
            <span className="text-3xl font-bold tracking-tight">$149</span>
            <span className="ml-1 text-sm text-muted-foreground">/month</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-6">Ideal for growing businesses with moderate support needs.</p>
        <ul className="space-y-3 text-sm mb-6">
          <li className="flex items-center">
            <Check className="mr-2 h-4 w-4 text-primary" />
            <span>Up to 5,000 conversations/month</span>
          </li>
          <li className="flex items-center">
            <Check className="mr-2 h-4 w-4 text-primary" />
            <span>Advanced document processing</span>
          </li>
          <li className="flex items-center">
            <Check className="mr-2 h-4 w-4 text-primary" />
            <span>Video call capabilities</span>
          </li>
          <li className="flex items-center">
            <Check className="mr-2 h-4 w-4 text-primary" />
            <span>Priority email & chat support</span>
          </li>
          <li className="flex items-center">
            <Check className="mr-2 h-4 w-4 text-primary" />
            <span>5 team members</span>
          </li>
          <li className="flex items-center">
            <Check className="mr-2 h-4 w-4 text-primary" />
            <span>Basic analytics</span>
          </li>
        </ul>
        <Button className="w-full bg-primary hover:bg-primary/90">Get Started</Button>
      </div>

      {/* Enterprise Plan */}
      <div className="relative rounded-xl border bg-background p-6 shadow-sm transition-all duration-300 hover:shadow-md">
        <div className="mb-4">
          <h3 className="text-lg font-medium">Enterprise</h3>
          <div className="mt-2 flex items-baseline text-gray-900">
            <span className="text-3xl font-bold tracking-tight">$399</span>
            <span className="ml-1 text-sm text-muted-foreground">/month</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-6">For large organizations with complex support requirements.</p>
        <ul className="space-y-3 text-sm mb-6">
          <li className="flex items-center">
            <Check className="mr-2 h-4 w-4 text-primary" />
            <span>Unlimited conversations</span>
          </li>
          <li className="flex items-center">
            <Check className="mr-2 h-4 w-4 text-primary" />
            <span>Enterprise-grade document processing</span>
          </li>
          <li className="flex items-center">
            <Check className="mr-2 h-4 w-4 text-primary" />
            <span>Video & voice capabilities</span>
          </li>
          <li className="flex items-center">
            <Check className="mr-2 h-4 w-4 text-primary" />
            <span>24/7 dedicated support</span>
          </li>
          <li className="flex items-center">
            <Check className="mr-2 h-4 w-4 text-primary" />
            <span>Unlimited team members</span>
          </li>
          <li className="flex items-center">
            <Check className="mr-2 h-4 w-4 text-primary" />
            <span>Advanced analytics & reporting</span>
          </li>
          <li className="flex items-center">
            <Check className="mr-2 h-4 w-4 text-primary" />
            <span>Custom integrations</span>
          </li>
        </ul>
        <Button className="w-full" variant="outline">
          Contact Sales
        </Button>
      </div>
    </div>
  )
}

