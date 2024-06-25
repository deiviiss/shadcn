import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { RocketIcon } from "lucide-react";


export default function AlertPage() {
  return (
    <div className="grid gap-3">
      <Alert>
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Default!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>

      <Alert variant={"destructive"}>
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Destructive!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>

      <Alert variant={'success'}>
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Success!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    </div>
  );
}