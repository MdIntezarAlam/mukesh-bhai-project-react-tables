import React,{useState} from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import {Box, TableBody, TableRow, TableCell, Typography,Collapse,Table,TableHead} from '@material-ui/core'
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { IconButton } from '@material-ui/core';
import '../tablecontainer_styles/manageuser_row.css'


const ManageUsers_row = () => {
        const [open, setOpen] = useState(false);
        return (
          <>
            <TableRow>
              <TableCell>
                <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
              </TableCell>
              <TableCell><OpenInNewIcon /></TableCell>
              <TableCell>1211212</TableCell>
              <TableCell>Rama</TableCell>
              <TableCell>Saketh</TableCell>
              <TableCell>Rama Saketh</TableCell>
              <TableCell>abc@gmail.com</TableCell>
              <TableCell>6238564088</TableCell>
              <TableCell>Engineering</TableCell>
              <TableCell>Hyd</TableCell>
              <TableCell>Telangana</TableCell>
              <TableCell><CheckBoxIcon /></TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <Box margin={1}>
                    <Typography className='manageuser_row_detals'> USER DETAILS</Typography>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Date</TableCell>
                          <TableCell>Customer</TableCell>
                          <TableCell>Amount</TableCell>
                          <TableCell>Total price </TableCell>
                          <TableCell>Contact No</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell>12</TableCell>
                          <TableCell>12</TableCell>
                          <TableCell>12</TableCell>
                          <TableCell>12</TableCell>
                          <TableCell>12</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </Box>
                </Collapse>
              </TableCell>
            </TableRow>
          </>
        );
      }
export default ManageUsers_row