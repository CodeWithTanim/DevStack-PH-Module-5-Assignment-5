import banner from "../assets/banner-stack.png";

const Hero = () => {
    return (
        <div id="home" className="container mx-auto px-4">
            <div className="min-h-[calc(100vh-65px)] flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Hero Content */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-5xl md:text-7xl font-bold text-[#111827]">
                        Build Your Ideal
                        <br />
                        <span className="gradient-text">Development Stack</span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-500 max-w-xl mx-auto md:mx-0">
                        Explore frontend, backend, database, and tooling options, compare
                        them side by side, and put together the stack that fits your next
                        project.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-8">
                        {/* Explore Technologies */}
                        <a
                            href="#technologies"
                            className="gradient-bg text-white px-6 py-3 rounded-md hover:scale-105 transition-transform duration-300"
                        >
                            Explore Technologies
                        </a>

                        {/* Learn More */}
                        <button className="border border-gray-300 px-6 py-3 rounded-md text-gray-600 hover:scale-105 transition-transform duration-300">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src={banner}
                        className="w-80 md:w-[520px]"
                        alt="Development Stack"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
