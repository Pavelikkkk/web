Stud-react
1
===============================================================================================================================================
The Document Object Model, or DOM for short, is a programming interface that represents web documents. Essentially, it creates a structured representation of a web page, allowing programs to interact with and modify the document’s structure, style, and content dynamically. In simpler terms, the DOM enables developers to manipulate web pages using languages like HTML, CSS, and JavaScript.
(https://medium.com/@AyushmanPranav/what-is-reactdom-and-how-it-enhances-web-development-b32d6b19527e)

js and jsx
   React.createElement('button', {}, 'fdsfsdfsdfsf')

  <div>
    dasdasda
  </div>

Why App.js is Created First, Then Rendered into index.html:
Separation of Concerns:

React encourages a component-based architecture. The App.js file defines the root component (App), which encapsulates the entire UI of your application.

The index.html file is a static HTML file that serves as the entry point for your application. It contains a div with an ID (e.g., root) where the React application will be injected.

Dynamic Rendering:

React dynamically renders the App component (and its children) into the root element in index.html. This allows React to manage the DOM efficiently and update it as needed when the state or props change.

Состояния

 const [count , countChange] = useState(0); // for ponimania reacty that this components need to change 
                                            // without it it would understand that components button change and it can 
                                            // check in console.log()
                                            // in console.log() we watch that count increase but on page nothing change because react dont understand that something hapeen
  
  function decrease()
  {
    countChange(count - 1)
  }

  function increase()
  {
    countChange(count + 1)
  }

  return ( 
    <div> 
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button> // "{....}" link not a method
      <button onClick={decrease}>Decrease</button> 
    </div>
    







===============================================================================================================================================
2
===============================================================================================================================================

classes
https://chefvivica.medium.com/what-are-classes-for-in-programming-an-answer-for-beginners-48263966968
Classes can have a constructor method, which is called when a new object is created from the class. It is used to initialize properties.
hooks
https://wangyeux.medium.com/what-are-react-hooks-and-how-to-use-them-e202553eacc4

{posts.map((post) =>
        <Text post={post} key={post.id}/>
      )}
    </div>
keys in react provide react app to see that it component changed
const TextList = ({posts, title}) => destructure
const TextList = (props) => 

