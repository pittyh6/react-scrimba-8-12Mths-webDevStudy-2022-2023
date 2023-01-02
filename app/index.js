ReactDOM.render(<h1>Hiiii, darling</h1>, document.getElementById("root"))

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
//Challenge 2 - create a component
function TopContent(){
    return(
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