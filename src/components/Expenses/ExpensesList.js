import ExpenseItem from "./ExpenseItem"
import "./ExpensesList.css"
import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter"
import { useState } from "react"
import ExpensesChart from "./ExpensesChart"

const ExpensesList = (props) => {
	const [filteredYear, setFilteredYear] = useState("2020")

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear)
	}

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear
	})

	let expensesContent = <p>No expenses found.</p>

	if (filteredExpenses.length > 0) {
		expensesContent = filteredExpenses.map((expense) => (
			<ExpenseItem
				key={expense.id}
				title={expense.title}
				amount={expense.amount}
				date={expense.date}
			/>
		))
	}

	return (
		<>
			<Card className="expenses">
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				{expensesContent}
			</Card>
		</>
	)
}

export default ExpensesList
