'use client'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { useState } from "react";

export default function DialogPage() {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <div className="grid grid-cols-2 gap-4">
      <AlertDialog
        //  onOpenChange={(open) => console.log({ open })}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      >
        <AlertDialogTrigger asChild>
          <Button variant="outline">mostrar diálogo</Button>
        </AlertDialogTrigger>

        <Button onClick={() => setDialogOpen(true)}>mostrar diálogo manual</Button>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Estás absolutamente seguro?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción no se puede deshacer. Esto eliminará permanentemente tu
              cuenta y eliminar sus datos de nuestros servidores.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => console.log('cancelar')}>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={() => console.log('continuar')}>Continuar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}