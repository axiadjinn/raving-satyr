'use client'

import { Link } from "@chakra-ui/next-js";

function Navbar() {
  return (
    <nav className='p-3 bg-fuchsia-900'>
      <h1 className='text-xl inline font-medium'>Champion practice tracker</h1>
      <Link className='ps-4' href="/">Dashboard</Link>
      <Link className='ps-4' href="/champ-practice">Champion Practice</Link>
    </nav>
  );
}

export default Navbar;