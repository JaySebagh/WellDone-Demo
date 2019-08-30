import React, { useState, useEffect } from "react"
import Header from "../components/Header"
import Seo from "../components/Seo"
import {
  FiEdit,
  FiHelpCircle,
  FiAlertCircle,
  FiCheckCircle,
} from "react-icons/fi"
import Card from "../components/Card"
import { colors, breakingPoints } from "../components/Styles"
import BlankCard from "../components/BlankCard"
import Map from "../components/Map"
import { SunburstChart } from "../components/SunburstChart"
import { LineChart } from "../components/LineChart"

export default function Dashboard({ pumps }) {
  console.log("cache pumps", pumps)
  return (
    <div css={{ width: "100%" }}>
      <Seo title="Dashboard • Welldone" description="" />
      <Header
        title="Insights"
        actions={
          <div>
            <a>Weekly</a>
            <a>Monthly</a>
          </div>
        }
      />
      <div css={{ padding: "20px 20px", maxWidth: 1240, margin: "0 auto" }}>
        {/* Card Section */}
        <div
          css={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}></div>
        {/* Maps and Montior */}
        <div>
          <div
            css={{
              margin: "20px 0",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              gridTemplateRows: "auto 1fr 1fr",
              gridColumnGap: "20px",
              gridRowGap: "20px",
              [breakingPoints.lg]: {
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "auto auto 1fr auto auto",
                gridColumnGap: "20px",
                gridRowGap: "20px",
              },
            }}>
            <Card
              text="Monitor Reports"
              icon={FiEdit}
              value={pumps.length}
              color={colors.brand}
              toggleSummary="View Reports"
              toggle={<h3>Content</h3>}
              css={{
                gridArea: "1 / 1 / 2 / 2",
                [breakingPoints.lg]: {
                  gridArea: "1 / 1 / 2 / 2",
                },
              }}
            />
            <Card
              text="Functional"
              icon={FiCheckCircle}
              value={pumps.filter(pump => pump.status === 2).length}
              color={colors.success}
              progress={Math.ceil(
                (pumps.filter(pump => pump.status === 2).length /
                  pumps.length) *
                  100,
              )}
              css={{
                gridArea: "1 / 2 / 2 / 3",
                [breakingPoints.lg]: {
                  gridArea: "1 / 2 / 2 / 3",
                },
              }}
            />
            <Card
              text="Non-Functional"
              icon={FiAlertCircle}
              value={pumps.filter(pump => pump.status === 0).length}
              color={colors.danger}
              progress={Math.ceil(
                (pumps.filter(pump => pump.status === 0).length /
                  pumps.length) *
                  100,
              )}
              css={{
                gridArea: "1 / 3 / 2 / 4",
                [breakingPoints.lg]: {
                  gridArea: "2 / 1 / 3 / 2",
                },
              }}
            />
            <Card
              text="Unknown"
              icon={FiHelpCircle}
              value={pumps.filter(pump => pump.status === 1).length}
              color={colors.orange}
              progress={Math.ceil(
                (pumps.filter(pump => pump.status === 1).length /
                  pumps.length) *
                  100,
              )}
              css={{
                gridArea: "1 / 4 / 2 / 5",
                [breakingPoints.lg]: {
                  gridArea: "2 / 2 / 3 / 3",
                },
              }}
            />
            <div
              css={{
                gridArea: "2 / 1 / 4 / 4",
                [breakingPoints.lg]: {
                  gridArea: "3 / 1 / 4 / 3",
                },
              }}>
              <BlankCard style={{ padding: "10px " }}>
                {/* <Map
                  status1={status1}
                  status2={status2}
                  status3={status3}
                  status4={status4}
                  status5={status5}
                  status6={status6}
                  status7={status7}
                  status8={status8}
                /> */}
              </BlankCard>
            </div>
            <div
              css={{
                gridArea: "2 / 4 / 3 / 5",
                [breakingPoints.lg]: {
                  gridArea: "4 / 1 / 5 / 3",
                },
              }}>
              <BlankCard style={{ height: 300 }}>
                <SunburstChart />
              </BlankCard>
            </div>
            <div
              css={{
                gridArea: "3 / 4 / 4 / 5",
                [breakingPoints.lg]: {
                  gridArea: "5 / 1 / 6 / 3",
                },
              }}>
              <BlankCard style={{ height: 300 }}>
                {/* <LineChart /> */}
                <h2>well data here</h2>
              </BlankCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Dashboard.getInitialProps = async () => {
  const { pumps } = require("../assets/cache/pumps.json")
  return { pumps }
}
