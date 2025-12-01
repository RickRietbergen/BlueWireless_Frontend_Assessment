# Q6: State vs Props in React

Explain the difference between state and props in React.

Your answer here.

**Props**
- Are passed from a parent component to a child component.
- Are read-only inside the child component (you cannot modify props).
- Are used to send data/configuration to components.

**State**
- Is local data managed within a component (for example via useState).
- Can be updated by that component (setState).
- Changes to state trigger a re-render of the component.

**Short example**
- A TodoList receives the list as props from a higher-level component.
- A TodoItem may have local state to track whether the item is selected/being edited.

**In summary:** props = input (from the outside), state = internally changeable data.