import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function PostPreview({ post }) {
  return (
    <Link href={"/blog/" + post.slug}>
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-text text-muted">
                <i className="bi bi-tag" />
                {post.frontMatter.tags.map((tag) => tag + " ")}
              </p>
              <h5 className="card-title">{post.frontMatter.title}</h5>
              <p className="card-text">{post.frontMatter.description}</p>

              <p className="card-text">
                <small className="text-muted">{post.frontMatter.date}</small>
              </p>
            </div>
          </div>
          <div className="col-md-4 m-auto">
            <Image
              src={post.frontMatter.thumbnailUrl}
              className="img-fluid mt-1 rounded-start"
              alt="thumbnail"
              width={500}
              height={400}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
