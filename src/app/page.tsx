import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/icons";
import { PieChart } from "@/components/ui/chart";
import { Badge } from "@/components/ui/badge";

const data = [
  { name: 'Groceries', value: 400, color: 'hsl(var(--chart-1))' },
  { name: 'Entertainment', value: 300, color: 'hsl(var(--chart-2))' },
  { name: 'Utilities', value: 300, color: 'hsl(var(--chart-3))' },
  { name: 'Transportation', value: 200, color: 'hsl(var(--chart-4))' },
  { name: 'Other', value: 100, color: 'hsl(var(--chart-5))' },
];

export default function Home() {
  const totalSpending = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="container py-10">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Spending</CardTitle>
            <Icons.wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold"> ${totalSpending}</div>
            <p className="text-xs text-muted-foreground">This Month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Budget Remaining</CardTitle>
            <Icons.creditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold"> $750</div>
            <p className="text-xs text-muted-foreground">Out of $2000</p>
          </CardContent>
        </Card>
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Spending Categories</CardTitle>
            <CardDescription>Monthly breakdown of spending</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <PieChart
              data={data}
              dataKey="value"
              nameKey="name"
              fill="color"
              label="name"
            />
          </CardContent>
        </Card>
      </div>
      <div className="my-10">
        <h2 className="text-2xl font-bold mb-4">Recent Expenses</h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <Card key={item.name}>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">${item.value}</div>
                <Badge variant="secondary">Category</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
function CardDescription(props: { children: React.ReactNode; className?: string; }) {
  return (<div className="text-sm text-muted-foreground">
    {props.children}
  </div>);
}
