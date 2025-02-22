"use client";

import { usePetContext } from "@/lib/hooks";
import Image from "next/image";
import PetButton from "./pet-button";
import { Pet } from "@prisma/client";

export default function PetDetails() {
  const { selectedPet } = usePetContext();

  return (
    <section className="flex flex-col h-full w-full">
      {!selectedPet ? (
        <EmptyView />
      ) : (
        <>
          <TopBar pet={selectedPet} />

          <OtherInfo pet={selectedPet} />

          <Notes pet={selectedPet} />
        </>
      )}
    </section>
  );
}

function EmptyView() {
  return (
    <p className="h-full flex justify-center items-center text-2xl font-medium">
      No pet selected
    </p>
  );
}

type Props = {
  pet: Pet;
};

function TopBar({ pet }: Props) {
  const { handleCheckoutPet } = usePetContext();

  return (
    <div className="flex flex-col md:flex-row ju items-center bg-white px-4 py-5 border-b border-light">
      {/* Pet Image and Name */}
      <div className="flex items-center w-full md:w-auto">
        <Image
          src={pet.imageUrl}
          alt="Selected pet image"
          height={75}
          width={75}
          className="h-[75px] w-[75px] rounded-full object-cover"
        />

        <h2 className="text-xl md:text-2xl font-semibold leading-7 ml-3 md:ml-5">
          {pet.name}
        </h2>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto mt-4 md:mt-0 md:ml-auto">
        <PetButton actionType="edit" >
          Edit
        </PetButton>
        <PetButton
          actionType="checkout"
          onClick={async () => await handleCheckoutPet(pet.id)}
        
        >
          Checkout
        </PetButton>
      </div>
    </div>
  );
}

function OtherInfo({ pet }: Props) {
  return (
    <div className="flex justify-around py-10 px-5 text-center">
      <div>
        <h3 className="text-[13px] font-medium uppercase text-zinc-700">
          Owner name
        </h3>
        <p className="mt-1 text-lg text-zinc-800">{pet.ownerName}</p>
      </div>

      <div>
        <h3 className="text-[13px] font-medium uppercase text-zinc-700">Age</h3>
        <p className="mt-1 text-lg text-zinc-800">{pet.age}</p>
      </div>
    </div>
  );
}

function Notes({ pet }: Props) {
  return (
    <section className="flex-1 bg-white px-7 py-5 rounded-md mb-9 mx-8 border border-light">
      {pet.notes}
    </section>
  );
}
