import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  interface Breadcrumb {
    title: string;
    url: string;
  }

  // console.log(useLocation())

  const location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([]);

  useEffect(() => {
    const paths = location.pathname.split("/").filter((path) => path !== "");

    const breadcrumbLinks: Breadcrumb[] = paths.map((path, index) => {
      const url = `/${paths.slice(0, index + 1).join("/")}`;
      return { title: path, url };
    });

    setBreadcrumbs(breadcrumbLinks);
  }, [location.pathname]);

  return (
    <div>
      <nav>
        <ul className="flex flex-row">
          {/* <li>
                <Link to="/">TRACK</Link>
            </li> */}
          {breadcrumbs.map(({ title, url }) => (
            <li key={url} className="capitalize">
              <Link to={url}>/{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Breadcrumb;
