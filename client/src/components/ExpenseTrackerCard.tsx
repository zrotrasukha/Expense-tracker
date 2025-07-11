import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@components/ui/card"

type propType = {
    totalSpent: number | undefined;
    error: Error | null;
    isPending: boolean;
}
export default function ExpenseTrackerCard(prop: propType) {
   return (
    <Card className="min-w-md h-auto max-w-none w-xl mx-auto bg-zinc-800 text-white shadow-lg rounded-lg">
        <CardHeader>
            <CardTitle>Expense Tracker</CardTitle>
            <CardDescription>Track your daily expenses and manage your budget.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="text-2xl">{prop.totalSpent}</div>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                    <span className="font-medium">Total Spent:</span>
                    {prop.isPending && <span>Loading...</span>}
                    {prop.error && <span>Error: {prop.error.message}</span>}
                    <span>${prop.totalSpent}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Budget:</span>
                    <span>$0.00</span>
                </div>
            </div>
        </CardContent>
        <CardFooter>
            <CardAction>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                    Add Expense
                </button>
            </CardAction>
        </CardFooter>
    </Card>
   )
}


