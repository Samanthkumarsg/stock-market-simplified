import { RiStockLine } from "react-icons/ri";
import { data } from "../data"

export default function LearnSection() {

    return (
        <div className="bg-neutral-100 dark:bg-neutral-950 mt-8">
            <h1 className="text-3xl font-semibold tracking-wide mb-12 text-center dark:text-neutral-100">Transform Your Understanding of the Stock Market in 8 Simple Steps with Proven Strategies Designed for Today’s Financial Professionals.</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4   ">
                {
                    data?.map((item, id) => (
                        <div className=" bg-neutral-50 dark:bg-neutral-900  rounded-2xl p-6 h-full drop-shadow-sm hover:drop-shadow cursor-pointer relative" key={id}>
                            <RiStockLine className=" h-36 w-36 text-neutral-400/10 dark:text-neutral-700/20 absolute bottom-0 right-0 z-0" />

                            <h3 className=" text-xl font-bold  text-neutral-800 dark:text-neutral-800 mb-4  p-6 bg-lime-300 z-30 rounded-2xl h-8 w-8 flex items-center justify-center">{id + 1}</h3>
                            <h3 className="text-xl font-semibold text-neutral-900 dark:text-lime-300 mb-4 z-30">{item.title}</h3>
                            <p className="text-base font-normal  text-neutral-600 dark:text-neutral-400 z-30">{item.description}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
