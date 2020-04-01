import React from "react"

import classnames from "classnames"

function Item({ icon, text }) {
  return (
    <li className="flex flex-row mt-6">
      <div className="mr-3 text-gray-700">{icon}</div>
      <div className="text-base">{text}</div>
    </li>
  )
}

/**
 * Defines a section on the sidebar that is displayed as a list and have Item as children.
 */
function SidebarSectionList({ title, children, className }) {
  return (
    <div className={classnames(className)}>
      <div className="uppercase font-serif text-sm">{title}</div>
      <ul className="mt-4">{children}</ul>
    </div>
  )
}

SidebarSectionList.Item = Item

export default SidebarSectionList
