import React from "react"
import { breakingPoints } from "./Styles"
import { FiMenu, FiX } from "react-icons/fi"
import { useStore } from "./Layout"

export default function TopNav() {
  const { store, toggleNav } = useStore()

  return (
    <div
      css={{
        padding: "20px 20px",
        maxWidth: 1240,
        margin: "0 auto",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        position: "relative",
      }}>
      <div>
        <button
          css={{
            display: "none",
            backgroundColor: "transparent",
            outline: "none",
            border: "none",
            zIndex: 1000,
            [breakingPoints.md]: {
              display: "inherit",
            },
          }}
          onClick={toggleNav}>
          {store.nav ? <FiX size="30px" /> : <FiMenu size="30px" />}
        </button>
      </div>
    </div>
  )
}
