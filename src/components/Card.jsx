import { useState } from "react"

export default function Card({ imgSrc, title, author, desc }) {
    const [show, setShow] = useState(false);

    return (
        <div className="flex flex-col justify-center items-center shadow-xl rounded-2xl gap-4 hover:rotate-10 transition-transform duration-300 cursor-pointer">
            <img className="size-80 rounded-t-2xl" src={imgSrc} alt="Heaven" />

            <div className="flex flex-col gap-2 px-4 py-2">
                <h1 className="text-xl font-bold">{title}</h1>

                <span>{author}</span>

                <p className={`max-w-[30ch] ${show ? "" : "truncate"}`}>{desc}</p>

                <button onClick={() => setShow((prev) => !prev)}>
                    {show ? "Hide Details" : "Show Details"}
                </button>
            </div>
        </div >);
}