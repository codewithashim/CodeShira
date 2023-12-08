import Link from "next/link";
import React from "react";

export default function PageLinks({ dark }) {
  return (
    <section className={`breadcrumbs ${dark ? "bg-dark-1" : ""} `}>
      <div className="container">
        <div className="row">
          <div className="col-auto">
            <div className="breadcrumbs__content">
              <div
                className={`breadcrumbs__item ${dark ? "text-dark-3" : ""} `}
              >
                <Link href="/">Home</Link>
              </div>

              <div
                className={`breadcrumbs__item ${dark ? "text-dark-3" : ""} `}
              >
                <Link href="/courses-list-3">All courses</Link>
              </div>

              <div
                className={`breadcrumbs__item ${dark ? "text-dark-3" : ""} `}
              >
                <Link href="/courses-list-5">User Experience Design</Link>
              </div>

              <div
                className={`breadcrumbs__item ${dark ? "text-dark-3" : ""} `}
              >
                <Link href="/courses-list-6">User Interface</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
