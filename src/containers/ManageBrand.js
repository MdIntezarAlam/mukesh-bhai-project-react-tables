import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableRow, TableHead, Paper } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Layout from '../components/Layout'
import '../styles/managebrand.css'
import { FlipToBack } from '@material-ui/icons';
import b from '../images/b.png'
import a from '../images/a.jpg'
import d from '../images/d.jpg'
import e from '../images/e.jpg'
import CustomButton from '../components/CustomButton'
const topbarProps = { title: "Manage Brand", createbrand: "Create Brand" }
const useStyles = makeStyles({
  table: {
    minWidth: '30pc',
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

const ManageBrand = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <Layout topbarProps={topbarProps}>

      <div className="managebrand_table_container">
        {/* Button Component */}
        <div className="managebrand_button">
       <CustomButton text = "Create Brand"/>
        </div>
        {/* Table Component */}
        <div className="managebrand_table">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell >Action</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell><DeleteIcon /><OpenInNewIcon /> </TableCell>
                  <TableCell>dyeryueretyertyr</TableCell>
                  <TableCell>
                    <img src={a} alt="" className='all_img' />
                  </TableCell>
                  <TableCell><CheckBoxIcon /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><DeleteIcon /><OpenInNewIcon /> </TableCell>
                  <TableCell>dyeryueretyertyr</TableCell>
                  <TableCell>
                    <img src={b} alt="" className='all_img' />
                  </TableCell>
                  <TableCell><CheckBoxIcon /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><DeleteIcon /><OpenInNewIcon /> </TableCell>
                  <TableCell>dyeryueretyertyr</TableCell>
                  <TableCell>
                    <img src={d} alt="" className='all_img' />
                  </TableCell>
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

export default ManageBrand;
