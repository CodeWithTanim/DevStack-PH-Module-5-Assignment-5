import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { Technology } from "../types/technology";

const Technologies = () => {
    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const [stack, setStack] = useState<Technology[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/technologies.json")
            .then((res) => res.json())
            .then((data) => {
                setTechnologies(data);
                setLoading(false);
            });
    }, []);

    // Add Technology
    const addToStack = (technology: Technology) => {
        const alreadyAdded = stack.find((item) => item.id === technology.id);

        if (alreadyAdded) {
            toast.warning("This technology is already added!");
            return;
        }

        setStack([...stack, technology]);

        toast.success(`${technology.name} added to your stack!`);
    };

    // Remove Technology
    const removeFromStack = (id: string) => {
        const technology = stack.find((item) => item.id === id);

        const newStack = stack.filter((technology) => technology.id !== id);

        setStack(newStack);

        if (technology) {
            toast.info(`${technology.name} removed from your stack!`);
        }
    };

    // Remove All
    const removeAll = () => {
        setStack([]);

        toast.info("All technologies removed from your stack!");
    };

    return (
        <div id="technologies" className="container mx-auto px-4 py-16">
            {/* Heading */}
            <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
                    Explore the <span className="gradient-text">Technologies</span>
                </h2>

                <p className="text-gray-500 mt-2">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

            {/* Loading */}
            {loading && <p className="text-gray-500">Loading technologies...</p>}

            {/* Technologies */}
            {!loading && (
                <div className="flex flex-col lg:flex-row gap-5">
                    {/* Technology Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 flex-1">
                        {technologies.map((technology) => {
                            const alreadyAdded = stack.find(
                                (item) => item.id === technology.id,
                            );

                            return (
                                <div
                                    key={technology.id}
                                    className="border border-gray-200 rounded-xl p-4"
                                >
                                    {/* Icon and Badge */}
                                    <div className="flex items-center justify-between">
                                        <img
                                            src={technology.icon}
                                            className="w-10 h-10"
                                            alt={technology.name}
                                        />

                                        <span className="text-xs bg-pink-50 text-pink-500 px-3 py-1 rounded-full">
                                            {technology.badge}
                                        </span>
                                    </div>

                                    {/* Name */}
                                    <h3 className="text-xl font-semibold mt-4">
                                        {technology.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-gray-500 mt-2">
                                        {technology.description}
                                    </p>

                                    {/* Information */}
                                    <div className="flex items-center justify-between mt-5">
                                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                                            {technology.category}
                                        </span>

                                        <span className="text-xs text-gray-500">
                                            {technology.difficulty}
                                        </span>

                                        <span className="text-sm">⭐ {technology.rating}</span>
                                    </div>

                                    {/* Add Button */}
                                    <button
                                        onClick={() => addToStack(technology)}
                                        disabled={alreadyAdded ? true : false}
                                        className="w-full bg-[#111827] text-white py-2 rounded-md mt-4 disabled:bg-gray-300 disabled:text-gray-500"
                                    >
                                        {alreadyAdded ? "✓ Added to Stack" : "Add to Stack"}
                                    </button>
                                </div>
                            );
                        })}
                    </div>

                    {/* Your Stack */}
                    <div className="w-full lg:w-72">
                        <div className="border border-gray-200 rounded-xl p-5">
                            <h3 className="font-semibold text-lg">Your Stack</h3>

                            <p className="text-sm text-gray-400 mt-1">
                                {stack.length} Technologies Selected
                            </p>

                            {/* Empty Stack */}
                            {stack.length === 0 && (
                                <div className="border border-dashed border-gray-300 rounded-xl p-8 mt-5 text-center">
                                    <p className="text-sm text-gray-400">Your stack is empty.</p>
                                </div>
                            )}

                            {/* Stack Items */}
                            {stack.length > 0 && (
                                <div className="flex flex-col gap-3 mt-5">
                                    {stack.map((technology) => (
                                        <div
                                            key={technology.id}
                                            className="border border-gray-200 rounded-lg p-3 flex items-center justify-between"
                                        >
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={technology.icon}
                                                    className="w-8 h-8"
                                                    alt={technology.name}
                                                />

                                                <div>
                                                    <h4 className="text-sm font-medium">
                                                        {technology.name}
                                                    </h4>

                                                    <p className="text-xs text-gray-400">
                                                        {technology.category}
                                                    </p>
                                                </div>
                                            </div>

                                            <button
                                                onClick={() => removeFromStack(technology.id)}
                                                className="text-gray-400 hover:text-pink-500 text-xl"
                                            >
                                                ×
                                            </button>
                                        </div>
                                    ))}

                                    {/* Remove All */}
                                    <button
                                        onClick={removeAll}
                                        className="border border-red-300 text-red-500 rounded-md py-2 mt-8"
                                    >
                                        Remove All
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Toast Container */}
            <ToastContainer position="top-right" autoClose={2000} />
        </div>
    );
};

export default Technologies;
