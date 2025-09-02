import HomePage from "../pagesComp/HomePage";

export default function DynamicPageWrapper({ children }) {
  return (
    <div>
      <main className="flex-grow bg-orange-50">{children || <HomePage />}</main>
    </div>
  );
}