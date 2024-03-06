import Breadcrumb from "@/components/Common/Breadcrumb";
import Search from "@/components/Search";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page ",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const SearchPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <Search></Search>
    </>
  );
};

export default SearchPage;
