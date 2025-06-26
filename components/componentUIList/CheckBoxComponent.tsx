"use client"

import { Checkbox } from "@radix-ui/react-checkbox"
import { Label } from "@radix-ui/react-dropdown-menu"


export const CheckboxComponent = ()  => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Checkbox id="terms" />
        <Label>Accept terms and conditions</Label>
      </div>
      <div className="flex items-start gap-3">
        <Checkbox id="terms-2" defaultChecked />
        <div className="grid gap-2">
          <Label>Accept terms and conditions</Label>
          <p className="text-muted-foreground text-sm">
            By clicking this checkbox, you agree to the terms and conditions.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <Checkbox id="toggle" />
        <Label>Enable notifications</Label>
      </div>
    </div>
  )
}
