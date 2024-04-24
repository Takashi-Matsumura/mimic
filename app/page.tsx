import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* ヘッダー */}
      <div className="flex space-x-3 mb-5 justify-between p-6">
        <div className="flex items-center">
          <Image alt="hoge" src="/img/foxtail.png" width={30} height={30} />
          <p className="text-2xl">TailwindTemplates</p>
        </div>
        <div className="flex space-x-10">
          <p>Templates</p>
          <p>Resources</p>
          <p>Blog</p>
          <p>About</p>
        </div>
      </div>

      {/* メイン */}
      <div style={{ position: "relative", width: "100%", height: "300px" }}>
        <Image
          className="px-10 drop-shadow-lg"
          alt="hoge"
          src="/img/tailwind.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className=" mt-10 px-60 h-screen ">
        <button className="bg-blue-100 text-blue-500 text-sm px-2 rounded-xl">
          Update
        </button>
        <h1 className="font-bold text-5xl">TailwindTemplates v2 is here</h1>
        <div className="flex justify-between my-5">
          <button>1 min read</button>
          <div className="space-x-3">
            <button>twitter</button>
            <button>linkedIn</button>
            <button>facebook</button>
          </div>
        </div>
        <div>
          <p className="mb-5">
            TailwindTemplates V2 is finally here! Our focus for
            TailwindTemplates v2 is to bring open-source design systems to
            Tailwindcss. Each design system has a detailed guideline to provide
            consistency and coherence within a user interface.
          </p>
          <h1 className="font-bold text-3xl">What to expect?</h1>
          <p className="mb-5">
            Over the coming months, we will expand the design systems that are
            currently available at launch. In addition to that, we are planning
            to create several tailwind configurations to easily get started with
            the proper colors and variants that belong to each design system.
          </p>
          <h1 className="font-bold text-3xl">Not only templates</h1>
          <p className="mb-5">
            We are planning to bring more tailwind and web development-related
            content such as videos, blog posts, tutorials and news.{" "}
          </p>
        </div>
      </div>
      {/* フッター */}
      <div className="bg-indigo-500 py-10 space-y-5 flex flex-col items-center justify-center">
        <div className="flex justify-between px-32 space-x-20">
          <div>
            <p className="text-lg font-bold text-white">About</p>
            <p className="text-lg  text-white">Me</p>
            <p className="text-lg  text-white">Contact</p>
            <p className="text-lg  text-white">Disclaimer</p>
          </div>
          <div>
            <p className="text-lg font-bold text-white">Resources</p>
            <p className="text-lg  text-white">Amazing tools</p>
            <p className="text-lg  text-white">Blog</p>
          </div>
          <div>
            <button className="bg-pink-600 text-white rounded-lg p-2">
              Subscribe to newsletter
            </button>
          </div>
        </div>
        <button className="bg-pink-600 text-white rounded-lg p-2">
          Support Me on
        </button>
        <p className="text-lg  text-white">
          Built with TALL stack & ❤ by J-hiz
        </p>
      </div>
    </>
  );
}
