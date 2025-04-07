import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MatchSubject } from "@/types/tournament";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";

export function SectionCard({ subject }: { subject: MatchSubject }) {
  return (
    <Card className="md:w-[300px] flex flex-col justify-between">
      <div>
        <CardHeader>
          <CardTitle className="text-lg font-semibold md:text-xl">
            {subject.name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-muted-foreground">{subject.description}</div>
        </CardContent>
      </div>
      <CardFooter className="flex-col items-start gap-1.5 text-sm">
        <Link
          className={`${buttonVariants({ variant: "default" })}`}
          href={`/dashboard/match/${subject.id}`}
        >
          Start match
        </Link>
      </CardFooter>
    </Card>
  );
}
