import React from 'react';
import Card from './Card';

const pets = [
  {
  name: 'Spot',
  description: 'The best boy',
  id: 1,
},
{
  name: 'Plato',
  description: 'loves fetch',
  id: 2,
},
{
  name: 'Albus',
  description: 'will eat anything',
  id: 3,
},
];

export default function Display() {
  return (
    <div>
      {pets.map(pet=> <Card key={pet.id} canine={pet}/>)}
    </div>
  );
}
