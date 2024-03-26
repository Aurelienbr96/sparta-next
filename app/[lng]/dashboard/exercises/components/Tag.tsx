"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export const Tag = ({ children, tag }: { children: React.ReactNode; tag?: number }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);
    const query = params.get("query");
    if (query && Number(query) === tag) {
      params.delete("query");
    } else if (tag) {
      params.set("query", tag.toString());
    }
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <button className="rounded-full px-6 py-2 bg-black text-white" onClick={handleSearch}>
      {children}
    </button>
  );
};
