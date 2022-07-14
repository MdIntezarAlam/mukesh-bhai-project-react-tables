import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableRow, TableHead, Paper } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Layout from '../components/Layout'
import CustomButton from '../components/CustomButton'
import '../styles/manageroles.css'

const topbarProps = { title: "Manage Roles", createLocation: "Create Roles" }
const useStyles = makeStyles({
  table: {
    minWidth: '68pc',
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
      <div className="manageroles_table_container">
        <div className="managerolesbutton">
          <CustomButton text="Create Roles" />
        </div>
        <div className="manageroles_table">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell >Action</TableCell>
                  <TableCell>Role Name</TableCell>
                  <TableCell>Description Name</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                      {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                  </TableCell> <TableCell><DeleteIcon className='roles-icon' /><OpenInNewIcon /> </TableCell>
                  <TableCell>dyeryueretyertyr</TableCell>
                  <TableCell>sdeytue</TableCell>
                  <TableCell><CheckBoxIcon /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                      {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                  </TableCell>
                  <TableCell><DeleteIcon className='roles-icon' /><OpenInNewIcon /> </TableCell>
                  <TableCell>dyeryueretyertyr</TableCell>
                  <TableCell>sdeytue</TableCell>
                  <TableCell><CheckBoxIcon /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                      {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                  </TableCell>
                  <TableCell><DeleteIcon className='roles-icon' /><OpenInNewIcon /> </TableCell>
                  <TableCell>dyeryueretyertyr</TableCell>
                  <TableCell>sdeytue</TableCell>
                  <TableCell><CheckBoxIcon /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                      {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                  </TableCell>
                  <TableCell><DeleteIcon className='roles-icon' /><OpenInNewIcon /> </TableCell>
                  <TableCell>dyeryueretyertyr</TableCell>
                  <TableCell>sdeytue</TableCell>
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
