import Image from "next/image";
import logo from "../public/assets/chat.png";
import Form from "./components/Form";

export default function Home() {
  return (
    <div className="bg-[#f5f5f5] flex min-h-screen flex-col items-center justify-center">
      <Image src={logo} alt="Vercel Logo" width={64} height={16} />
      <p className="text-xl font-bold">Sign in to your account</p>
      <Form />
    </div>
  );
}
