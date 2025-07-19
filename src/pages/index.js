import HomePage from "./HomePage";

export default function Home({ children }) {
  return (
    <div>
      <main className="flex-grow bg-orange-50">{children || <HomePage />}</main>
    </div>
  );
}