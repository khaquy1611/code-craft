import { Terminal } from "lucide-react";

export function EditorPanelSkeleton() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-blue-500 bg-opacity-5 rounded-xl blur-2xl" />
      <div className="relative bg-gray-900 bg-opacity-90 backdrop-blur rounded-xl border border-white border-opacity-5 p-6 h-64">
        {/* Editor Area Skeleton */}
        <div className="relative rounded-xl overflow-hidden ring-1 ring-white ring-opacity-5">
          <div className="absolute inset-0 bg-blue-500 bg-opacity-5" />
          <div className="h-64 bg-gray-800 bg-opacity-50 backdrop-blur-sm p-4">
            {/* Code line skeletons */}
            {[...Array(15)].map((_, i) => (
              <div key={i} className="flex items-center gap-4 mb-3">
                <div className="w-12 h-4 bg-white bg-opacity-5 rounded" />
                <div
                  className="h-4 bg-white bg-opacity-5 rounded"
                  style={{ width: `${Math.random() * 60 + 20}%` }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-3 flex justify-end">
          <div className="w-40 h-6 bg-white bg-opacity-5 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export function OutputPanelSkeleton() {
  return (
    <div className="relative bg-gray-900 rounded-xl p-4 ring-1 ring-gray-800 ring-opacity-50">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-6 h-6 rounded-lg bg-gray-800 ring-1 ring-gray-800 ring-opacity-50">
            <Terminal className="w-4 h-4 text-blue-400 text-opacity-50" />
          </div>
          <div className="w-16 h-4 bg-white bg-opacity-5 rounded" />
        </div>
      </div>

      {/* Output Area Skeleton */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl -z-10" />
        <div className="relative bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 h-64">
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-white bg-opacity-5 rounded-xl" />
              <div className="w-48 h-4 mx-auto bg-white bg-opacity-5 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Loading state for the entire editor view
export function EditorViewSkeleton() {
  return (
    <div className="space-y-6 p-4">
      <EditorPanelSkeleton />
      <OutputPanelSkeleton />
    </div>
  );
}
