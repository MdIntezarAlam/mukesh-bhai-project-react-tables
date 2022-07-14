import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, TableContainer } from '@material-ui/core';
import Layout from '../components/Layout'
import CustomButton from '../components/CustomButton'
import '../styles/managecategories.css'
import ManageCategoryRow from '../tablecontainer/ManageCategoriesRow';

const topbarProps = { title: "Manage Category", CreateMAnageCategories: "Create Category" }
const useStyles = makeStyles({
  table: {
    minWidth: '70pc',
  },
});

const ManageCategory = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const styles = { width: '15%' }
  return (
    <Layout topbarProps={topbarProps}>
      <div className="managecategorie_table_container">
        <div className="managecategorie_button">
          <CustomButton text="Create Categoriy" />
        </div>
        <div className="managecategories_table">
          <TableContainer component={Paper}>
            <Table >
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell>Caetgory Name</TableCell>
                  <TableCell>Screen Order</TableCell>
                  <TableCell>Template</TableCell>
                  <TableCell>URL Path</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <ManageCategoryRow />
                <ManageCategoryRow />
                <ManageCategoryRow />
                <ManageCategoryRow />
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </Layout>
  );
}
export default ManageCategory;