import { useState } from 'react';

export default function Showcase() {
  const [name, setName] = useState('Paul');
  return <div>Showcase {name}</div>;
}
