import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h3
        style={{
          margin: "6px",
          padding: "21px",
          backgroundColor: "lightgreen", // Use backgroundColor with camelCase
          borderRadius: "25px",
        }}
      >
        This Is the API Calling Web Created By Yuvi
      </h3>
      <br></br>
      <Link
        href="/productlist"
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px",
          textDecoration: "none",
          height: "30px",
          borderRadius: "25px",
        }}
      >
        Go to the Product Page
      </Link>
    </div>
  );
}
