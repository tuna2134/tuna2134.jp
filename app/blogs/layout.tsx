import { getArticles, Article } from "./_components";
import Link from "next/link";
import React from "react";

const Layout = async ({
  children,
}: {
  children: React.ReactNode,
}) => {
  const articles = await getArticles();
  return (
    <div className="flex h-screen">
      <div className="w-1/4 border-r overflow-y-auto">
        <h2 className="py-2 text-2xl text-center w-full border-b font-bold">記事一覧</h2>
        <div>
          {articles.map((article: Article, index: number) => (
            <div key={index} className="p-4 border-b">
              <Link href={`/blogs/${article.slug}`}>{article.title}</Link>
            </div>
          ))}
        </div>
      </div>
      <div className="w-3/4 overflow-y-auto">{children}</div>
    </div>
  )
};

export default Layout;
