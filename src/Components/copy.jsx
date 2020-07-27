import React, { Component } from 'react';
import { getAllListData,editFunction,deleteFunction } from '../ActionCreator/Action'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import { Grid, Input, Divider, } from '@material-ui/core';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';





    const useStyles = withStyles((theme) => ({
        root: {
          width: '50%',
        //   maxWidth: '36ch',
          backgroundColor: theme.palette.background.paper,
        }, }));
   

    class ListTable extends Component  {
        state={
            first_name: '',
            last_name:'',
            email:''  
        }

   
    componentDidMount(){

        getAllListData()
    }
    
    // const classes = useStyle();

render(){
const {classes} = this.props   

  return (
      <Grid
      container
      lg={12} 
      justify="center"
      alignItems="center"
      >
         <List className={classes.root}  >
          { this.listData && this.listData.map((elem,i)=>{
              return(
              <React.Fragment key={i} >
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
                            <Input
                                disabled={elem.isEdit?true:false}
                               defaultValue={"First Name :- " + elem.first_name }
                               onChange={(e)=>this.setState({ first_name:e.target.value} )}
                                variant="body2"
                                color="textPrimary"
                            />
                            <Input
                               value={"Last Name :- " + elem.last_name}
                               onChange={(e)=>this.setState({ last_name: e.target.value} )}
                                variant="body2"
                                color="textPrimary"
                            />
                            <Input
                               value={"Email :- " + elem.email}
                               onChange={(e)=>this.setState( {email: e.target.value} )}
                                variant="body2"
                                color="textPrimary"
                            />
                            </React.Fragment>
                        }
                        />
                        </Grid>
                  <Grid item lg={2}>
                    <EditRoundedIcon onClick={()=> this.editFunction(elem.id)} /> 
                    <DeleteRoundedIcon onClick={()=> this.deleteFunction(elem.id)} /> 
                  </Grid>
                    </ListItem>
                    <Divider variant="inset" component="li" />
            </React.Fragment>
              )
          })}

    </List>
    </Grid>
    )
}
}

const mapStateToProps = (state)=>{
    console.log(state.app.listData)
    return{
        listData: state.app.listData,
        edit: state.app.edit,
    }
}

export default  (withStyles(useStyles), connect(mapStateToProps,{getAllListData,editFunction,deleteFunction})) (ListTable);



