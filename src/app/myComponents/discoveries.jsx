import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AlertDialogCustom from "./AlertDialog";
import ReadMoreBox from "./ReadMoreBox";

export default function Discoveries({ header, desc, childDesc, hrefTo }) {
  return (
    <Card className="max-w-md min-h-10">
      <CardHeader className="text-center">
        <CardTitle className="text-lg lg:text-2xl">{header}</CardTitle>
        <CardDescription>{desc}</CardDescription>
        <CardContent className="items-center">
          <p className="text-center leading-1 [&:not(:first-child)]:mt-6">
            {childDesc.slice(0, 280) + "..."}
          </p>
          <ReadMoreBox variant="text" header={header} childDesc={childDesc} />
        </CardContent>
      </CardHeader>
      <CardFooter className="flex justify-center">
        <Button>
          {" "}
          <a href={hrefTo} target="_blank">
            Still Curious.!?
          </a>{" "}
        </Button>
      </CardFooter>
    </Card>
  );
}
