import NotFoundMessage from "@/components/layout/NotFoundMessage";

// Pages in this group that call notFound() — a product or sub-page that is
// missing or not published. The (inner) layout already supplies the header.
export default function NotFound() {
  return <NotFoundMessage />;
}
