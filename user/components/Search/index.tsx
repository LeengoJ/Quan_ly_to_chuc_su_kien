import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import {countrys} from "./data";
export const Search = () => {
    return (
      <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Autocomplete 
        label="Select an animal" 
        className="max-w-xs" 
      >
        {countrys.map((animal) => (
          <AutocompleteItem key={animal.value} value={animal.value}>
            {animal.label}
          </AutocompleteItem>
        ))}
      </Autocomplete>
      <Autocomplete
        label="Favorite Animal"
        placeholder="Search an animal"
        className="max-w-xs"
        defaultItems={countrys}
      >
        {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
      </Autocomplete>
                </div>
        </section>
            </>
  );
}
