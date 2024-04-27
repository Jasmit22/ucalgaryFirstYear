import React from "react";
import Link from "next/link";

export default function header() {
  return (
    <header>
      <div>header</div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </header>
  );
}
