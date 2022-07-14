import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableRow, TableHead, Paper } from '@material-ui/core';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CustomButton from '../components/CustomButton'
import Layout from '../components/Layout'
import '../styles/managelocation.css'

const topbarProps = { title: "Manage Locations", createLocation: "Create Location" }
const useStyles = makeStyles({
  table: {
    minWidth: '70pc',
  },
});
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const ManageLocation = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <Layout topbarProps={topbarProps}>

      <div className="managelocation_table_container">
        {/* Button Component */}
        <div className="managelocation_button">
          <CustomButton text = "Create Location"/>
        </div>
        {/* Table Component */}
        <div className="managelocation_table">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead >
                <TableRow >
                  <TableCell >Action</TableCell>
                  <TableCell>Long Name</TableCell>
                  <TableCell>Short Name</TableCell>
                  <TableCell>Country</TableCell>
                  <TableCell>State</TableCell>
                  <TableCell>City</TableCell>
                  <TableCell>Phone Number</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell><DeleteIcon className='location-icon' /><OpenInNewIcon /> </TableCell>
                  <TableCell>dyeryueretyertyr</TableCell>
                  <TableCell>sdeytue</TableCell>
                  <TableCell>India</TableCell>
                  <TableCell>Bihar</TableCell>
                  <TableCell>fgdg</TableCell>
                  <TableCell>11561021651</TableCell>
                  <TableCell><CheckBoxIcon /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><DeleteIcon className='location-icon' /><OpenInNewIcon /> </TableCell>
                  <TableCell>dyeryueretyertyr</TableCell>
                  <TableCell>sdeytue</TableCell>
                  <TableCell>India</TableCell>
                  <TableCell>Bihar</TableCell>
                  <TableCell>fgdg</TableCell>
                  <TableCell>11561021651</TableCell>
                  <TableCell><CheckBoxIcon /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><DeleteIcon className='location-icon' /><OpenInNewIcon /> </TableCell>
                  <TableCell>dyeryueretyertyr</TableCell>
                  <TableCell>sdeytue</TableCell>
                  <TableCell>India</TableCell>
                  <TableCell>Bihar</TableCell>
                  <TableCell>fgdg</TableCell>
                  <TableCell>11561021651</TableCell>
                  <TableCell><CheckBoxIcon /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><DeleteIcon className='location-icon' /><OpenInNewIcon /> </TableCell>
                  <TableCell>dyeryueretyertyr</TableCell>
                  <TableCell>sdeytue</TableCell>
                  <TableCell>India</TableCell>
                  <TableCell>Bihar</TableCell>
                  <TableCell>fgdg</TableCell>
                  <TableCell>11561021651</TableCell>
                  <TableCell><CheckBoxIcon /></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </Layout>
  );
}

export default ManageLocation;
