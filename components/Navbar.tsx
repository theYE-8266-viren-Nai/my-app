import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="w-full border-b bg-black text-white">
            {/* The Container - limits width so it doesn't stretch to the very edge of huge screens */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* 1. Logo Section */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/">
                            <h1 className="text-2xl font-bold">
                                Next<span className="text-blue-500">Pro</span>
                            </h1>
                        </Link>
                    </div>

                    {/* 2. Central Navigation - Hidden on small screens, flex on medium+ */}
                    <div className="hidden md:flex space-x-8">
                        <Link href="/" className="text-gray-300 hover:text-white font-medium transition-colors">
                            Home
                        </Link>
                        <Link href="/blog" className="text-gray-300 hover:text-white font-medium transition-colors">
                            Blog
                        </Link>
                        <Link href="/create" className="text-gray-300 hover:text-white font-medium transition-colors">
                            Create
                        </Link>
                    </div>

                    {/* 3. Auth Actions Section */}
                    <div className="flex items-center space-x-4">
                        <Link href="/auth/login" className="text-gray-300 hover:text-white text-sm font-medium">
                            Login
                        </Link>
                        <Link
                            href="/auth/sign-up"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all"
                        >
                            Sign Up
                        </Link>
                    </div>

                </div>
            </div>
        </nav>
    );
}
export default Navbar