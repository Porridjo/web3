import { useState } from "react"
import { Input, Button } from 'antd';

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

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        
        <div>
          content
          <Input name='content' value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <div>
          author
          <Input name='author' value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div>
          url for more info
          <Input name='info' value={info} onChange={(e)=> setInfo(e.target.value)} />
        </div>
        <Button type="Primary" htmlType="submit">Primary Button</Button>
      </form>
    </div>
  )

}

export default CreateNew