import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import type { Database } from "@/lib/schema";
import Image from "next/image";
type Species = Database["public"]["Tables"]["species"]["Row"];

export default function SpeciesDetailsDialog({ species }: { species: Species }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mt-3 w-full">Learn More</Button>
      </DialogTrigger>
      <DialogContent className="max-h-screen overflow-y-auto sm:max-w-[600px]">
        <DialogHeader>
          {species.image && (
            <div className="relative h-80 w-full">
              <Image src={species.image} alt={species.scientific_name} fill style={{ objectFit: "cover" }} />
            </div>
          )}
          <DialogTitle>
            <h3 className="mt-3 text-2xl font-semibold">{species.scientific_name}</h3>
          </DialogTitle>
          {species.common_name && (
            <DialogDescription>
              <h4 className="text-lg font-light italic">{species.common_name}</h4>
            </DialogDescription>
          )}
        </DialogHeader>
        {species.total_population && <p>Total Population: {species.total_population}</p>}
        {species.kingdom && <p>Kingdom: {species.kingdom}</p>}
        {species.description && <p>{species.description}</p>}
      </DialogContent>
    </Dialog>
  );
}
