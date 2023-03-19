import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default function Home(props: any) {
  // const { post } = props;
  return (
    <>
      <div>{/* <h1>{post && post.name}</h1> */}</div>
    </>
  );
}


