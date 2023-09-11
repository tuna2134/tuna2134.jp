import Link from "next/link";

const links = [
  {
    href: "/blog",
    label: "Blog"
  },
]

export const Header = () => {
  return (
    <header className="border-b">
      <div className="h-20 w-full max-w-2xl md:max-w-4xl xl:max-w-6xl px-4 mx-auto flex items-center">
        <div>
          <Link href="/" className="text-4xl font-bold">tuna2134</Link>
        </div>
        <nav className="ml-auto">
          {links.map(( link, index ) => (
            <Link className="text-xl" href={link.href} key={index}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
};

export const Footer = () => {
  return (
    <footer className="border-t mt-4">
      <div className="h-28 w-full max-w-2xl md:max-w-4xl xl:max-w-6xl px-4 mx-auto flex items-center">
        <div>
          <p className="font-medium text-3xl">tuna2134</p>
        </div>
        <nav className="ml-auto">
          <a href="https://github.com/tuna2134">Github</a>
        </nav>
      </div>
    </footer>
  )
}