import Image from "next/image";

export default function Home() {
  return (
    <body className="bg-primary-start font-montserrat flex items-center justify-center min-h-screen">
      <header className="flex flex-col items-center text-center space-y-[15px]">
        <Image
          src={"/TampaLogo2.png"}
          alt="Tampa 2024 Marlin"
          width={400}
          height={400}
        />
        <p className="text-2xl text-secondary-start">Welcome To The</p>
        <p className="text-4xl text-tertiary-end">
          <span> Tampa </span>2024
        </p>
        <p className="text-2xl text-secondary-start">Special Convention</p>
      </header>
    </body>
  );
}
