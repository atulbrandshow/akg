const stats = [
  { text: 'Fortune Global', description: 'Plethora of Global Fortune MNC\'s awaiting you', value: '62' },
  { text: 'Fortune India', description: 'Earn best placement packages within Country\'s top Industries', value: '82' },
  { text: 'Placements', description: 'Highest Package Offered', value: '1.13', unit: 'CR' },
  { text: 'Amazon', description: 'Students selected by Amazon', value: '37+' },
  { text: 'Patents', description: 'filed successfully till date', value: '5500+' },
];
export default function FooterCard({ data }) {
  const d = data?.pageData;

  const stats = [];

  for (let i = 1; i <= 10; i++) {
    const rawValue = d?.[`Stats-Value-${i}`];
    const text = d?.[`Stats-Title-${i}`];
    const description = d?.[`Stats-Desc-${i}`];

    if (rawValue && text && description) {
      // Extract numeric value and unit (e.g., "1.13 Cr" => "1.13", "Cr")
      const match = rawValue.match(/^([\d.,]+)\s*([^\d\s]+)?$/);
      const numericValue = match?.[1] || rawValue;
      const unit = match?.[2] || "";

      stats.push({
        value: numericValue,
        unit,
        text,
        description
      });
    }
  }


  return (
    <div className="bg-blue-600">
      <div className="mx-auto max-w-7xl px-32 max-md:px-10 max-sm:px-3 ">
        <div className="grid grid-cols-5 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:gap-2">
          {stats?.map((stat, index) => (
            <div key={index} className="px-2 py-6 rounded-lg max-sm:py-3">
              <p className="mt-2 flex items-baseline gap-1 max-sm:mt-1">
                <span className="text-3xl lg:text-4xl font-novaLight tracking-tight text-white">{stat.value}</span>
                {stat.unit ? <span className="text-xs md:text-sm 2xl:text-xl uppercase font-novaLight text-white">{stat.unit}</span> : null}
              </p>
              <p className="mt-2 text-sm md:text-sm font-medium 2xl:text-base font-novaReg text-white max-sm:mt-1">{stat.text}</p>
              <p className="mt-2 text-xs md:text-sm font-light text-white font-novaReg max-md:leading-4 max-sm:mt-1">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
