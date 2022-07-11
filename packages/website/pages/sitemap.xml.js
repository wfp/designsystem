import { renderToStaticMarkup } from "react-dom/server";
import { getArticles } from "../lib/api";

const SitemapIndex = () => null;

const Sitemap = ({ pages, origin }) => {
  const newPages = pages
    ? pages.sort((a, b) => (a.updated_at > b.updated_at ? -1 : 1))
    : pages;

  const blogFolder = process.env.APP_BLOG_FOLDER
    ? process.env.APP_BLOG_FOLDER
    : "";
  return (
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>{[origin, ""].join(`${blogFolder}`)}</loc>
        <lastmod>
          {newPages?.[0].updated_at
            ? newPages?.[0].updated_at.slice(0, 10)
            : ""}
        </lastmod>
      </url>

      {process.env.APP_BLOG_FOLDER && (
        <url>
          <loc>{[origin, ""].join(`${blogFolder}`)}</loc>
          <lastmod>
            {newPages?.[0].updated_at
              ? newPages?.[0].updated_at.slice(0, 10)
              : ""}
          </lastmod>
        </url>
      )}

      {newPages?.map((page, index) => {
        return (
          <url key={index}>
            <loc>{[origin, page?.slug].join(`${blogFolder}`)}</loc>
            <lastmod>
              {page?.updated_at ? page?.updated_at.slice(0, 10) : ""}
            </lastmod>
          </url>
        );
      })}
    </urlset>
  );
};

export const getServerSideProps = async ({ res }) => {
  const articles = (await getArticles()) || [];

  res.setHeader("Content-Type", "text/xml");
  res.write(
    renderToStaticMarkup(
      <Sitemap pages={articles} origin={process.env.APP_DOMAIN} />
    )
  );
  res.end();

  return {
    props: {},
  };
};

export default SitemapIndex;
