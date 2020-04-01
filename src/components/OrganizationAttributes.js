import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBox,
  faUsers,
  faBuilding,
  faLocationArrow,
  faHandHoldingUsd,
  faSearchDollar,
  faHandshake,
  faMoneyCheck,
} from "@fortawesome/free-solid-svg-icons"
import SidebarSectionList from "./SidebarSectionList"
import Tag from "./Tag"

export const OrganizationCategory = ({ text }) => (
  <SidebarSectionList.Item
    text={text}
    icon={<FontAwesomeIcon icon={faBox} />}
  />
)

export const OrganizationLocation = ({ text }) => (
  <SidebarSectionList.Item
    text={text}
    icon={<FontAwesomeIcon icon={faLocationArrow} />}
  />
)

export const OrganizationHeadcount = ({ text }) => (
  <SidebarSectionList.Item
    text={text}
    icon={<FontAwesomeIcon icon={faUsers} />}
  />
)

export const OrganizationOrgType = ({ text, ...props }) => (
  <Tag {...props}>
    <FontAwesomeIcon icon={faBuilding} className="mr-1" />
    {text}
  </Tag>
)

export const OrganizationCapitalType = ({ text, ...props }) => (
  <Tag {...props}>
    <FontAwesomeIcon icon={faHandHoldingUsd} className="mr-1" />
    {text}
  </Tag>
)

export const OrganizationCapitalStrategic = ({ text, ...props }) => (
  <Tag {...props}>
    <FontAwesomeIcon icon={faHandshake} className="mr-1" />
    Strategic
  </Tag>
)

export const OrganizationCapitalStage = ({ text, ...props }) => (
  <Tag {...props}>
    <FontAwesomeIcon icon={faSearchDollar} className="mr-1" />
    {text}
  </Tag>
)

export const OrganizationCapitalCheckSize = ({ text, ...props }) => (
  <Tag {...props}>
    <FontAwesomeIcon icon={faMoneyCheck} className="mr-1" />
    {text}
  </Tag>
)
