import Image from "next/image";
import Link from "next/link";
import { Companion } from "@prisma/client";
import { MessagesSquare } from "lucide-react";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";

interface CompanionsProps {
  data: (Companion & {
    _count: {
      messages: number;
    };
  })[];
}

export const Companions = ({ data }: CompanionsProps) => {
  if (data.length === 0) {
    return (
      <div className="pt-10 flex flex-col items-center justify-center space-y-3">
        <div className="relative w-60 h-60">
          <Image fill className="grayscale" src="/empty.png" alt="Empty" />
        </div>
        <p className="text-sm text-muted-foreground">No companions found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 pb-10">
      {data.map((item) => {
        console.log(item.src); // Log image source for each item
        return (
          <Card
            key={item.name}
            className="bg-primary/10 rounded-xl cursor-pointer hover:opacity-75 transition border-0"
          >
            <Link href={`/chat/${item.id}`}>
              <CardHeader className="flex items-center justify-center text-center text-muted-foreground">
                <div className="relative w-32 h-32">
                <Image
                  src={item.src}
                  alt="Character"
                  width={320}
                  height={320}
                  className="rounded-xl object-cover"
                />
                </div>
                <p className="font-bold text-green-600">{item.name}</p>
                <p className="text-xs">{item.description}</p>
              </CardHeader>
              <CardFooter className="flex items-center justify-between text-xs text-muted-foreground">
                <p className="lowercase">@{item.userName}</p>
                <div className="flex items-center">
                  <MessagesSquare className="w-3 h-3 mr-1 font-bold text-green-700" />
                  {item._count.messages}
                </div>
              </CardFooter>
            </Link>
          </Card>
        );
      })}
    </div>
  );
};
