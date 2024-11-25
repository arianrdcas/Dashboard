import { Calendar } from "@/components/ui/calendar";
import { useState,FC } from "react";


const Calendario: FC = () => {

  const [date, setDate] = useState<Date | undefined>(new Date());
  const [multipleDates, setMultipleDate] = useState<Date[] | undefined>([]);

  const smallDate = date?.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <>
      <h1 className="text-3xl text-black mb-8">Calendario</h1>
      <div className="flex-col text-black sm:flex-wrap sm:flex sm:flex-row gap-4">
        <Calendar
          mode="multiple"
          selected={multipleDates}
          onSelect={setMultipleDate}
          className="rounded-md border shadow"
        />

        <div>
          <h1 className="text-3xl">Información</h1>
          <div className="border-b"></div>
          <p>{smallDate}</p>
          <p>
            {multipleDates?.map((date) => date.toLocaleDateString()).join(", ")}
          </p>
        </div>
      </div>
    </>
  );

};
export default Calendario;
