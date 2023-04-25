import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { QueryArticlesContext } from "../../contexts/QueryArticlesContext";
import { SidebarContext } from "../../contexts/SidebarContext";

export const NavItems = ({ sections }) => {
  const { setPage } = useContext(QueryArticlesContext);
  const { setIsSidebarOpen } = useContext(SidebarContext);
  return (
    <ul>
      {sections.map((section) => {
        const { id, label, slug } = section;
        return (
          <li key={id}>
            <Link
              onClick={() => {
                setPage(1);
                setIsSidebarOpen(false);
              }}
              to={`/section/${slug}`}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
