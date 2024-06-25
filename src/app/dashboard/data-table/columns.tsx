"use client"

import { Badge } from "@/components/ui/badge"
import { Payment } from "@/data/payments.data"
import {
  ColumnDef,
  FilterFn,
  Row,
  SortDirection
} from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from "sonner"
import { MoreHorizontal } from "lucide-react"
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

type IStatus = 'pending' | 'processing' | 'success' | 'failed';
type IColorVariant = 'info' | 'secondary' | 'success' | 'outline' | 'destructive' | 'default';

const myCustomFilter: FilterFn<Payment> = (
  row: Row<Payment>,
  columnId: string,
  filterValue: string,
  addMeta: (meta: any) => void
) => {
  const filterValueLower = filterValue.toLowerCase()

  const filterParts = filterValueLower.split(' ')
  const rowValuesInput = `${row.original.clientName} ${row.original.email} ${row.original.status}`.toLocaleLowerCase()

  // Check if all parts of the filter are included in the row values
  return filterParts.every(part => rowValuesInput.includes(part))
}

const SortedIcon = ({ isSorted }: { isSorted: false | SortDirection }) => {
  if (isSorted === 'asc') {
    return <MdKeyboardArrowDown className="h-4 w-4 ml-1" />
  }
  if (isSorted === 'desc') {
    return <MdKeyboardArrowUp className="h-4 w-4 ml-1" />
  }
  return null
}

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "clientName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Cliente
          <SortedIcon isSorted={column.getIsSorted()} />
        </Button>
      )
    },
  }, // client
  {
    accessorKey: "status",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Status
        <SortedIcon isSorted={column.getIsSorted()} />
      </Button>
    ),
    cell: ({ row }) => {
      const status: IStatus = row.getValue("status")

      const statusColors: Record<IStatus, IColorVariant> = {
        pending: 'info',
        processing: 'outline',
        success: 'success',
        failed: 'destructive'
      }

      const variantColor: IColorVariant = statusColors[status] ?? 'default';

      return (
        <Badge
          variant={variantColor}
          capitalize={true}
          className="max-w-24"
        >
          {`${status}`}
        </Badge>
      )
    }
  }, // status
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="mx-auto"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Amount
        <SortedIcon isSorted={column.getIsSorted()} />
      </Button>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN",
      }).format(amount)

      return <div className="text-center font-medium">{formatted}</div>
    },
  }, // amount
  {
    accessorKey: "email",
    filterFn: myCustomFilter,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <SortedIcon isSorted={column.getIsSorted()} />
        </Button>
      )
    },
  }, // email
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(payment.clientName)

                toast.success("Payment ID copied to clipboard")
              }}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
    enableSorting: false,
    enableHiding: false,
  }, // actions
]
