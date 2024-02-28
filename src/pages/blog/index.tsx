import Layout from "@/components/layout/privateLayout";
import React from "react";

const Blog = () => {
  return <div>blogs</div>;
};

Blog.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Blog;
