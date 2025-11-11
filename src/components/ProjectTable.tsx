import { allProjects } from "@/content/projects";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const formatCurrency = (value: string) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Number(value));
}

export const ProjectTable = () => {
  const projectsWithRandomData = allProjects.map(p => ({
    ...p,
    marketCap: (Math.floor(Math.random() * (500000 - 10000 + 1)) + 10000).toString(),
    volume: (Math.floor(Math.random() * 1000000)).toString(),
  }));

  return (
    <section id="all-projects" className="py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <Input placeholder="Search..." className="max-w-xs bg-surface border-white/10" />
          <Select defaultValue="7d">
            <SelectTrigger className="w-[180px] bg-surface border-white/10">
              <SelectValue placeholder="Time range" />
            </SelectTrigger>
            <SelectContent className="bg-surface border-white/10 text-text-primary">
              <SelectItem value="7d">7D</SelectItem>
              <SelectItem value="30d">30D</SelectItem>
              <SelectItem value="all">All</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="text-text-secondary border-b border-white/10">
              <tr>
                <th className="p-4">Token</th>
                <th className="p-4 hidden md:table-cell">Price</th>
                <th className="p-4">Change (24H)</th>
                <th className="p-4">Market Cap</th>
                <th className="p-4 hidden lg:table-cell">Volume (24H)</th>
                <th className="p-4 hidden lg:table-cell">Participants</th>
              </tr>
            </thead>
            <tbody>
              {projectsWithRandomData.map(p => (
                <tr key={p.id} className="border-b border-white/5 hover:bg-white/5">
                  <td className="p-4 flex items-center gap-3">
                    <img src={p.avatar} alt={p.name} className="w-8 h-8 rounded-full" />
                    <div>
                      <div className="font-bold">{p.symbol}</div>
                      <div className="text-text-secondary text-sm">{p.name}</div>
                    </div>
                  </td>
                  <td className="p-4 hidden md:table-cell">${p.price}</td>
                  <td className={`p-4 ${p.change! >= 0 ? 'text-accent-green' : 'text-accent-red'}`}>
                    {p.change! >= 0 ? '+' : ''}{p.change}%
                  </td>
                  <td className="p-4">{formatCurrency(p.marketCap)}</td>
                  <td className="p-4 hidden lg:table-cell">{formatCurrency(p.volume!)}</td>
                  <td className="p-4 hidden lg:table-cell">{p.participants?.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};