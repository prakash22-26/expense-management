import React, { useState } from 'react'
import { Form, Input, Modal, Select } from 'antd'
import Layout from './layout/Layout'

function Home() {
  const [showModal, setShowModal] = useState(false)
  const [transactions, setTransactions] = useState([])

  const handleSubmit = (values) => {
    setTransactions([...transactions, values]) 
    setShowModal(false) 
  }

  return (
    <Layout>
      <div className="filters">
        <div>range filters</div>
        <div>
          <button className="btn btn-primary" onClick={() => setShowModal(true)}>Add New</button>
        </div>
      </div>
      <div className="content">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.date}</td>
                <td>{transaction.type}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.category}</td>
                <td>{transaction.description}</td>
                <td>
                  <button className="btn btn-danger">Delete</button> 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        title="Add Transaction"
        open={showModal}
        onCancel={() => setShowModal(false)}
        footer={false}
      >
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Amount" name="amount">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Type" name="type">
            <Select>
              <Select.Option value="income">Income</Select.Option>
              <Select.Option value="expense">Expense</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Category" name="category">
            <Select>
              <Select.Option value="salary">Salary</Select.Option>
              <Select.Option value="tip">Tip</Select.Option>
              <Select.Option value="project">Project</Select.Option>
              <Select.Option value="food">Food</Select.Option>
              <Select.Option value="movie">Movie</Select.Option>
              <Select.Option value="bills">Bills</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Date" name="date">
            <Input type="date" />
          </Form.Item>
          <Form.Item label="Reference" name="reference">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input type="text" />
          </Form.Item>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">Save</button>
          </div>
        </Form>
      </Modal>
    </Layout>
  )
}

export default Home
