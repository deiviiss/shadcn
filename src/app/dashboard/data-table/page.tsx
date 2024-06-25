import { payments } from "@/data/payments.data";
import { columns } from "./columns";
import { DataTable } from "./data-table";

async function fetchPayments() {
  return payments
}


export default async function HomePage() {
  const data = await fetchPayments();

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}