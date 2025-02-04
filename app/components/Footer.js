import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className='footer'>
      <p>© 2025 FinTech Solutions. All rights reserved.</p>
      <Link href='/'>Privacy Policy </Link>
      <Link href='/'>Terms of Service </Link>
    </footer>
  );
}
