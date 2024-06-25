'use client'

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([])

  const smallDate = date?.toLocaleDateString('es-ES', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="flex-col sm:flex-wrap sm:flex sm:flex-row gap-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
        className="rounded-md border shadow"
      />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={(date) => date > new Date()}
        className="rounded-md border shadow"
      />
      <Calendar
        mode="multiple"
        selected={multipleDates}
        onSelect={setMultipleDates}
        className="rounded-md border shadow"
      />

      <div>
        <h1 className="text-2xl">
          Información
        </h1>
        <div className="border-b"></div>
        <p>{smallDate}</p>
        <p>{multipleDates?.map((date) => date.toLocaleString()).join(",")}</p>
      </div>
    </div>
  );
}