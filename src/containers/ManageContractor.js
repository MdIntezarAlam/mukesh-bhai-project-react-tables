import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableRow, TableHead, Paper, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import AddIcon from '@material-ui/icons/Add';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Layout from '../components/Layout'
import CustomButton from '../components/CustomButton'
import '../styles/managecontractor.css'

const topbarProps = { title: "Manage Contractor", createmanageContractor: "Create Contrractor" }
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
      <div className="managecontractor_table_container">
        {/* Button Component */}
        <div className="managecontractor_button">
          <CustomButton text="Create Contractor" />
        </div>
        {/* Table Component */}
        <div className="managecontractor_table">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Action</TableCell>
                  <TableCell >First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Mobile</TableCell>
                  <TableCell>Contractor Type</TableCell>
                  <TableCell>SSN/Tax id</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                      {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                  </TableCell>
                  <TableCell><DeleteIcon className='contractor-icon' /> </TableCell>
                  <TableCell>Alam</TableCell>
                  <TableCell>Ram</TableCell>
                  <TableCell>inte@gmiai.com</TableCell>
                  <TableCell>4646456456</TableCell>
                  <TableCell>company</TableCell>
                  <TableCell>123123</TableCell>
                  <TableCell><CheckBoxIcon /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                      {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                  </TableCell>
                  <TableCell><DeleteIcon className='contractor-icon' /> </TableCell>
                  <TableCell>Alam</TableCell>
                  <TableCell>Ram</TableCell>
                  <TableCell>inte@gmiai.com</TableCell>
                  <TableCell>4646456456</TableCell>
                  <TableCell>company</TableCell>
                  <TableCell>123123</TableCell>
                  <TableCell><CheckBoxIcon /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                      {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                  </TableCell>
                  <TableCell><DeleteIcon className='contractor-icon' /> </TableCell>
                  <TableCell>Alam</TableCell>
                  <TableCell>Ram</TableCell>
                  <TableCell>inte@gmiai.com</TableCell>
                  <TableCell>4646456456</TableCell>
                  <TableCell>company</TableCell>
                  <TableCell>123123</TableCell>
                  <TableCell><CheckBoxIcon /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                      {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                  </TableCell>
                  <TableCell><DeleteIcon className='contractor-icon' /> </TableCell>
                  <TableCell>Alam</TableCell>
                  <TableCell>Ram</TableCell>
                  <TableCell>inte@gmiai.com</TableCell>
                  <TableCell>4646456456</TableCell>
                  <TableCell>company</TableCell>
                  <TableCell>123123</TableCell>
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
