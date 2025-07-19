export default function Shimmer({ className }) {
    return (
        <div className={`relative overflow-hidden bg-gray-200 ${className}`}>
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
        </div>
    )
}
