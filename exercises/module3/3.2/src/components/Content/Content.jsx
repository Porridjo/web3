import Part from "components/Part/Part"

const Content = ({ parts }) => {
    return (
      <div>
        <ul>
          { parts.map((part) => 
            <Part key={part.id} part={part.name} exercises={part.exercises}/>
          )}
        </ul>
      </div>
    )
}
  
export default Content