import React from 'react'

import Layout from '../components/layoutWorkshop'
import Drawer from '../components/teamsWorkshop/drawerMenu'
import CreateTeams from '../components/teamsWorkshop/createTeams'
import PlusPoint  from '../components/teamsWorkshop/plusPoint'
import ExcelExport  from '../components/teamsWorkshop/excelExport'

const Administration = () => (
  <Layout>
    <Drawer >
      <PlusPoint />
      <CreateTeams />
      <ExcelExport />
    </Drawer >
  </Layout>
)

export default Administration