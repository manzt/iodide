import React from 'react'

import NotebookIconMenu from './icon-menu'
import tasks from '../../task-definitions'
import NotebookMenuItem from './notebook-menu-item'
import NotebookMenuDivider from './notebook-menu-divider'

import CellMenuSubsection from './cell-menu-subsection'
import SavedNotebooksAndExamplesSubsection from './saved-notebooks-and-examples-subsection'
import ViewModeToggleSubsection from './view-mode-toggle-subsection'

export default class EditorToolbarMenu extends React.Component {
  render() {
    return (
      <NotebookIconMenu>
        <NotebookMenuItem task={tasks.createNewNotebook} />
        <NotebookMenuItem task={tasks.saveNotebook} />
        <NotebookMenuItem task={tasks.exportNotebook} />

        <SavedNotebooksAndExamplesSubsection />

        <CellMenuSubsection />

        <NotebookMenuDivider />

        <ViewModeToggleSubsection />

        <NotebookMenuDivider />

        <NotebookMenuItem task={tasks.fileAnIssue} />
      </NotebookIconMenu>

    )
  }
}

// function createMenuItem(task) {
//   return (<MenuItem
//     key={task.title}
//     style={{ fontSize: '13px' }}
//     primaryText={task.menuTitle}
//     secondaryText={task.displayKeybinding}
//     onClick={task.callback}
//   />)
// }

// class AnotherItem extends MenuItem {
//   constructor(props) {
//     const newProps = Object.assign(props,  {
//       key: props.task.title,
//       style: { fontSize: '13px' },
//       primaryText: props.task.menuTitle,
//       secondaryText: props.task.menuTitle
//     })
//     super(newProps)
//   }

//   render() { return { super.render() } }
// }


// export default class EditorToolbarMenu extends React.Component {
//   render() {
//     return (
//       <IconMenu
//         iconButtonElement={<IconButton><MenuIcon color={grey50} /></IconButton>}
//         anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
//         targetOrigin={{ horizontal: 'left', vertical: 'top' }}
//         desktop
//         className="menu-button"
//       >
//         {createMenuItem(tasks.toggleHistoryPane)}
//         <MenuItem
//           primaryText="test ..."
//           rightIcon={<ArrowDropRight />}
//           menuItems={[createMenuItem(tasks.saveNotebook)]}
//         />
//       </IconMenu>

//     )
//   }
// }

// export default class EditorToolbarMenu extends React.Component {
//   render() {
//     return (
//       <IconMenu
//         iconButtonElement={<IconButton><MenuIcon color={grey50} /></IconButton>}
//         anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
//         targetOrigin={{ horizontal: 'left', vertical: 'top' }}
//         desktop
//         className="menu-button"
//       >
//         <AnotherItem task={tasks.toggleHistoryPane} />
//         <MenuItem
//           primaryText="test ..."
//           rightIcon={<ArrowDropRight />}
//           menuItems={[createMenuItem(tasks.saveNotebook)]}
//         />
//       </IconMenu>

//     )
//   }
// }
