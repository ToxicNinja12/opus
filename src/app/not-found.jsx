import NotFoundMessage from "@/components/layout/NotFoundMessage";
import SiteHeader from "@/components/layout/SiteHeader";

// Addresses that match no route at all. These render in the root layout,
// which has no header of its own, so it is added here.
export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <NotFoundMessage />
    </>
  );
}
