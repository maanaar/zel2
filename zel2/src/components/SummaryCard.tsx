type SummaryCardProps = {
  title: string;
  items: string[];
};

export default function SummaryCard({ title, items }: SummaryCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow col-span-1">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-bold text-gray-900">{title}</h3>
        <button className="text-xs text-gray-500 hover:underline">See all</button>
      </div>
      <ol className="text-sm text-gray-700 space-y-1">
        {items.map((item, index) => (
          <li key={index}>{index + 1}. {item}</li>
        ))}
      </ol>
    </div>
  );
}
