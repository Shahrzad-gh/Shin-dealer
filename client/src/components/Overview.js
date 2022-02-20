import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../Store/actions/productActions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const useStyles = makeStyles(() => ({
  root: {
    //maxWidth: 200,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 10,
  },
  cover: {
    display: "block",
    overflow: "hidden",
    position: "relative",
    // -webkitTr: "transform 0.9s ease",
    // -o-transition: "transform 0.9s ease",
    // -moz-transition: "transform 0.9s ease",
  },
  media: {
    // width: "100%",
    height: "100%",
    // "&:hover": {
    //   transform: "scale(1.3)",
    //   transition: "transform 0.9s ease",
    // },
    // "&:hover + a": {
    //   bottom: "50px",
    //   animation: "2s ease infinite",

    //   //transform: "translateY(-50%)",
    // },
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  styledCard: {
    padding: 50,
  },
  media: {
    height: 200,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  typography: {
    fontFamily: "Almarai !important",
    width: "max-content",
    fontSize: "1rem !important",
    fontWeight: "bold",
    textAlign: "right",
  },
  addIcon: {
    height: 38,
    width: 38,
  },
  cover: {
    height: 140,
  },
  content: {
    paddingBottom: "0!important",
  },
}));

function Overview() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const allProduct = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState();

  const handleShowModal = (e) => {
    e.preventDefault();
    const index = e.target.attributes.index.value;
    setSelectedCard(allProduct[index]);
    setOpen(true);
  };
  const handleCloseModal = (e) => {
    setOpen(false);
  };

  return (
    <>
      <div className="overview">
        <h1>Overview</h1>
        <Grid container>
          {allProduct.map((product, i) => (
            <Grid
              item
              xs={6}
              md={3}
              key={i}
              className={(classes.styledCard, classes.typography)}
            >
              <Card className={classes.root}>
                <CardActionArea>
                  <div className={classes.details}>
                    {product.picture.img && (
                      <div className="parent right">
                        <div
                          className="child bg-two"
                          style={{
                            backgroundImage: `url(${product.picture.img})`,
                          }}
                        >
                          <a index={i} onClick={handleShowModal} href="#">
                            Quick view
                          </a>
                        </div>
                      </div>
                    )}

                    <CardContent className={classes.content}>
                      <Typography
                        variant="subtitle1"
                        color="textSecondary"
                        className={classes.typography}
                        name="name"
                        //value={name}
                      >
                        {product.name}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        color="textSecondary"
                        className={classes.typography}
                        name="price"
                        //value={price}
                      >
                        {product.price}$
                      </Typography>
                    </CardContent>
                  </div>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
          <Dialog
            open={open}
            onClose={handleCloseModal}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            {/* <DialogTitle id="alert-dialog-title">
              {"Use Google's location service?"}
            </DialogTitle> */}
            <DialogContent>
              <Container
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Container disableGutters>
                  <img
                    style={{
                      maxWidth: "100%",
                      maxHeight: "calc(100vh - 200px)",
                    }}
                    src={selectedCard?.picture.img}
                    alt="image"
                  />
                </Container>
                <Container>
                  <DialogContentText
                    id="alert-dialog-description"
                    className={classes.typography}
                    style={{ marginLeft: "auto" }}
                  >
                    {selectedCard?.name}
                    {selectedCard?.price}
                  </DialogContentText>
                  <DialogActions>
                    <Button onClick={handleCloseModal}>
                      <Typography className={classes.typography}>
                        انصراف
                      </Typography>
                    </Button>
                    <Button onClick={handleCloseModal} autoFocus>
                      <Typography className={classes.typography}>
                        افزودن به سبد خرید
                      </Typography>
                    </Button>
                  </DialogActions>
                </Container>
              </Container>
            </DialogContent>
          </Dialog>
        </Grid>
      </div>
    </>
  );
}

export default Overview;
