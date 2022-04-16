// import { ClassNames } from '@emotion/react'
// import React from 'react'
// import { makeStyles } from "@mui/styles";
// import ListSubheader from '@mui/material/ListSubheader';
// import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Collapse from '@mui/material/Collapse';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import DraftsIcon from '@mui/icons-material/Drafts';
// import SendIcon from '@mui/icons-material/Send';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import StarBorder from '@mui/icons-material/StarBorder';
// import { borderBottom, textAlign } from '@mui/system';
// import Switch from '@mui/material/Switch';
// import WifiIcon from '@mui/icons-material/Wifi';
// import BluetoothIcon from '@mui/icons-material/Bluetooth';
// import ListItem from '@mui/material/ListItem';

// const useStyles = makeStyles({
//   root: {
//     padding: 20,
//     margin: 10,
//     marginTop: 0,
//     borderRadius:25,
//     border: "1px solid lightgray",
//   },
//   container: {
//     padding: 5,
//     width: 200,
//     minWidth: 200,
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "flex-start",
//   },
// });
// function Filters() {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(false);
//   const [checked, setChecked] = React.useState([]);

//   const handleToggle = (value) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };
//   const handleClick = () => {
//     setOpen(!open);
//   };


//   return (
//     <div className={classes.root}>
//       <div className={classes.container}>
//       <List
//       sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
//       component="nav"
//       aria-labelledby="nested-list-subheader"
//       subheader={
//         <ListSubheader component="div" id="nested-list-subheader">
// فیلترها        </ListSubheader>
//       }
//     >
//       <ListItemButton onClick={handleClick}>
//         <ListItemText primary="دسته بندی ها" />
//         {open ? <ExpandLess /> : <ExpandMore />}
//       </ListItemButton>
//       <Collapse in={open} timeout="auto" unmountOnExit>
//         <List component="div" disablePadding>
//           <ListItemButton sx={{ pl: 4 }}>
//             <ListItemText primary="انتخاب دسته بندی" />
//           </ListItemButton>
//         </List>
//       </Collapse>
//       <ListItemButton onClick={handleClick}>
//         <ListItemText primary="برند" />
//         {open ? <ExpandLess /> : <ExpandMore />}
//       </ListItemButton>
//       <Collapse in={open} timeout="auto" unmountOnExit>
//         <List component="div" disablePadding>
//           <ListItemButton sx={{ pl: 4 }}>
  
//             <ListItemText primary="نام برند" />
//           </ListItemButton>
//         </List>
//       </Collapse>
//       <ListItemButton onClick={handleClick}>
//         <ListItemText primary="محدوده قیمت" />
//         {open ? <ExpandLess /> : <ExpandMore />}
//       </ListItemButton>
//       <Collapse in={open} timeout="auto" unmountOnExit>
//         <List component="div" disablePadding>
//           <ListItemButton sx={{ pl: 4 }}>
//             <ListItemText primary="انتخاب قیمت" />
//           </ListItemButton>
//         </List>
//       </Collapse>
//       <ListItem>
//         <ListItemText id="switch-list-label-wifi" primary="کالاهای موجود" />
//         <Switch
//           edge="end"
//           onChange={handleToggle('wifi')}
//           checked={checked.indexOf('wifi') !== -1}
//           inputProps={{
//             'aria-labelledby': 'switch-list-label-wifi',
//           }}
//         />
//       </ListItem>

//     </List>
// </div>
//     </div>
//   )
// }

// export default Filters