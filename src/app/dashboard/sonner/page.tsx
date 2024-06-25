'use client'

import { Button } from "@/components/ui/button";
import { toast } from "sonner"

export default function HomePage() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            duration: 2000,
            position: "top-right",
            description: new Date().toLocaleDateString('es-MX', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast
      </Button>

      <Button
        variant="success"
        onClick={() =>
          toast.success("Event has been created", {
            duration: 2000,
            position: "top-right",
            description: new Date().toLocaleDateString('es-MX', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Success Show Toast
      </Button>

      <Button
        variant="secondary"
        onClick={() =>
          toast.info("Event has been created", {
            duration: 2000,
            position: "top-right",
            description: new Date().toLocaleDateString('es-MX', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Info Show Toast
      </Button>
    </div>
  );
}