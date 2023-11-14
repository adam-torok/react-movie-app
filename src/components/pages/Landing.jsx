export default function Landing() {
    return (
        <div className="container-sm mx-auto min-h-screen">
            <div className="card flex gap-3 flex-col rounded-md p-10">
                <span className="bg-slate-300 p-2 rounded-md rounded-b-none text-xs">
                    Welcome
                </span>

                <h1 className="text-3xl font-bold dark:text-white">
                    Let's watch some movies
                </h1>

                <p className="dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, minus?</p>

                <div className="mt-10">
                    <a className="rounded-md bg-gray-200 p-3" href="">Let's get started</a>
                    <a href="">Learn mode</a>
                </div>
            </div>
        </div>
    )
}