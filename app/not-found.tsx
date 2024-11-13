import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        color: "#fff",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>Page not found</h2>
      <Link href="/">Home</Link>
    </div>
  );
}
