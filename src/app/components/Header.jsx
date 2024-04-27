import React from "react";
import Link from "next/link";

export default function header() {
  return (
    <header>
      <div className="flex justify-between bg-slate-400">
        <h1 className="font-bold">header</h1>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <h1>hi</h1>
      </div>
    </header>
  );
}
