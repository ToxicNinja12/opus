import NextLink from "next/link";

// The app was built on react-router, whose <Link> leaves the scroll position
// untouched when the page changes. `scroll` defaults to false here to keep
// that; pass `scroll` to get Next's usual scroll-to-top.
function Link({ scroll = false, ...props }) {
  return <NextLink scroll={scroll} {...props} />;
}

export default Link;
