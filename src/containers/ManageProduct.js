import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableRow, TableHead, Paper, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Layout from '../components/Layout'
import CustomButton from '../components/CustomButton'
import '../styles/manageproduct.css';
import a from '../images/a.jpg'
import b from '../images/b.png'
import d from '../images/d.jpg'
import e from '../images/e.jpg'


const topbarProps = { title: "Manage Products", createproduct: "Create product" }
const useStyles = makeStyles({
  table: {
    minWidth: '70pc',
  },
});


const ManageProduct = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const styles = { width: '15%' }
  return (
    <Layout topbarProps={topbarProps}>
      <div className="manageproduct_table_container">
        {/* Button Component */}
        <div className="manageproduct_top_container">
          <select className='product_inputsearch'>
            <option>Select Parent Category</option>
            <option>Air Conditioners</option>
            <option>Cookies</option>
            <option></option>
          </select>
          <div className="custom_button">
            <CustomButton text="Create Product" />
          </div>
        </div>
        {/* Table Component */}
        <div className="manageproduct_table">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead  >
                <TableRow >
                  <TableCell></TableCell>
                  <TableCell >Action</TableCell>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Product Category</TableCell>
                  <TableCell>Product Brand</TableCell>
                  <TableCell>Product UPC</TableCell>
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
                  <TableCell><DeleteIcon style={{ marginRight: '15%' }} /><OpenInNewIcon /> </TableCell>
                  <TableCell>dyeryueretyertyr</TableCell>
                  <TableCell>sdeytue</TableCell>
                  <TableCell>sdeytue</TableCell>
                  <TableCell>455445456465</TableCell>
                  <TableCell><CheckBoxIcon /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <IconButton size="small" onClick={() => setOpen(!open)}>
                      {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                  </TableCell>
                  <TableCell><DeleteIcon style={{ marginRight: '15%' }} /><OpenInNewIcon /> </TableCell>
                  <TableCell>dyeryueretyertyr</TableCell>
                  <TableCell>sdeytue</TableCell>
                  <TableCell>sdeytue</TableCell>
                  <TableCell>455445456465</TableCell>
                  <TableCell><CheckBoxIcon /></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <div className="manageproduct_images">
            <img src={a} alt="" />
            <img src={b} alt="" />
            <img src={d} alt="" />
            <img src={e} alt="" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default ManageProduct;