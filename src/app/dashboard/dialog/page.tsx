'use client'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

export default function DialogPage() {
  const [urlShare, setUrlShare] = useState<string>("https://ui.shadcn.com/docs/installation");

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Compartir</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Compartit link</DialogTitle>
            <DialogDescription>
              Cualquiera que tenga este enlace podrá verlo.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                id="link"
                defaultValue={urlShare}
                // readOnly // Uncomment this line to make the input read-only
                onChange={(e) => setUrlShare(e.target.value)}
              />
            </div>
            <Button
              type="submit"
              size="sm"
              className="px-3"
              onClick={() => navigator.clipboard.writeText(urlShare)}
            >
              <span className="sr-only">Copiar</span>
              <IoCopyOutline className="h-4 w-4" />
            </Button>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Cerrar
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}