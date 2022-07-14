import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableRow, TableHead, Paper } from '@material-ui/core';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Layout from '../components/Layout'
import CustomButton from '../components/CustomButton'
import '../styles/discountsAndCoupons.css'



const topbarProps = { title: "Diuscount & Coupons", create: "Create Coupons" }

const useStyles = makeStyles({
  table: {
    minWidth: '70pc',
  },
});


const DiscountsAndCoupons = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const styles = { width: '15%' }
  return (
    <>
      <Layout topbarProps={topbarProps}>
        <div className="discount_table_container">
          <div className="discountadd__button">
            <CustomButton text="Create Coupons" />
          </div>
          <div className="discount_table">
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead  >
                  <TableRow >
                    <TableCell style={{ width: '15%' }}>Coupon</TableCell>
                    <TableCell style={{ width: '15%' }}>Start Date</TableCell>
                    <TableCell style={{ width: '15%' }}>End Date</TableCell>
                    <TableCell style={{ width: '15%' }}>Discount(%)</TableCell>
                    <TableCell style={{ width: '15%' }}>Price Limit</TableCell>
                    <TableCell style={{ width: '15%' }}>Active</TableCell>
                    <TableCell style={{ width: '15%' }}>Is Used</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>aasadasdsad</TableCell>
                    <TableCell>2-2-2022</TableCell>
                    <TableCell>2-2-2022</TableCell>
                    <TableCell>5</TableCell>
                    <TableCell>200</TableCell>
                    <TableCell><CheckBoxIcon /></TableCell>
                    <TableCell><CheckBoxIcon /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>aasadasdsad</TableCell>
                    <TableCell>2-2-2022</TableCell>
                    <TableCell>2-2-2022</TableCell>
                    <TableCell>5</TableCell>
                    <TableCell>200</TableCell>
                    <TableCell><CheckBoxIcon /></TableCell>
                    <TableCell><CheckBoxIcon /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>aasadasdsad</TableCell>
                    <TableCell>2-2-2022</TableCell>
                    <TableCell>2-2-2022</TableCell>
                    <TableCell>5</TableCell>
                    <TableCell>200</TableCell>
                    <TableCell><CheckBoxIcon /></TableCell>
                    <TableCell><CheckBoxIcon /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>aasadasdsad</TableCell>
                    <TableCell>2-2-2022</TableCell>
                    <TableCell>2-2-2022</TableCell>
                    <TableCell>5</TableCell>
                    <TableCell>200</TableCell>
                    <TableCell><CheckBoxIcon /></TableCell>
                    <TableCell><CheckBoxIcon /></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default DiscountsAndCoupons;