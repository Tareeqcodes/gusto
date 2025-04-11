
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link href="/" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Return Home
      </Link>
    </div>
  );
}