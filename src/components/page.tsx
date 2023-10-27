import { useEffect, useState } from "react";
import { User, columns } from './columns'
import { DataTable } from '@/shadcn/components/data-table'

async function getUsers(): Promise<User[]> {
  const res = await fetch(
    'https://64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/users'
  )
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json()
  return data
}

export default function TableExample() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const data = async () => {
      const result = await getUsers();
      setUsers(result);
    };
    data();
  }, []);
  return <DataTable columns={columns} data={users} />;
}

 
 