import { User, columns } from "@/app/payment/columns";
import { DataTable } from "@/app/payment/data-table";

async function getUsers(): Promise<User[]> {
  const res = await fetch(
    "https://66401958a7500fcf1a9d1220.mockapi.io/api/users"
  );
  const data = await res.json();
  return data;
}

export default async function TablePage() {
  const data = await getUsers();

  return (
    <section className="py-24">
      <div className="container">
        <h1 className="mb-6 text-3xl font-bold">All Users</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
}
