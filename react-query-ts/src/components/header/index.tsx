import { ReactElement } from "react";
import { MenuItem } from "./MenuItem";
import { Pages } from "state/router";

export function Header(): ReactElement {
  return (
    <header>
      <MenuItem page={Pages.LIST} />
      <MenuItem page={Pages.FAVORITES} />
      <MenuItem page={Pages.EPISODES} />
    </header>
  )
}