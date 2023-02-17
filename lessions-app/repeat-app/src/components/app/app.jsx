import AppInfo from "../app-info/app-info";
import SearchPanel from "../app-search-panel/app-search-panel";
import EmployeeFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../app-employees-add-form/app-employees-add-form";

// Plugins

import { v4 as uuidv4 } from "uuid";

// css-styles

import "./app.css";
import { useState } from "react";

// database

const App = () => {
  const [term, setTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [data, setData] = useState([
    {
      name: "John Klarc",
      salary: 5000,
      increase: true,
      like: false,
      id: uuidv4(),
    },
    {
      name: "John Smith",
      salary: 900,
      increase: true,
      like: false,
      id: uuidv4(),
    },
    {
      name: "Kiryl Shchasny",
      salary: 1200,
      increase: false,
      like: true,
      id: uuidv4(),
    },
    {
      name: "Brett Pitt",
      salary: 3000,
      increase: false,
      like: false,
      id: uuidv4(),
    },
  ]);

  const onUpdateSalary = (value, id) => {
    return setData((data) => {
      return data.map((item) => {
        if (item.id === id) {
          return { ...item, salary: value };
        }
        return item;
      });
    });
  };

  const onDeleteItem = (uniq) => {
    return setData((data) => {
      const ind = data.findIndex(({ id }) => id === uniq);
      const before = data.slice(0, ind);
      const after = data.slice(ind + 1);

      const arr = [...before, ...after];

      return arr;
    });
  };

  const onAddNewEmplo = (e, name, salary) => {
    e.preventDefault();
    setData((data) => {
      return [
        ...data,
        {
          name: name,
          salary: salary,
          increase: false,
          like: false,
          id: uuidv4(),
        },
      ];
    });
  };

  const onToggleIncrease = (id) => {
    setData((data) => {
      return data.map((elem) => {
        if (elem.id === id) {
          return { ...elem, increase: !elem.increase };
        }
        return { ...elem };
      });
    });
  };

  const onToggleLike = (id) => {
    setData((data) => {
      return data.map((el) => {
        if (el.id === id) {
          return { ...el, like: !el.like };
        }
        return el;
      });
    });
  };

  const displayTotal = () => {
    return data.length;
  };

  const displayAwards = () => {
    return data.filter((el) => el.increase).length;
  };

  const onSearchEmplo = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => item.name.indexOf(term) > -1);
  };

  const updateSearchTerm = (term) => {
    setTerm(term);
  };

  const updateFilterTerm = (filter) => {
    setFilter(filter);
  };

  const onEmploFilters = (filter, data) => {
    switch (filter) {
      case "awards":
        return data.filter((item) => item.increase);
      case "over":
        return data.filter((item) => item.salary > 1000);
      default:
        return data.filter((item) => item);
    }
  };

  const visibleData = onEmploFilters(filter, onSearchEmplo(data, term));

  return (
    <main className="app">
      <section>
        <AppInfo displayTotal={displayTotal} displayAwards={displayAwards} />
      </section>

      <section className="app-search-panel">
        <SearchPanel updateSearchTerm={updateSearchTerm} />
        <EmployeeFilter updateFilterTerm={updateFilterTerm} />
      </section>

      <section className="employees-list">
        <EmployeesList
          data={visibleData}
          onDelete={onDeleteItem}
          onToggleIncrease={onToggleIncrease}
          onToggleLike={onToggleLike}
          onUpdateSalary={onUpdateSalary}
        />
      </section>

      <section>
        <EmployeesAddForm onSubmitItem={onAddNewEmplo} />
      </section>
    </main>
  );
};

export default App;
