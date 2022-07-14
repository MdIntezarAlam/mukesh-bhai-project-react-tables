import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableRow, TableHead, Paper } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Layout from '../components/Layout'
import  CustomButton from '../components/CustomButton'
import '../styles/geoTagging.css'

const topbarProps = { title: "Manage GeoTagging", createGeoTaggin: "Create GeoTagging" }
const useStyles = makeStyles({
  table: {
    minWidth: '50pc',
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

const ManageRoles = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <Layout topbarProps={topbarProps}>


      <div className="geotagging_table_container">
        <div className="geotagging_button">
          {/* Button Component */}
    <CustomButton text ="Create GeoTagging"/>
        </div>
        {/* TableComponent */}
        <div className="geotagging_table">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Action</TableCell>
                  <TableCell >Brand Name</TableCell>
                  <TableCell>Pincode</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell><DeleteIcon style={{ marginRight: '15%' }} /> </TableCell>
                  <TableCell>dyeryueretyertyr</TableCell>
                  <TableCell>121542131</TableCell>
                  <TableCell><CheckBoxIcon /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><DeleteIcon style={{ marginRight: '15%' }} /> </TableCell>
                  <TableCell>dyeryueretyertyr</TableCell>
                  <TableCell>121542131</TableCell>
                  <TableCell><CheckBoxIcon /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><DeleteIcon style={{ marginRight: '15%' }} /> </TableCell>
                  <TableCell>dyeryueretyertyr</TableCell>
                  <TableCell>121542131</TableCell>
                  <TableCell><CheckBoxIcon /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><DeleteIcon style={{ marginRight: '15%' }} /> </TableCell>
                  <TableCell>dyeryueretyertyr</TableCell>
                  <TableCell>121542131</TableCell>
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

export default ManageRoles;
