import logoTipo from "/public/image/logotipo.png"
import discord from "/public/image/discord.png"
import button from "/public/image/button.png"
import bandera from "/public/image/bandera.png"
import medalla from "/public/image/medalla.png"
import Countdown from "@/components/Countdown";
import { GoStarFill } from "react-icons/go";
import { FaDiscord } from "react-icons/fa";
import time from "/public/image/time.png"
import { texto } from "@/ui/font";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (

    <div className="relative min-h-screen bg-[#1A1A26]">

      {/* HEADER  */}
      <header className=" py-6 grid justify-items-center gap-4 sm:flex sm:justify-between max-w-[1600px] mx-auto px-4">

        <Image src={logoTipo} alt="logotipo" priority className="ml-10 sm:m-0" />

        <Link href={"https://discord.gg/78gDJjSz"} className=" hidden sm:flex items-center ">
          {/* <nav className="flex max-w-min items-center py-3 px-6 rounded-2xl bg-[#2D4473] gap-3">
            <FaDiscord className="text-[#5C73F2]" size={40} />
            <span className="text-white text-2xl">Discord</span>
          </nav> */}
          <Image src={discord} alt="discord" />
        </Link>

      </header>
      <div className="h-1 bg-[#BF9C5A]"></div>

      {/* BANDERA  */}
      <div className="relative">
        <Link href={"https://t.me/+mOlgrLxVU59hNjlh"} className="absolute bottom-[20%] left-[10%]" >
          <Image src={button} alt="un botón" className="w-[100px] sm:w-auto" />
        </Link>
        <Image src={bandera} alt="bandera" priority className="w-full h-auto" />
      </div>

      <div className={`grid w-full max-w-[500px] lg:max-w-[2000px] mx-auto lg:grid-cols-4 bg-[#1A1A26] text-white gap-10 pb-16 ${texto.className}  px-5`}>

        {/* TIME  */}
        <div className="flex flex-col order-1 lg:order-none">
          <h2 className={` text-center text-5xl mb-6 py-2`}>Countdown</h2>

          <div className="grow flex items-center relative justify-center">
            <Image src={time} alt="fondo blanco" className="w-[280px] 2xl:w-[333px] lg:w-[221px] " />
            <Countdown />
          </div>

          {/* <Link href={"https://discord.gg/78gDJjSz"} className="flex items-center mx-auto mt-6">
            <nav className="flex max-w-min items-center py-3 px-6 rounded-2xl bg-[#2D4473] gap-3">
              <FaDiscord className="text-[#5C73F2]" size={40} />
              <span className="text-white text-2xl">Discord</span>
            </nav>
          </Link> */}
          <Image src={discord} alt="discord" className="mx-auto mt-8 sm:hidden" />
        </div>

        {/* ABOUT  */}
        <div>
          <h2 className={` text-center text-5xl mb-6 py-2`}>About</h2>
          <p className="text-justify  font-light text-[18px]">Inspired by the political movement of Donald Trump. Designed for his supporters, this digital currency represents values like patriotism, economic freedom, and financial sovereignty. Trumpcoin aims to provide a secure and accessible investment opportunity while promoting a conservative vision for the future within a decentralized economy.</p>
        </div>

        {/* HOW TO BUY  */}
        <div>
          <h2 className={` text-center text-5xl mb-6 py-2`}>How to buy</h2>
          <ul className="space-y-4 text-justify font-light text-[18px]">
            <li>
              1. Create a wallet that supports Solana. We recommend using Solfeare or Phantom. Make sure to save your seed phrase in a safe place.
            </li>
            <li>
              2. Get some Solana (SOL) in your wallet. If you are transferring some SOL to your wallet, make sure to verify the address to avoid losing your funds.
            </li>
            <li>
              3. Swap your SOL for PACO. Go to radium.io and connect your wallet. Then, swap your SOL for PACO. The contract address is right below if you need it:
            </li>
          </ul>
        </div>

        {/* WALLET */}
        <div className="flex flex-col">
          <h2 className={` text-center text-5xl mb-6 py-2`}>WALLET</h2>

          <div className="flex gap-6 grow">

            <GoStarFill size={30} className="flex-none my-auto lg:hidden xl:block" />

            <div className="flex flex-col">
              <div className="grow">
                <Image src={medalla} alt="medalla" className="float-right" />
                <p className=" font-light text-[18px]">
                  Get ready for an exclusive experience with the launch of our very own Trumpcoin Wallet! Secure your coins and unlock special rewards just for our loyal community.
                  The first reward? A limited edition Trumpcoin medal.
                </p>
              </div>

              <div className="flex gap-2 mt-8 ">
                <p className="bg-[#2C4373] py-1 px-4 rounded-s-full border-2 border-white ">Dont miss out</p>
                <p className="bg-[#0f0f14] py-1 px-4 rounded-e-full border-2 border-white ">Join the revolution</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
