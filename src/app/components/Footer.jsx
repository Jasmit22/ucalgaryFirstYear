import React from "react";
import Link from "next/link";

export default function footer() {
  return (
    <footer>
      <div>Footer</div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <div>Lol hey guys</div>
    </footer>
  );
}
