import "./Sidebar.css";

const sections = [

"Home",

"Arrays",

"Strings",

"Hashing",

"Sorting",

"Binary Search",

"Stack",

"Queue",

"Linked List",

"Heap",

"Trees",

"Graphs",

"Recursion",

"Backtracking",

"Dynamic Programming",

"Greedy",

"Bit Manipulation",

"Trie",

"Range Structures",

"Advanced"

];

function Sidebar() {

return(

<div className="sidebar">

<h1>📘</h1>

<h2>DSA Bible</h2>

<ul>

{

sections.map(section=>

<li key={section}>

{section}

</li>

)

}

</ul>

</div>

)

}

export default Sidebar;