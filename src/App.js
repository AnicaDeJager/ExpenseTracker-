import React, { useState } from "react"
import ExpensesList from "./components/Expenses/ExpensesList"
import NewExpense from "./components/NewExpense/NewExpense"

const DUMMY_EXPENSES = [
	{
		id: "e1",
		title: "Makeup",
		amount: 94.12,
		date: new Date(2020, 7, 14),
	},
	{
		id: "e2",
		title: "Laptop",
		amount: 799.49,
		date: new Date(2021, 2, 12),
	},
	{
		id: "e3",
		title: "Jaguar F-type R",
		amount: 2294.67,
		date: new Date(2021, 2, 28),
	},
	{
		id: "e5",
		title: "Bentley",
		amount: 3950,
		date: new Date(2021, 6, 11),
	},
]
const App = () => {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses]
		})
	}

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<ExpensesList items={expenses} />
		</div>
	)
}

export default App
