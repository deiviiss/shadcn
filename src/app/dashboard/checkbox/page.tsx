'use client'

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

export default function CheckboxPage() {
  const [terms, setTerms] = useState(false);

  const handleTermsChange = (value: boolean) => {
    setTerms(value);
    console.log("Terms and conditions accepted:", value);
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="items-top flex space-x-2">
        <Checkbox id="terms1"
          checked={terms}
          onCheckedChange={() => handleTermsChange(!terms)}
        />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms1"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
          <p className="text-sm text-muted-foreground">
            You agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
      <Badge className="w-32" variant={terms ? "success" : "destructive"} >
        {terms ? "Accepted" : "Not accepted"}
      </Badge>
    </div>
  );
}