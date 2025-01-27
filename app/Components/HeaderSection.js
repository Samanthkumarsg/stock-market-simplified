"use client"
import Link from 'next/link'

export default function HeaderSection() {
    return (
        <header className="w-full bg-white dark:bg-neutral-900 bg-noise rounded-2xl p-6 flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center">
                <img 
                    src="/assets/pb.png" 
                    alt="Logo" 
                    className="h-10" // Adjust logo size as needed
                />
            </div>

            {/* Link Section */}
            <div className="flex items-center">
                <Link href="https://course.prathambhandari.com/" className="text-white font-semibold hover:underline">
                    Courses
                </Link>
            </div>
        </header>
    );
}
