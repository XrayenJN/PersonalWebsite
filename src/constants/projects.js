import { RxArchive } from "react-icons/rx";

import WarehouseIcon from "../assets/warehouse.png";
import TeamManagementIcon from "../assets/teammanagement.png";
import DocReminderIcon from "../assets/docreminder.png";
import BookPileIcon from "../assets/bookpile.png";
import GameIcon from "../assets/discord.png";

export const ProjectsData = [
  {
    icon: WarehouseIcon,
    title: "Warehourse System",
    content: "Kotlin",
    description: "Work-In-Progress.",
    githubLink: ""
  },
  {
    icon: TeamManagementIcon,
    title: "Team Management System",
    content: "React, Express, Firebase",
    description: "In short, it is like Github Project / Jira Replica. However, it provides 4 kind of view such as kanban board, calendar, list, and timeline view.",
    githubLink: "https://github.com/XrayenJN/TaskManagementApplication"
  },
  {
    icon: DocReminderIcon,
    title: "Document Reminder",
    content: "React, Firebase",
    description: "The system provides a reminder to the client about a particular listing. Any notification will be sent through email.",
    githubLink: ""
  },
  {
    icon: BookPileIcon,
    title: "MMO Games Library",
    content: "Swift, Firebase",
    description: "iOS mobile application by using core data and external API from mmobomb.com itself.",
    githubLink: "https://github.com/XrayenJN/MMOGamesLibrary"
  },
  {
    icon: GameIcon,
    title: "Nine Man Morris Game",
    content: "Java, Swing",
    description: "Nine Man Morris game by prioritizing the engine architecture than the UI component.",
    githubLink: "https://github.com/XrayenJN/NineManMorris"
  },
]