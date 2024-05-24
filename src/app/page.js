"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Home() {
  const router= useRouter()

  const navigate = (name) => {
    router.push(name)
  }
  return (
    <main className={styles.main}>
     <div>Hello</div>  
     <Link href='/login'>got to login</Link>
     <Link href='/productlist'>got to productpage</Link>
     <button onClick={() => navigate('/about')}>go to about</button>
    </main>
  );
}
