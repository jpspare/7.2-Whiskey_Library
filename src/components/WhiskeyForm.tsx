import { useForm } from 'react-hook-form'
import { 
  Button, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogTitle, 
  Grid} from '@mui/material';

import Input from "./Input"
import { server_calls } from "../api/server";
import { useDispatch, useStore } from "react-redux";
import { chooseName, chooseRegion, chooseYearsAged, chooseTastes } from "../redux/slices/RootSlice";

interface WhiskeyFormProps {
  open: boolean;
  onClose: () => void;
  id?: string[]
}

const WhiskeyForm = ( props:WhiskeyFormProps ) => {
  const { register, handleSubmit } = useForm({});
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id);
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.name } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000);
    } else {
      dispatch(chooseName(data.name));
      dispatch(chooseRegion(data.region));
      dispatch(chooseYearsAged(data.years_aged));
      dispatch(chooseTastes(data.tastes));

      server_calls.create(store.getState())
      setTimeout(() => {window.location.reload()}, 1000);

      props.onClose();
    }
  }

  return (
    <Dialog open={props.open} onClose={() => (props.onClose())} >
        {props.id && props.id.length > 0 ? 
          (<DialogTitle>Update Your Whiskey</DialogTitle>) :
          (<DialogTitle>Add Your Whiskey</DialogTitle>)
        }
        <DialogContent>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Input {...register('name')} name='name' placeholder="Name"/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Input {...register('region')} name='region' placeholder="Region"/>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Input {...register('years_aged')} name='years_aged' placeholder="Years Aged"/>
              </Grid>
              <Grid item xs={12} sm={9}>
                <Input {...register('tastes')} name='tastes' placeholder="Tastes"/>
              </Grid>
            </Grid>
        </DialogContent>
        <DialogActions>
            <Button onClick={props.onClose} color="error" variant="outlined">Cancel</Button>
            <Button onClick={handleSubmit(onSubmit)} variant="outlined">Submit</Button>
        </DialogActions>
    </Dialog>
  )
}

export default WhiskeyForm

// Future Buildout: populate the form fields with current values on 'update'