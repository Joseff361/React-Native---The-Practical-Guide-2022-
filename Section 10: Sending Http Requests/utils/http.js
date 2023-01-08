import axios from 'axios';

const baseUrl = 'https://react-native-course-3b91d-default-rtdb.firebaseio.com';

export async function storeExpense(expenseData) {
  // The json extension is required by firebase to understand
  // we are targeting a specific node in the database
  const response = await axios.post(`${baseUrl}/expenses.json`, expenseData);
  const id = response.data.name; // auto-generated id

  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(`${baseUrl}/expenses.json`);

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };

    expenses.push(expenseObj);
  }

  return expenses;
}

export function updateExpense(id, expenseData) {
  return axios.put(`${baseUrl}/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id) {
  return axios.delete(`${baseUrl}/expenses/${id}.json`);
}
