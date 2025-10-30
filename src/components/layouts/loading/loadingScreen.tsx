export function LoadingScreen() {
  return (
    <div className="bg-opacity-80 fixed inset-0 z-50 flex items-center justify-center bg-white backdrop-blur-sm">
      <div className="text-center">
        <div className="border-opacity-70 mb-4 h-16 w-16 animate-spin rounded-full border-t-4 border-blue-500"></div>
        <p className="text-lg font-medium text-gray-700">Loading...</p>
      </div>
    </div>
  );
}
