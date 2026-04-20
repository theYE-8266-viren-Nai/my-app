import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ModeToggle } from "../web/Theme-toggle"; // Adjust path as needed

const Navbar = () => {
  return (
    <nav className="w-full border-b bg-background text-foreground sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* 1. Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold tracking-tight">
                Next<span className="text-primary">Pro</span>
              </h1>
            </Link>
          </div>

          {/* 2. Central Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-muted-foreground hover:text-foreground font-medium transition-colors">Home</Link>
            <Link href="/blog" className="text-muted-foreground hover:text-foreground font-medium transition-colors">Blog</Link>
            <Link href="/create" className="text-muted-foreground hover:text-foreground font-medium transition-colors">Create</Link>
          </div>

          {/* 3. Actions Section */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Added ThemeToggle here */}
            <ModeToggle/>
            
            <Link href="/auth/login" className={buttonVariants({ variant: "ghost" })}>
              Login
            </Link>
            <Link href="/auth/sign-up" className={buttonVariants()}>
              Sign Up
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;