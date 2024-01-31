/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

// type Developer = {
//     name: string
// } & Record<string, string | number>

type Developer = {
    name: string,
    [key: string] : string | number
}

const erauqs : Developer = {
    name: "Phuong Binh",
    age: 18,
    gender: "male"
}

console.log(erauqs);

type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean;
  };

  type Features = {
    darkMode: () => void;
    newUserProfile: () => void;
  };
   
  type FeatureOptions = OptionsFlags<Features>;

// ?? Mapping Modifiers

//** Removes 'readonly' attributes from a type's properties
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;


// ** Removes 'optional' attributes from a type's properties
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};
 
type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};
 
type User = Concrete<MaybeUser>;

// ?? Key Remapping via as

// type MappedTypeWithNewProperties<Type> = {
//   [Properties in keyof Type as NewKeyType]: Type[Properties]
// }

type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
};

interface Person {
  name: string;
  age: number;
  location: string;
}

type LazyPerson = Getters<Person>;


// Remove the 'kind' property

type RemoveKindField<Type> = {
  [Property in keyof Type as Exclude<Property, "kind">] : Type[Property]
};

interface Circel {
  kind: "circle";
  radius : number
}

type KindlessCircle = RemoveKindField<Circel>
