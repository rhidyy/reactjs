import Counter from "./components/Counter"
import Heading from "./components/Heading"
import Paragraph from "./components/Paragraph"


function App() {
  return (
    <>
    <Heading content="First"></Heading>
    <Heading content="Second"></Heading>
    <Heading content="Third"></Heading>

    <Paragraph>
      Counting one, two, three.
    </Paragraph>

    <Counter/>
    </>
  )
}

export default App
