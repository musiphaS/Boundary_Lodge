declare module "lucide-react" {
  import { ForwardRefExoticComponent, RefAttributes } from "react"
  import { LucideProps } from "lucide-react"

  type Icon = ForwardRefExoticComponent<LucideProps & RefAttributes<SVGSVGElement>>
  export const Menu: Icon
  export const X: Icon
  export const ChevronDown: Icon;
  export const Wifi: Icon;
  export const Coffee: Icon;
  export const Plane: Icon;
  export const Facebook: Icon;
  export const Instagram: Icon;
  export const Twitter: Icon;

}