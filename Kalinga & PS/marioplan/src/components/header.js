import React from "react"
import { connect } from "react-redux"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Redirec from './Redirection'
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import { redirectionAction } from "../store/actions"



function Header(props) {
    const redirection = () => {
        props.redirectionFun(true,'/')
    }
	const classes = useStyles()
    
	return (
        <div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Button color="inherit" onClick={() => redirection()}>H&M</Button>
					<Button color="inherit">Login</Button>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="Menu"
                        >
						<MenuIcon />
					</IconButton>
				</Toolbar>
                <Redirec />
			</AppBar>
		</div>
	)
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}))

function mapDispatchtoProps(dispatch) {
	return {
		redirectionFun: (redirectionFlag, to) => {
			dispatch(redirectionAction(redirectionFlag, to))
		}
	}
}

export default connect(null,mapDispatchtoProps)(Header)
