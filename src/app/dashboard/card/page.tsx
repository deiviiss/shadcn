import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function CardPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter className="flex flex-col">
          <p>Card Footer</p>
          <div className="flex gap-2">
            <Button>Button</Button>
            <Button variant={'destructive'}>Button</Button>
          </div>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter className="flex flex-col">
          <p>Card Footer</p>
          <div className="flex gap-2">
            <Button>Button</Button>
            <Button variant={'destructive'}>Button</Button>
          </div>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter className="flex flex-col">
          <p>Card Footer</p>
          <div className="flex gap-2">
            <Button>Button</Button>
            <Button variant={'destructive'}>Button</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}