import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import { updateOrderStatus } from "../../Store/actions/orderActions";
import { useDispatch, useSelector } from "react-redux";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 35,
  },

  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
  timeline: {
    paddingTop: 40,
    //transform: "rotate(90deg)"
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Order is set",
    "Order is packed",
    "Order is shipped",
    "Order is delivered",
  ];
}

function getStepNum(step) {
  switch(step){
    case 'Ordered':
      return 0;
    case 'packed':
      return 1;
    case 'shipped':
      return 2;
    case 'delivered':
      return 3;  
  }
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return "Ordered";
    case 1:
      return "packed";
    case 2:
      return "shipped";
    case 3:
      return "delivered";
    default:
      return "Wrong";
  }
}

function ManageOrder(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = React.useState(props.location.param.status && getStepNum(props.location.param.status));
  const steps = getSteps();
  const orders = useSelector((state) => state.orders);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const step = getStepContent(activeStep);
    const payload = {
      params: {
        step,
        id: props.match.params.id,
      },
    };
    console.log(activeStep);

    dispatch(updateOrderStatus(payload));
  };

  console.log(orders);
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep );
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      Manage order Status
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ManageOrder;
