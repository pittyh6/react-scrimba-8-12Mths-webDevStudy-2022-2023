ReactDOM.render(<h1>Hi, darling</h1>, document.getElementById("root"))

ReactDOM.render(<h1>By memory</h1>, document.getElementById("memory"))

/*Render an ul with 2+ li's*/
ReactDOM.render(
    <ul>
        <li>List 1</li>
        <li>List 2</li>
    </ul>,
    document.getElementById('list')
)

//------------
//Challenge 6 - create a component
function TopContent() {
    return (
        <p>Top content</p>
    )
}
function MainContent() {
    return (
        <h1> main content</h1>
    )
}
ReactDOM.render( // render the component
    <div>
        <TopContent />
        <MainContent />
    </div>,
    document.getElementById('mainContent')
)

//------------

//Challenge 7 - create a component with vanilla JS
//imperative
const challenge3 = document.getElementById("challenge7");
const newEleH1 = document.createElement("h1")
newEleH1.textContent = "Challenge 7 - imperative"
newEleH1.classList.add("header")
challenge3.appendChild(newEleH1)
//declarative
ReactDOM.render(<h1 className='header'>Challenge 7 - declarative</h1>, document.getElementById("challenge7"))


//------------
// lesson 8
// render only one jsx element, you can wrap everything you want to in a div,
// you can have as many child you want to,
// but only one parent per time of render
ReactDOM.render(
    <div className='wrap'>
        <h1>First child</h1>
        <p>Second Child </p>
    </div>, document.getElementById("lesson8")
)

// insert you element as a variable
const page = (
    <div className='wrap'>
        <h1>Const - First child</h1>
        <p>Const - Second Child </p>
    </div>
)
ReactDOM.render(
    page, document.getElementById("lesson8-1")
)
console.log(page)

// challenge 8
/*
Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/
const navBar = (
    <nav>
        <h1>Pittyh6</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)
ReactDOM.render(navBar, document.getElementById("challenge8"))


//------------
// lesson 9