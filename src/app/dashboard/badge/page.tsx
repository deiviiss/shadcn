import { Badge } from "@/components/ui/badge";

export default function BadgePage() {
  return (
    <div className="flex gap-4">
      <Badge>Badge</Badge>
      <Badge variant="destructive">destructive</Badge>
      <Badge variant="secondary">secondary</Badge>
      <Badge variant="outline">outline</Badge>
      <Badge variant="info">info</Badge>
      <Badge variant="success">success</Badge>
      <Badge capitalize={true} variant="success">success capitalize</Badge>
    </div>
  );
}