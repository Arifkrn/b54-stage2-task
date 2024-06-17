import { useState, ChangeEvent } from 'react';

export const UserrrProfile = () => {
  // Deklarasi state untuk nama, email, dan umur
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [age, setAge] = useState<number>(0);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => setAge(Number(e.target.value));

  return (
    <div>
      <h1>Profil Pengguna</h1>
      <form>
        <div>
          <label>Nama: </label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Umur: </label>
          <input type="number" value={age} onChange={handleAgeChange} />
        </div>
      </form>
      <h2>Detail Pengguna</h2>
      <p>Nama: {name}</p>
      <p>Email: {email}</p>
      <p>Umur: {age}</p>
    </div>
  );
};