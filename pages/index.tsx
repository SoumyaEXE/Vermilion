import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title> Soumya | Learning Web Development </title>
        <meta name="description" content=" I am a beginner web developer " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/shivalogo.ico" />
      </Head>
      <Home />
    </>
  );
}
