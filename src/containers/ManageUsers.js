import React,{useEffect} from "react";
import {useNavigate} from  'react-router-dom'
import {PAGE_PATHS} from '../utils/constants'

import { Table, TableBody, TableCell, TableHead, TableRow, Paper, TableContainer } from '@material-ui/core';
import Layout from '../components/Layout';
import CustomButton from "../components/CustomButton";
import ManageUsersRow from '../tablecontainer/ManageUsersRow'
import '../styles/manageuser.css'

const topbarProps = { title: "Manage Users", createUser: "Create User" };

const ManageUsers = () => {


  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  useEffect(() => {
    if (!loggedInUser) {
      navigate(PAGE_PATHS.login);
    }
  }, []);

  if (!loggedInUser) {
    return <p></p>;
  }

  return <Layout topbarProps={topbarProps}>
    <div className="manage_table_container">
    <p className="reg_success">Welcome {loggedInUser.name}</p>
      {/* Button Component */}
      <div className="manageuser_button">
        <CustomButton text="Manage User" />
      </div>
      {/* Table Component */}
      <div className="manage_table">
        <TableContainer component={Paper}>
          <Table >
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Action</TableCell>
                <TableCell>Employee Id</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>UserName</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Mobile</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>city</TableCell>
                <TableCell>Activity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <ManageUsersRow />
              <ManageUsersRow />
              <ManageUsersRow />
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  </Layout>;
};


export default ManageUsers;

