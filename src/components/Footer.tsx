import logo from "../assets/logo-text.png";

const Footer = () => {
    return (
        <div className="border-t border-gray-200 bg-white mt-20">
            <footer className="container mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row justify-between gap-10">
                    {/* Brand */}
                    <div className="md:w-1/3">
                        <img src={logo} className="w-28" alt="Dev Stack" />

                        <p className="text-gray-500 text-sm mt-4 max-w-sm">
                            Curated tools, technologies, and resources for developers building
                            modern software.
                        </p>

                        <div className="flex gap-5 mt-5">
                            <a href="#" className="text-gray-600 text-sm">
                                GitHub
                            </a>

                            <a href="#" className="text-gray-600 text-sm">
                                Twitter
                            </a>

                            <a href="#" className="text-gray-600 text-sm">
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="font-semibold text-sm">PRODUCT</h3>

                        <ul className="mt-4 space-y-3">
                            <li>
                                <a href="#" className="text-gray-500 text-sm">
                                    Home
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-500 text-sm">
                                    Technologies
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-500 text-sm">
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold text-sm">COMPANY</h3>

                        <ul className="mt-4 space-y-3">
                            <li>
                                <a href="#" className="text-gray-500 text-sm">
                                    About
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-500 text-sm">
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-500 text-sm">
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-semibold text-sm">LEGAL</h3>

                        <ul className="mt-4 space-y-3">
                            <li>
                                <a href="#" className="text-gray-500 text-sm">
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-500 text-sm">
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-gray-200 mt-10 pt-5 flex flex-col md:flex-row justify-between gap-4">
                    <p className="text-gray-400 text-sm">
                        © 2026 Dev Stack. All rights reserved.
                    </p>

                    <div className="flex gap-5">
                        <a href="#" className="text-gray-400 text-sm">
                            Privacy
                        </a>

                        <a href="#" className="text-gray-400 text-sm">
                            Terms
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
