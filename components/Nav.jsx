import React, { useState } from "react"
import Link from "next/link"
import {
  FiMenu,
  FiLogOut,
  FiBarChart2,
  FiEdit,
  FiSettings,
} from "react-icons/fi"
import { colors, breakingPoints } from "./Styles"
import { useStore } from "./Layout"
import Image from 'next/image'

const nav = [
  {
    name: "Dashboard",
    link: "/dashboard",
    id: "tour-dashboard",
    content: "Dashboard Here",
    icon: FiMenu,
  },
  {
    name: "Monitors",
    link: "/monitors",
    id: "tour-monitors",
    content: "Monitors Here",
    icon: FiBarChart2,
  },
  {
    name: "Reports",
    link: "/reports",
    id: "tour-reports",
    content: "Reports Here",
    icon: FiEdit,
  },
]

export default function Nav() {
  const { store, toggleNav } = useStore()
  return (
    <>
      {store.nav ? (
        <div
          onClick={() => toggleNav(false)}
          css={{
            [breakingPoints.md]: {
              position: "absolute",
              backgroundColor: "black",
              opacity: 0.2,
              top: 0,
              left: 0,
              right: 0,
              zIndex: 10000,
              height: "100%",
            },
          }}></div>
      ) : null}
      <div
        css={{
          boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
          position: "fixed",
          minHeight: "100vh",
          backgroundColor: colors.brand,
          [breakingPoints.md]: {
            transition: ".2s",
            position: "fixed",
            zIndex: 99999,
            marginLeft: store.nav ? 0 : -250,
          },
        }}>
        <Link href="/">
          <div style={{ margin: '50px 20px' }}>
            <Image className="avatar" src={'/static/LOGO.png'} width={200} height={41.75} />
          </div>
        </Link>
        <div
          css={{
            color: "white",
            a: {
              fontSize: 20,
              marginLeft: 10,
            },
          }}>
          {nav.map(({ name, link, id, icon: Icon }) => {
            return (
              <Link href={link}>
                <div
                  id={id}
                  className={id}
                  onClick={() => toggleNav(false)}
                  css={{
                    padding: "10px 25px",
                    cursor: "pointer",
                    ":hover": {
                      backgroundColor: colors.btnHover,
                    },
                  }}>
                  {Icon ? <Icon /> : null}
                  <a>{name}</a>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}