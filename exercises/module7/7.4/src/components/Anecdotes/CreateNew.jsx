import { useState } from "react"
import { Input, Button, Form } from 'antd';

const CreateNew = (props) => {
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')
  const [info, setInfo] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content,
      author,
      info,
      votes: 0
    })
  }

  const onFinish = (values) => {
    props.addNew({
      ...values,
      votes: 0
    })
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <Form name="newAnecdote" onFinish={onFinish}>
        
        <Form.Item
          label="content"
          name="content"
          rules={[
            {
              required: true,
              message: 'Please input your content'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="author"
          name="author"
          rules={[
            {
              required: true,
              message: 'Please input an author'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="url for more info"
          name="info"
          rules={[
            {
              required: true,
              message: 'Please input an url'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">create</Button>
        </Form.Item>  
      </Form>
    </div>
  )

}

export default CreateNew