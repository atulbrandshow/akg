import React from 'react'

const HighlightsSection = ({ data }) => {
    const stats = []
    for (let i = 1; i <= 10; i++) {
        const title = data?.[`Highlight-Title-${i}`]
        const desc = data?.[`Highlight-Desc-${i}`]

        if (title && desc) {
            stats.push({
                title,
                desc
            })
        }
    }

    return (
        <section className="w-full bg-primary text-center">
            <div className="max-w-7xl mx-auto px-3">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 px-4">
                    {stats.map((item, i) => (
                        <div
                            key={i}
                            className={`py-6 flex flex-col justify-center px-4 text-center ${i % 2 === 0 ? 'bg-primary text-white' : 'bg-secondary'}`}
                        >
                            <h3 className="md:text-4xl sm:text-3xl text-2xl font-novaBold mb-2">{item.title}</h3>
                            <p className="text-sm font-novaReg mb-8">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HighlightsSection