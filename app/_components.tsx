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
      <div className="h-20 w-full max-w-4xl lg:max-w-6xl mx-auto flex items-center">
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
