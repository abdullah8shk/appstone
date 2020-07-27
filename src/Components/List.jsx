import React, { useEffect, useState } from "react";
import {getAllListData,editFunction,deleteFunction} from "../ActionCreator/Action";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import { Grid, Divider } from "@material-ui/core";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
  button:{
    cursor: 'pointer'
  }
}));

function ListTable(props) {
  const { getAllListData, listData, editFunction, deleteFunction } = props;
  const classes = useStyles();

  const [listValue, setListValue] = useState({
    first_name: "",
    last_name: "",
    email: "",
    isEdit: false,
  });

  useEffect(() => {
    getAllListData();
  }, []);

  return (
    <Grid container lg={12} justify="center" alignItems="center">
      <List className={classes.root}>
        {listData &&
          listData.map((elem, i) => {
            return (
              <React.Fragment key={i}>
                <ListItem alignItems="flex-start">
                  <Grid item lg={2}>
                    <ListItemAvatar>
                      <Avatar alt={elem.first_name} src={elem.avatar} />
                    </ListItemAvatar>
                  </Grid>
                  <Grid item lg={8}>
                    <ListItemText
                      secondary={
                        <React.Fragment>
                              <form className={classes.root} noValidate autoComplete="off">
                                <TextField
                                 id="standard-basic"
                                 label="First Name"
                                 disabled={!elem.isEdit}
                                 defaultValue={!listValue.isEdit? elem.first_name: listValue.first_name}
                                 onChange={(e) => setListValue(e.target.value)}
                                   />
                                <TextField
                                 id="standard-basic"
                                 label="Last Name"
                                 disabled={!elem.isEdit}
                                 defaultValue={!listValue.isEdit? elem.last_name: listValue.last_name}
                                 onChange={(e) => setListValue(e.target.value)}
                                   />
                                <TextField
                                 id="standard-basic"
                                 label="Email"
                                 disabled={!elem.isEdit}
                                 defaultValue={!listValue.isEdit? elem.email: listValue.email}
                                 onChange={(e) => setListValue(e.target.value)}
                                   />
                              </form>
                        </React.Fragment>
                      }
                    />
                  </Grid>
                  <Grid item lg={2}>
                    {elem.isEdit === false ? (
                      <EditRoundedIcon className={classes.button} onClick={() => editFunction(elem.id)} />
                    ) : (
                      <CheckCircleRoundedIcon className={classes.button} onClick={() => editFunction(elem.id)}/>
                    )}
                    <DeleteRoundedIcon className={classes.button} onClick={() => deleteFunction(elem.id)}
                    />
                  </Grid>
                </ListItem>
                <Divider variant="inset" component="li" />
              </React.Fragment>
            );
          })}
      </List>
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    listData: state.app.listData,
  };
};

export default connect(mapStateToProps, {getAllListData,editFunction,deleteFunction,})(ListTable);
