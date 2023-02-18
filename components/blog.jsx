import Link from "next/link";
import { motion } from "framer-motion";

const posts = [
  {
    title: "Boost your conversion rate",
    href: "#",
    category: { name: "Article", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "6 min",
    author: {
      name: "Roel Aufderehar",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    id: 1,
  },
  {
    title: "How to use search engine optimization to drive sales",
    href: "#",
    category: { name: "Video", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "4 min",
    author: {
      name: "Brenna Goyette",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    id: 2,
  },
  {
    title: "Improve your customer experience",
    href: "#",
    category: { name: "Case Study", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    id: 3,
  },
];

export default function BlogSection() {
  return (
    <motion.div
      className=""
      initial="hidden"
      whileInView="visible"
      viewport={ { once: true, amount: 0.5 } }
      transition={ { delay: 0.10, duration: 0.5 } }
      variants={ {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      } }
    >
      <article className="flex items-center w-full p-2 py-16 m-1 rounded-sm shadow-md shadow-white group hover:bg-gradient-to-r ">
        <div className="max-w-[1240px] m-auto">
          <div className="inset-0 ">
            <div className="bg-white h-1/3 sm:h-2/3" />
          </div>
          <div className="relative mx-auto max-w-7xl">
            <div className="">
              <h2 className="text-3xl font-bold tracking-tight text-red-300 sm:text-4xl">
                Blog
              </h2>
            </div>
            <div className="grid max-w-lg gap-5 mx-auto mt-12 lg:max-w-none lg:grid-cols-3">
              { posts.map((post) => (
                <div
                  key={ post.title }
                  className="flex flex-col overflow-hidden rounded-lg shadow-lg"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="object-cover w-full h-48"
                      src={ post.imageUrl }
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-indigo-600">
                        <a href={ post.category.href } className="hover:underline">
                          { post.category.name }
                        </a>
                      </p>
                      <a href={ post.href } className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">
                          { post.title }
                        </p>
                        <p className="mt-3 text-base text-gray-500 ">
                          { post.description }
                        </p>
                      </a>
                    </div>

                    <Link href={ `` }>
                      <div className="flex justify-center">
                        <button className="flex items-center px-12 py-1 mt-5 mb-2 text-white bg-black rounded-sm hover:bg-gray-800">
                          Leer mas{ " " }
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3 h-3 ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={ 2 }
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              )) }
            </div>
          </div>
        </div>
      </article>
    </motion.div>
  );
}
