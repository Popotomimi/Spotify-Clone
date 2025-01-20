import Head from "next/head";
import Image from "next/image";

import { ChevronLeft, ChevronRight, Play } from "lucide-react";

// Components
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

import { useEffect, useState } from "react";
export default function Home() {
  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    const updateGreeting = () => {
      const now = new Date();
      const hour = now.getHours();
      if (hour < 12) {
        setGreeting("Good Morning");
      } else if (hour < 18) {
        setGreeting("Good Afternoon");
      } else {
        setGreeting("Good Evening");
      }
    };
    updateGreeting();
  }, []);
  return (
    <div className="h-screen text-zinc-50 flex flex-col">
      {" "}
      <Head>
        {" "}
        <title>Spotify</title>{" "}
        <meta name="TailWind Spotify" content="Clone do Spotify com TailWind" />{" "}
      </Head>{" "}
      <div className="flex flex-1">
        {" "}
        <Sidebar />{" "}
        <main className="flex-1 p-6">
          {" "}
          <div className="flex items-center gap-3">
            {" "}
            <button className="rounded-full bg-black/30 p-1">
              {" "}
              <ChevronLeft />{" "}
            </button>{" "}
            <button className="rounded-full bg-black/30 p-1">
              {" "}
              <ChevronRight />{" "}
            </button>{" "}
          </div>{" "}
          <h1 id="greeting" className="font-bold text-3xl mt-7">
            {" "}
            {greeting}{" "}
          </h1>{" "}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-4">
            {" "}
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-2 overflow-hidden hover:bg-white/10 transition-colors p-2">
              {" "}
              <Image
                src="/cbjr1.jpg"
                width={60}
                height={60}
                alt="Capa do album do Charlie Brown JR"
              />{" "}
              <strong className="text-xs">100% Charlie Brown</strong>{" "}
              <button className="p-1 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible">
                {" "}
                <Play />{" "}
              </button>{" "}
            </a>{" "}
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-2 overflow-hidden hover:bg-white/10 transition-colors p-2">
              {" "}
              <Image
                src="/cbjr2.jpg"
                width={60}
                height={60}
                alt="Capa do album do Charlie Brown JR"
              />{" "}
              <strong className="text-xs">Imunidade Musical</strong>{" "}
              <button className="p-1 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible">
                {" "}
                <Play />{" "}
              </button>{" "}
            </a>{" "}
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-2 overflow-hidden hover:bg-white/10 transition-colors p-2">
              {" "}
              <Image
                src="/cbjr5.jpg"
                width={60}
                height={60}
                alt="Capa do album do Charlie Brown JR"
              />{" "}
              <strong className="text-xs">Bocas Ordinárias</strong>{" "}
              <button className="p-1 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible">
                {" "}
                <Play />{" "}
              </button>{" "}
            </a>{" "}
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-2 overflow-hidden hover:bg-white/10 transition-colors p-2">
              {" "}
              <Image
                src="/cbjr2.jpg"
                width={60}
                height={60}
                alt="Capa do album do Charlie Brown JR"
              />{" "}
              <strong className="text-xs">Imunidade Musical</strong>{" "}
              <button className="p-1 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible">
                {" "}
                <Play />{" "}
              </button>{" "}
            </a>{" "}
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-2 overflow-hidden hover:bg-white/10 transition-colors p-2">
              {" "}
              <Image
                src="/cbjr5.jpg"
                width={60}
                height={60}
                alt="Capa do album do Charlie Brown JR"
              />{" "}
              <strong className="text-xs">Bocas Ordinárias</strong>{" "}
              <button className="p-1 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible">
                {" "}
                <Play />{" "}
              </button>{" "}
            </a>{" "}
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-2 overflow-hidden hover:bg-white/10 transition-colors p-2">
              {" "}
              <Image
                src="/cbjr6.jpg"
                width={60}
                height={60}
                alt="Capa do album do Charlie Brown JR"
              />{" "}
              <strong className="text-xs">De 1997 A 2007</strong>{" "}
              <button className="p-1 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible">
                {" "}
                <Play />{" "}
              </button>{" "}
            </a>{" "}
          </div>{" "}
          <h2 className="font-bold text-xl mt-7">
            Made for Roberto de Oliveira
          </h2>{" "}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-2 mt-4">
            {" "}
            <a
              href="#"
              className="bg-white/5 p-2 flex flex-col gap-2 rounded hover:bg-white/10">
              {" "}
              <Image
                src="/cbjr1.jpg"
                className="w-full"
                width={60}
                height={60}
                alt="Capa do album do Charlie Brown JR"
              />{" "}
              <strong className="font-semibold text-sm">Daily Mix 1</strong>{" "}
              <span className="text-xs text-zinc-500">
                Chorão do Charlie Brown Jr
              </span>{" "}
            </a>{" "}
            <a
              href="#"
              className="bg-white/5 p-2 flex flex-col gap-2 rounded hover:bg-white/10">
              {" "}
              <Image
                src="/cbjr2.jpg"
                className="w-full"
                width={60}
                height={60}
                alt="Capa do album do Charlie Brown JR"
              />{" "}
              <strong className="font-semibold text-sm">Daily Mix 1</strong>{" "}
              <span className="text-xs text-zinc-500">
                Chorão do Charlie Brown Jr
              </span>{" "}
            </a>{" "}
            <a
              href="#"
              className="bg-white/5 p-2 flex flex-col gap-2 rounded hover:bg-white/10">
              {" "}
              <Image
                src="/cbjr6.jpg"
                className="w-full"
                width={60}
                height={60}
                alt="Capa do album do Charlie Brown JR"
              />{" "}
              <strong className="font-semibold text-sm">Daily Mix 1</strong>{" "}
              <span className="text-xs text-zinc-500">
                Chorão do Charlie Brown Jr
              </span>{" "}
            </a>{" "}
            <a
              href="#"
              className="bg-white/5 p-2 flex flex-col gap-2 rounded hover:bg-white/10">
              {" "}
              <Image
                src="/cbjr5.jpg"
                className="w-full"
                width={60}
                height={60}
                alt="Capa do album do Charlie Brown JR"
              />{" "}
              <strong className="font-semibold text-sm">Daily Mix 1</strong>{" "}
              <span className="text-xs text-zinc-500">
                Chorão do Charlie Brown Jr
              </span>{" "}
            </a>{" "}
            <a
              href="#"
              className="bg-white/5 p-2 flex flex-col gap-2 rounded hover:bg-white/10">
              {" "}
              <Image
                src="/cbjr1.jpg"
                className="w-full"
                width={60}
                height={60}
                alt="Capa do album do Charlie Brown JR"
              />{" "}
              <strong className="font-semibold text-sm">Daily Mix 1</strong>{" "}
              <span className="text-xs text-zinc-500">
                Chorão do Charlie Brown Jr
              </span>{" "}
            </a>{" "}
          </div>{" "}
        </main>{" "}
      </div>{" "}
      <Footer />{" "}
    </div>
  );
}
