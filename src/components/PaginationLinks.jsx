import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function PaginationLinks({ meta, onPageClick }) {
  if (!meta || !meta.links) {
    return null; // Return early if meta or meta.links is undefined
  }

  function onClick(ev, link) {
    ev.preventDefault();
    if (!link.url) {
      return;
    }
    onPageClick(link);
  }

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 shadow-md mt-4">
      <div className="flex flex-1 justify-between sm:hidden">
        {/* Previous Page Link */}
       
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          {/* Display current page range */}
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{meta.from}</span> to{" "}
            <span className="font-medium">{meta.to}</span> of &nbsp;
            <span className="font-medium">{meta.total}</span> results
          </p>
        </div>
        <div>
          {meta.total > meta.per_page && (
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              {/* Render pagination links */}
              {meta.links.map((link, ind) => (
                <a
                  href="#"
                  onClick={(ev) => onClick(ev, link)}
                  key={ind}
                  aria-current="page"
                  className={
                    "relative z-10 inline-flex items-center border   px-4 py-2 text-sm font-medium focus:z-20 hover:bg-gray-50 " +
                    (ind === 0 ? 'rounded-l-md ' : '') +
                    (ind === meta.links.length - 1 ? 'rounded-r-md ' : '') +
                    (link.active ? 'border-indigo-500 bg-indigo-50 text-indigo-600 ' : '')
                  }
                  dangerouslySetInnerHTML={{ __html: link.label }}
                >
                </a>
              ))}
            </nav>
          )}
        </div>
      </div>
    </div>
  );
}
