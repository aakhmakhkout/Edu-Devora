
import {ClockCheck, Mail} from "lucide-react"
import insta from "../assets/instagram.png"
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"
import portfolio from "../assets/portfolio.png"

export const hoursAndEmail = [
    {
      id:1,
      name: "Hours",
      icon: <ClockCheck size={56} strokeWidth={1.5} />,
      description: {
        des1: "Available Mon–Sat, 9AM–6PM",
        des2: "Responses within 24 hours"
      }
    },
    {
      id:2,
      name: "Email",
      icon: <Mail size={56} strokeWidth={1.5} />,
      description: {
        des1: "xymoexyom@gmail.com",
        des2: ""
      }
    }
  ]

  export const logos = [
    {id:1, logo: insta, link: "https://www.instagram.com/aakh_makh_kout/", title:"instagram"},
    {id:2, logo: github, link: "https://www.github.com/aakhmakhkout", title:"github"},
    {id:3, logo: linkedin, link: "https://www.linkedin.com/in/xymoexyom", title:"linked in"},
    {id:4, logo: portfolio, link: "www.linkedin.com/in/xymoexyom", title:"portfolio"}
  ]

