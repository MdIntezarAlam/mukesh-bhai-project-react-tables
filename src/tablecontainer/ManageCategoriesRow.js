import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { TableContainer,Paper,Table, TableBody, TableCell, TableRow, TableHead, IconButton, Collapse, Box, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const ManageCategoryRow = () => {
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
        <TableCell>Phone</TableCell>
        <TableCell>5</TableCell>
        <TableCell>Register</TableCell>
        <TableCell>/register</TableCell>
        <TableCell><CheckBoxIcon /></TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
          <TableContainer component={Paper}>
            <Box margin={1}>
              <Table>
                <TableHead>
                  <TableRow>
                  <TableCell></TableCell>
                    <TableCell>Action</TableCell>
                    <TableCell>Category Name</TableCell>
                    <TableCell>Screen Order</TableCell>
                    <TableCell>Template </TableCell>
                    <TableCell>URL Path</TableCell>
                    <TableCell>Category Image</TableCell>
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
                    <TableCell><DeleteIcon className='location-icon' /><OpenInNewIcon /> </TableCell>
                    <TableCell>Washer </TableCell>
                    <TableCell>Washer And Dryer</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>/washes</TableCell>
                    <TableCell></TableCell>
                    <TableCell><CheckBoxIcon /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                      </IconButton>
                    </TableCell>
                    <TableCell><DeleteIcon className='location-icon' /><OpenInNewIcon /> </TableCell>
                    <TableCell>Washer</TableCell>
                    <TableCell>Washer And Dryer</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>/washes</TableCell>
                    <TableCell></TableCell>
                    <TableCell><CheckBoxIcon /></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
            </TableContainer>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
export default ManageCategoryRow