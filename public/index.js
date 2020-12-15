import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';


const websites = [
	{
		url: 'https://cse.unl.edu/~mmacfadyen/gallery.html',
		pic: 'C:\Users\memac\allcode\reactapp\assets\A83160_015.jpg',
		title: 'Photography',
		width: '100%',
	},
	{
		url: 'https://cse.unl.edu/~mmacfadyen/ac.php',
		title: 'Animal Crossing',
		pic: 'https://4.bp.blogspot.com/-xyfmMe4jwXY/UdAgCX-s9SI/AAAAAAAACFw/9D1m7JCIda8/s1600/Animal+Crossing+New+Leaf+Guide+1.jpg',
		width: '100%',
	},
	{
		url: 'https://master.d3bl8ejc1cvriu.amplifyapp.com/disaster-dashboard',
		title: 'Disaster Relief and Coordination',
		pic: 'https://s.w-x.co/util/image/w/ap19076697745566.jpg?v=at&w=815&h=458',
		width: '100%',
	}
]

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	item: {
		height: 215,
		width: 100,
	},
	margin: {
		position: 'center',
	},
	image: {
		position: 'relative',
		height: 200,
		[theme.breakpoints.down('xs')]: {
		  width: '100% !important', // Overrides inline-style
		  height: 100,
		},
		'&:hover, &$focusVisible': {
		  zIndex: 1,
		  '& $imageBackdrop': {
			opacity: 0.15,
		  },
		  '& $imageMarked': {
			opacity: 0,
		  },
		  '& $imageTitle': {
			border: '4px solid currentColor',
		  },
		},
	  },
	  focusVisible: {},
	  imageButton: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: theme.palette.common.white,
	  },
	  imageSrc: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundSize: 'cover',
		backgroundPosition: 'center 40%',
	  },
	  imageBackdrop: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundColor: theme.palette.common.black,
		opacity: 0.4,
		transition: theme.transitions.create('opacity'),
	  },
	  imageTitle: {
		position: 'relative',
		padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
	  },
	  imageMarked: {
		height: 3,
		width: 18,
		backgroundColor: theme.palette.common.white,
		position: 'absolute',
		bottom: -2,
		left: 'calc(50% - 9px)',
		transition: theme.transitions.create('opacity'),
	  },
}));

export default function Sites() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  const [spacing, setSpacing] = React.useState(2);

  return (
    <div className={classes.root}>
      <Grid container spacing={2} 
	  	justify="center"
		alignItems="center"
	>
		{websites.map((website, i) => {
			return (
				<Grid item xs={6} className={classes.item}>
					<ButtonBase
						focusRipple
						key={website.title}
						href={website.url}
						className={classes.image}
						focusVisibleClassName={classes.focusVisible}
						style={{
							width: website.width,
						}}
					>
						<span
            				className={classes.imageSrc}
							style={{
							backgroundImage: `url(${website.pic})`,
							}}
						/>
						<span className={classes.imageBackdrop} />
						<span className={classes.imageButton}>
							<Typography
							component="span"
							variant="h6"
							color="inherit"
							className={classes.imageTitle}
							>
							{website.title}
							<span className={classes.imageMarked} />
							</Typography>
						</span>
					</ButtonBase>
				</Grid>
			  )
		  })}
      </Grid>
    </div>
  );
}

ReactDOM.render(
  <Sites />,
  document.getElementById('root')
);