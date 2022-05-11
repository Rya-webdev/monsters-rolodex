import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  const [searchField, setsearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setsearchField(searchFieldString);
  };

  return (
    <div className="App ">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search Monsters"
        className="searchBox"
      />
      <CardList monsters={filteredMonsters} className="card-list" />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((users) => this.setState({ monsters: users }));
//   }

// onSearchChange = (e) => {
//   const searchField = e.target.value.toLocaleLowerCase();
//   this.setState(() => {
//     return { searchField };
//     // By just putting in { searchField } es6 will put 'searchField' as both the key and the value (KEY being this.state.searchField )
//   });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

// const filteredMonsters = monsters.filter((monster) => {
//   return monster.name.toLocaleLowerCase().includes(searchField);
// });

// return (
//   <div className="App ">
//     <h1 className="app-title">Monsters Rolodex</h1>

//     <SearchBox
//       onChangeHandler={onSearchChange}
//       placeholder="Search Monsters"
//       className="searchBox"
//     />
//     <CardList monsters={filteredMonsters} className="card-list" />
//   </div>
// );
//   }
// }

export default App;
