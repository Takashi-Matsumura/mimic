import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* ヘッダー */}
      <div className="flex space-x-3 mb-5">
        <p>TailwindTemplates</p>
        <p>Templates</p>
        <p>Resources</p>
        <p>Blog</p>
        <p>About</p>
      </div>

      {/* メイン */}
      <div className="bg-gray-100 px-60 h-screen ">
        <h1 className="font-bold text-5xl">TailwindTemplates v2 is here</h1>
        <div>
          <p>
            TailwindTemplates V2 is finally here! Our focus for
            TailwindTemplates v2 is to bring open-source design systems to
            Tailwindcss. Each design system has a detailed guideline to provide
            consistency and coherence within a user interface.
          </p>
          <h1 className="font-bold text-3xl">What to expect?</h1>
          <p>
            Over the coming months, we will expand the design systems that are
            currently available at launch. In addition to that, we are planning
            to create several tailwind configurations to easily get started with
            the proper colors and variants that belong to each design system.
          </p>
          <h1 className="font-bold text-3xl">Not only templates</h1>
          <p>
            We are planning to bring more tailwind and web development-related
            content such as videos, blog posts, tutorials and news.{" "}
          </p>
        </div>
      </div>

      {/* フッター */}
      <div>footer</div>
    </>
  );
}
