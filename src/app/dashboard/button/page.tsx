'use client'

import { Button } from "@/components/ui/button";
import { IoChevronForward, IoMailOpenOutline, IoReloadCircleOutline } from "react-icons/io5";

export default function ButtonPage() {
  return (
    <div className="grid grid-cols-4 gap-2">
      <Button>default</Button>
      <Button variant={'destructive'}>desctructive</Button>
      <Button variant={'outline'}>outline</Button>
      <Button variant={'secondary'}>secondary</Button>
      <Button variant={'ghost'}>ghost</Button>
      <Button variant={'link'}>link</Button>
      <Button disabled>disabled</Button>
      <Button variant={'success'}>success</Button>
      <Button capitalize={false}>capitalize false</Button>

      <Button variant="outline" size="icon">
        <IoChevronForward className="h-4 w-4" />
      </Button>

      <Button>
        <IoMailOpenOutline className="mr-2 h-4 w-4" /> Login with Email
      </Button>

      <Button disabled>
        <IoReloadCircleOutline className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
    </div>
  );
}