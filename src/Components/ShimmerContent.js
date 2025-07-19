import Shimmer from "./Shimmer";



export default function ShimmerContent() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-8">
            {/* Breadcrumb shimmer */}
            <div className="flex items-center gap-2 mb-6">
                <Shimmer className="h-4 w-16 rounded" />
                <span className="text-gray-400">/</span>
                <Shimmer className="h-4 w-24 rounded" />
            </div>

            {/* Title shimmer */}
            <Shimmer className="h-4 w-1/2 max-w-md rounded mb-8" />
            <Shimmer className="h-20 w-full rounded-lg mb-4" />

            {/* Main content shimmer */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-3 space-y-6">
                    {/* Banner image shimmer */}
                    <Shimmer className="h-28 sm:h-64 w-full rounded-lg" />

                    {/* Content paragraphs */}
                    <div className="space-y-4">
                        <Shimmer className="h-4 w-full rounded" />
                        <Shimmer className="h-4 w-full rounded" />
                        <Shimmer className="h-4 w-5/6 rounded" />
                        <Shimmer className="h-4 w-full rounded" />
                        <Shimmer className="h-4 w-4/5 rounded" />
                    </div>

                    {/* Content blocks */}
                    <div className="space-y-6">
                        <Shimmer className="h-6 w-1/3 rounded mb-3" />
                        <Shimmer className="h-32 w-full rounded-lg" />

                        <Shimmer className="h-6 w-1/3 rounded mb-3" />
                        <Shimmer className="h-32 w-full rounded-lg" />
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    <Shimmer className="h-64 w-full rounded-lg" />
                    <Shimmer className="h-40 w-full rounded-lg" />
                    <Shimmer className="h-32 w-full rounded-lg" />
                </div>
            </div>

            {/* Popular reports shimmer */}
            <div className="mt-12">
                <Shimmer className="h-6 w-48 rounded mb-6" />
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="space-y-2">
                            <Shimmer className="h-40 w-full rounded-lg" />
                            <Shimmer className="h-4 w-5/6 rounded" />
                            <Shimmer className="h-4 w-2/3 rounded" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
