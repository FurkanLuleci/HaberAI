import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { PricingPlans } from "@/components/PricingPlans"

export function PricingModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="font-medium">
          Ücretlendirmeler
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[90vw] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Ücretlendirmeler</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <PricingPlans />
        </div>
      </DialogContent>
    </Dialog>
  )
} 