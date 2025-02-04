import Link from "next/link";
export default function Home() {
  let a = 5;
  let b =10;
  return (
    <div>
      <h1>My app for web dev demos</h1>
      <p><Link href="/week_2">Go to Week2</Link></p>
      <p><Link href="/week_3">Go to Week3</Link></p>
      <p><Link href="/week_4">Go to Week4</Link></p>
      <p><Link href="/week_5">Go to Week5</Link></p>
      
      
      <p>The addition is {a+b}</p>
    </div>
  );
}
