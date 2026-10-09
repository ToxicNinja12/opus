import SiteHeader from "@/components/layout/SiteHeader";

export default function InnerLayout({ children }) {
  return (
    <>
      <SiteHeader />
      {children}
    </>
  );
}
