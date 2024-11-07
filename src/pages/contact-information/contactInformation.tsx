import { useEffect, useState } from "react";
import { payments } from "@/data/payments.data";
import { DataTable } from "./data-table";
import { columns } from "./columns";

const ContactInformation = (): JSX.Element => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    return payments;
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchData();
        setData(response);
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <h1 className="text-white">Contac-Information</h1>
      <div className="text-white">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default ContactInformation;
